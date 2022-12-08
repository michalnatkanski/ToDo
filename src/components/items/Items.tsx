import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
//components
import Task from '../task';
import {useSelector} from 'react-redux';

const styles = StyleSheet.create({
  itemsWrapper: {
    marginBottom: 155,
    marginTop: 30,
  },
});

const Items = () => {
  const data = useSelector(state => state);
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const taskItems = data.taskItems.taskItems;

  return (
    <FlatList
      style={styles.itemsWrapper}
      data={taskItems}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => (
        <View>
          <Task item={item} />
        </View>
      )}
    />
  );
};

export default Items;
