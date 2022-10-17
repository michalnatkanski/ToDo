import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { RemoveTodo } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
});

const Task = ({ item }) => {

    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const taskItems = data.taskItems.taskItems;

    const removeTodo = (item) => {
        const todoIndex = taskItems.indexOf(item);
        
        if (todoIndex > -1) {
          dispatch(RemoveTodo(item));
        } else {
          alert(`${item}is not in the Todo List`);
        }
      }

    return (
        <TouchableOpacity onPress={() => removeTodo(item)}>
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.square}></View>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
                <View style={styles.circular}></View>
            </View>
        </TouchableOpacity>
    )
}

export default Task;