import { StyleSheet } from "react-native";
import { colors, consts } from "../../styles";

export const styles = StyleSheet.create({
    writeTaskWrapper: {
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: colors.MAIN_COLORS.WHITE,
        borderRadius: consts.BORDER_RADIUS.INPUT,
        width: 250,
        shadowColor: colors.MAIN_COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: consts.SHADOW_RADIUS.INPUT,
        elevation: 18,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: colors.MAIN_COLORS.WHITE,
        borderRadius: consts.BORDER_RADIUS.INPUT,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.MAIN_COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.48,
        shadowRadius: consts.SHADOW_RADIUS.INPUT,
        elevation: 18,
    },
    addText: {
        fontSize: 18,
    },
});