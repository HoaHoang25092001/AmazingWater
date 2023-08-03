import React, { useState } from 'react';
import { View, ImageBackground, Dimensions, StyleSheet, Text, KeyboardAvoidingView } from "react-native";
import { colors } from '../../constants';

import CustomInput from '../../components/CustomInput/CustomInput';



const image = { uri: 'https://nha-may-nuoc-frontend.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif' }

const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const overlayHeight = height / 5;

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
        <KeyboardAvoidingView
            style={styles.container}
        >
            <ImageBackground
                source={image}
                resizeMode='cover'
                style={{
                    width: windowWidth,
                    height: '100%',
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >

                <View style={styles.overlay}>
                    <Text style={styles.title}>Đăng nhập</Text>

                    <View style={styles.formContainer}>
                        <CustomInput
                            value={username}
                            setValue={setUsername}
                            placeholder={"Username"}
                            placeholderTextColor={colors.muted}
                            radius={5}
                        />
                        <CustomInput
                            value={password}
                            setValue={setPassword}
                            secureTextEntry={true}
                            placeholder={"Password"}
                            placeholderTextColor={colors.muted}
                            radius={5}
                        />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text onPress={() => navigation.navigate('selectfactory')}>
                            Login
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    overlay: {
        width: '90%',
        height: overlayHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#0000001A',
        borderRadius: 5
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
    },
    formContainer: {
        flex: 3,
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        width: "100%",
        flexDirecion: "row",
        padding: 5,
    }
})