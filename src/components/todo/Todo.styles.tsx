import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        backgroundColor: colors.MAIN_COLORS.SECONDARY,
    },
    container: {
        flex: 1
    },
    tasksWrapper: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});