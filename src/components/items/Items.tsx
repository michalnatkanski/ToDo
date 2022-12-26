import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './Items.styles';
import Task from '../task';
import { useSelector } from 'react-redux';

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
