import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './Todo.styles';
//components
import Items from '../items';
import InputBar from '../input-bar';
import { useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

interface State {
  taskItems: Array<string>
}

const Todo = () => {
  const tasks = useSelector((state: State) => state.taskItems);

  return (

    <LinearGradient style={styles.backgroundContainer} colors={['#92FFF9', '#3A49F9']}>
      <SafeAreaView style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>
            Today's tasks: {tasks.length}
          </Text>
          <Items />
        </View>
        <InputBar />
      </SafeAreaView>
    </LinearGradient >

  );
};

export default Todo;
