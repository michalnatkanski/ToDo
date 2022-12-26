import { StyleSheet } from 'react-native';
import { colors, consts } from '../../styles';

export const styles = StyleSheet.create({
    item: {
        backgroundColor: colors.MAIN_COLORS.WHITE,
        padding: 15,
        borderRadius: consts.BORDER_RADIUS.TASK,
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
        borderRadius: consts.BORDER_RADIUS.TASK_INDEX,
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