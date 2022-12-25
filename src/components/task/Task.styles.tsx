import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        flexWrap: 'wrap',
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
        paddingTop: 4,
    },
    itemText: {
        maxWidth: '80%',
    },
});