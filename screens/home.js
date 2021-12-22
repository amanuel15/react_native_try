import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';
import ReviewDetails from '../screens/reviewDetails';

export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='Details' onPress={() => navigation.navigate('Details', {
        name: 'aman',
        age: 100,
      })} />
    </View>
  );
}