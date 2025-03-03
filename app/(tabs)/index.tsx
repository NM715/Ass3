import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Fact from '@/components/Facts';

const App = () => {
  const [month, setMonth] = useState<string | null>(null);
  const [day, setDay] = useState<string>('');
  const [isFocus, setIsFocus] = useState(false);

  // dropdown
  const months = [
    { label: 'January', value: '1' },
    { label: 'February', value: '2' },
    { label: 'March', value: '3' },
    { label: 'April', value: '4' },
    { label: 'May', value: '5' },
    { label: 'June', value: '6' },
    { label: 'July', value: '7' },
    { label: 'August', value: '8' },
    { label: 'September', value: '9' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Month</Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'grey' }]}
        data={months}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select Month' : '...'}
        value={month}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setMonth(item.value);
          setIsFocus(false);
        }}
      />

      <Text style={styles.title}>Select a Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Date"
        value={day}
        onChangeText={(text) => setDay(text)}
      />
    {month && day && <Fact month={month} day={day} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  //month
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  //date
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    width: 200,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
    borderRadius: 8,
  },
  dropdown: {
    height: 50,
    width: 200,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
});

export default App;
