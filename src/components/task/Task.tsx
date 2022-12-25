import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Task.styles';
import { RemoveTodo } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

interface State {
  taskItems: Array<string>
}

const Task = ({ item }: { item: string }) => {
  const dispatch = useDispatch();
  const taskItems = useSelector((state: State) => state.taskItems);

  const taskIndex = taskItems.indexOf(item) + 1;

  const removeTodo = (item: string) => {
    const todoIndex = taskItems.indexOf(item) + 1;

    if (todoIndex < -1) return;
    dispatch(RemoveTodo(item));
  };

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.indexWrapper}>
          <Text style={styles.index}>{taskIndex}</Text>
        </View>
        <Text style={styles.itemText}>{item}</Text>
      </View>
      <TouchableOpacity onPress={() => removeTodo(item)}>
        <View>
          <Feather name="x-circle" size={25} color={'#55BCF6'} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Task;
