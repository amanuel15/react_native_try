import React from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { globalStyles } from '../styles/global';
import ReviewDetails from '../screens/reviewDetails';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/counter';

export default function Home({navigation}) {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen count: { count }</Text>
      <Button 
        title='Increment'
        onPress={() => dispatch(increment())}
      />
      <Button 
        title='Decrement'
        onPress={() => dispatch(decrement())}
      />
      <Button title='Details' onPress={() => navigation.navigate('Details', {
        name: 'aman',
        age: 100,
      })} />
    </View>
  );
}