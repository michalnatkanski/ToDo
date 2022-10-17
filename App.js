import React, { useState } from 'react';

import {
  Keyboard,
  StyleSheet,
  Text,
  View,
} from 'react-native';

//components
import Task from './src/components/task';
import Items from './src/components/items';
import InputBar from './src/components/input-bar';
const App = () => {
 
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }

  const completeTask = (i) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(i, 1);
    setTaskItems(itemsCopy);
  }

  const editTask = (i) => {

  }
// dorobic edytowanie
// kontener flatlist aby mozna bylo scrollowac
// oddzielic style do plikow
// przerobic component task aby przyjmowal edycje oraz usuwanie
// animacja pokazujaca opcje do wyboru, 

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks: {taskItems.length}</Text>
        {/* Items list */}
        <Items items={taskItems} completeTask={completeTask}/>
      </View>
        {/* input bar */}
        <InputBar task={task} setTask={setTask} handleAddTask={handleAddTask}/>
    </View>
  );
};

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

export default App;
