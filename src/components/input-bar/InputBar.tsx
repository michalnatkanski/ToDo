import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  Platform,
} from 'react-native';
import { styles } from './InputBar.styles';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodo } from '../../redux/actions/actions';

interface State {
  taskItems: Array<string>
}

const InputBar = () => {
  const [taskValue, setTaskValue] = useState<string>('');
  const dispatch = useDispatch();
  const taskItems = useSelector((state: State) => state.taskItems);

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (taskItems && !taskItems.includes(taskValue) && taskValue) {
      dispatch(AddTodo(taskValue));
    }
    setTaskValue('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}>
      <TextInput
        style={styles.input}
        placeholder={'Write a task'}
        value={taskValue}
        onChangeText={value => setTaskValue(value)}
      />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default InputBar;
