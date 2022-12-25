import React from 'react';
import { Text, View } from 'react-native';
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
    <LinearGradient style={styles.container} colors={['#92FFF9', '#3A49F9']}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>
          Today's tasks: {tasks.length}
        </Text>
        <Items />
      </View>
      <InputBar />
    </LinearGradient>
  );
};

export default Todo;
