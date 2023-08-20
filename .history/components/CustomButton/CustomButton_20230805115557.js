import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../constants";

const CustomButton = ({ text, onPress, icon, color }) => {
    return (
        <>
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Ionicons name={icon} size={24} color={color} style={styles.icon} />
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        padding: 15,
        width: "100%",
        marginBottom: 10,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: colors.danger,
    },
    buttonText: {
        fontWeight: "bold",
        color: "#fff",
    },
})