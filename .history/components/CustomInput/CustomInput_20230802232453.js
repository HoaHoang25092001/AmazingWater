import React from "react";
import { StyleSheet, TextInput, View, Image } from "react-native";
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
    iconSource
}) => {
    return (
        <View style={{ width: width }}>
            <View style={styles.inputContainer}>
                <Image source={iconSource} style={styles.icon} />
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
        paddingHorizontal: 10,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    CustomInput: {
        flex: 1,
        fontSize: 16,
        paddingVertical: 10,
        color: '#000',
    },
});
