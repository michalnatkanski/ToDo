import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {AddTodo} from '../../redux/actions/actions';

const styles = StyleSheet.create({
  writeTaskWrapper: {
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    width: 250,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
  },
  addText: {
    fontSize: 18,
  },
});

const InputBar = () => {
  const [taskValue, setTaskValue] = useState();

  const dispatch = useDispatch();
  const data = useSelector(state => state);
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const taskItems = data.taskItems.taskItems;

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (taskItems && !taskItems.includes(taskValue)) {
      dispatch(AddTodo(taskValue));
    }
    // @ts-expect-error TS(2345): Argument of type 'null' is not assignable to param... Remove this comment to see the full error message
    setTaskValue(null);
  };

  return (
    <KeyboardAvoidingView
      // @ts-expect-error TS(2304): Cannot find name 'Platform'.
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}>
      <TextInput
        style={styles.input}
        placeholder={'Write a task'}
        value={taskValue}
        // @ts-expect-error TS(2769): No overload matches this call.
        onChangeText={setTaskValue}
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
