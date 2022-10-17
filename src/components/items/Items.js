import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native"
//components
import Task from "../task";

const Items = ({ items, completeTask }) => {

    return (
        <ScrollView
            style={styles.itemsWrapper}
            contentInsetAdjustmentBehavior='automatic'
            showsHorizontalScrollIndicator={false}
        >
            <View style={styles.items}>
                {items.map((item, i) => (
                    <TouchableOpacity key={i} onPress={() => completeTask(i)}>
                        <Task text={item} />
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    itemsWrapper: {
        marginBottom: 100
    },
    items: {
        marginTop: 30,
    },
});

export default Items;