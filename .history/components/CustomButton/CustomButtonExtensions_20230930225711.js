import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants";

const CustomButtonExtensions = ({ text, onPress, icon, color, textColor }) => {
    return (
        <>
            <Menu.Item
                style={{
                    flex: 1,
                    flexDirection: "row",
                    paddingVertical: 8,
                    paddingHorizontal: 8,
                    width: "90%",
                    marginBottom: 5,
                    alignItems: "center",
                    borderRadius: 10,
                    backgroundColor: color,
                    marginLeft: 10,
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: textColor
                }}
                onPress={onPress}
            >
                <Popable content={
                    <>
                        <Ionicons
                            name={icon}
                            size={24}
                            color={textColor}
                            style={styles.icon}
                        />
                        <Text style={{
                            fontWeight: "500",
                            color: textColor,
                            fontSize: 14,
                            fontFamily: "Quicksand_700Bold",
                            maxWidth: "80%",
                        }}>{text}</Text>
                    </>
                }>
                    <Text>@morning_cafe</Text>
                </Popable>
            </Menu.Item>
        </>
    );
};

export default CustomButtonExtensions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: "100%",
        marginBottom: 15,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: colors.danger,
    },
    buttonTextContainer: {
        marginLeft: 10,
    },
    buttonText: {
        fontWeight: "500",
        color: colors.danger,
        fontSize: 16,
        fontFamily: "Quicksand_700Bold",
    },
});
