import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.MAIN_COLORS.WHITE,
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
        backgroundColor: colors.MAIN_COLORS.PRIMARY,
        opacity: 0.9,
        borderRadius: 5,
        marginRight: 15,
    },
    index: {
        textAlign: 'center',
        color: colors.MAIN_COLORS.WHITE,
        paddingTop: 4,
    },
    itemText: {
        maxWidth: '80%',
    },
});