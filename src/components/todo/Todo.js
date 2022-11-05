import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

//components
import Items from '../items';
import InputBar from '../input-bar';

import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const Todo = () => {
 
  const data = useSelector(state => state);
  const taskItems = data.taskItems.taskItems; 

  return (
   
       <LinearGradient style={styles.container} colors={['#92FFF9', '#3A49F9']}>
      <View style={styles.tasksWrapper}>
     
        <Text style={styles.sectionTitle}>Today's tasks: {taskItems.length}</Text>
       
        <Items />
      </View>
        <InputBar />
        </LinearGradient>
   
  );
};

export default Todo;
