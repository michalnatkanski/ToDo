import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
//components
import Task from '../task';
import { useSelector } from 'react-redux';

const styles = StyleSheet.create({
  itemsWrapper: {
    marginBottom: 155,
    marginTop: 30,
  },
});

interface State {
  taskItems: Array<string>
}

const Items = () => {
  const taskItems = useSelector((state: State) => state.taskItems);

  return (
    <FlatList
      style={styles.itemsWrapper}
      data={taskItems}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View>
          <Task item={item} />
        </View>
      )}
    />
  );
};

export default Items;
