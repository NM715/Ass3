import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface FactProps {
  month: string;
  day: string;
}

const Fact: React.FC<FactProps> = ({ month, day }) => {
  const [fact, setFact] = useState<string>('');

  useEffect(() => {
    if (!month || !day) return;

    const fetchFact = async () => {
      try {
        const response = await fetch(
          `https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`,
          {
            headers: {
              'X-RapidAPI-Key': '186347dbe8msh1f5032e504df762p13819cjsn6ade25838650',
              'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
            }
          }
        );
        
        const data = await response.json();
        setFact(data.text || "Interesting fact not found");
      } catch {
        setFact("Failed to fetch fact");
      }
    };

    fetchFact();
  }, [month, day]);

  return (
    <View style={styles.container}>
      <Text style={styles.factText}>{fact}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    backgroundColor: '#89CFF0',
    borderRadius: 8,
  },
  factText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Fact;