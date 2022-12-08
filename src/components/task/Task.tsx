import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { RemoveTodo } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import Feather  from 'react-native-vector-icons/Feather';

Feather.loadFont();

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
    indexWrapper: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.9,
        borderRadius: 5,
        marginRight: 15,
    },
    index: {
        textAlign: 'center',
        color: '#fff',
        paddingTop: 4
    },
    itemText: {
        maxWidth: '80%',
    }, 
});

const Task = ({ item }) => {

    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const taskItems = data.taskItems.taskItems;

    const taskIndex = taskItems.indexOf(item) + 1;

    const removeTodo = (item) => {
        const todoIndex = taskItems.indexOf(item);
        
        if (todoIndex > -1) {
          dispatch(RemoveTodo(item));
        } else {
          alert(`${item}is not in the Todo List`);
        }
    }

    return (
        
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <View style={styles.indexWrapper}><Text style={styles.index}>{taskIndex}</Text></View>
                    <Text style={styles.itemText}>{item}</Text>
                </View>
                <TouchableOpacity onPress={() => removeTodo(item)}>
                <View style={styles.removeWrapper}>
                    <Feather name="x-circle" size={25} color={'#55BCF6'}/>
                </View>
                </TouchableOpacity>
            </View>
       
    )
}

export default Task;