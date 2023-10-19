import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../constants";

const CustomInput = ({
    value,
    setValue,
    placeholder,
    secureTextEntry,
    placeholderTextColor,
    onFocus,
    radius,
    width = "90%",
    keyboardType,
    maxLength,
    icon
}) => {
    return (
        <View style={{ width: width }}>
            <View style={styles.inputContainer}>
                <Ionicons name={icon} size={24} color={placeholderTextColor} style={styles.icon} />
                <TextInput
                    placeholder={placeholder}
                    onChangeText={setValue}
                    value={value}
                    secureTextEntry={secureTextEntry}
                    style={styles.CustomInput}
                    placeholderTextColor={placeholderTextColor}
                    onFocus={onFocus}
                    borderRadius={radius}
                    maxLength={maxLength}
                    keyboardType={keyboardType}
                />
            </View>
        </View>
    );
};

export default CustomInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        marginBottom: 10
    },
    icon: {
        marginRight: 10,
    },
    CustomInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 3,
        color: colors.dark,
        marginBottom: 10,
    },
});
