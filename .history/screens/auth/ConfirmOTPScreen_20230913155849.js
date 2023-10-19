import React, { useEffect, useState } from "react";
import {
    View,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import { colors } from "../../constants";

import CustomInput from "../../components/CustomInput/CustomInput";
import Toast from 'react-native-toast-message';
import { apiResetPassword } from "../../api/user";

const image = {
    uri: "https://nha-may-nuoc-fe.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif",
};

const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const overlayHeight = height / 2;

const ConfirmOTPScreen = ({ route, navigation }) => {
    const { username } = route.params;
    const [token, setToken] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const [errorTokenMessage, setErrorTokenMessage] = useState("");
    const [errorPasswordMessage, setErrorPasswordMessage] = useState("");
    const [errorConfirmPasswordMessage, setErrorConfirmPasswordMessage] = useState("");


    useEffect(() => {
        if (token === "") {
            setErrorTokenMessage("Vui lòng nhập OTP!")
        } else {
            setErrorTokenMessage("")
        }

        if (password === "") {
            setErrorPasswordMessage("Vui lòng nhập Password!")
        } else if(password.length < 7) {
            setErrorPasswordMessage("Mật khẩu phải có tối thiểu 8 ký tự.")
        } else {
            setErrorPasswordMessage("")
        }

        if (confirmPassword === "") {
            setErrorConfirmPasswordMessage("Vui lòng nhập confirm Password!")
        } else if (confirmPassword.length < 7){
            setErrorConfirmPasswordMessage("Mật khẩu phải có tối thiểu 8 ký tự.")
        } else {
            setErrorConfirmPasswordMessage("")
        }
    }, [token, password, confirmPassword])

    const handleConfirmOTP = async () => {
        const response = await apiResetPassword({ token, password, confirmPassword, username })
        console.log(response.data)
        if (response.data.StatusCode == 401) {
            setErrorTokenMessage("Token không đúng hoặc đã hết hạn !")
        } else if (response.data.status == 400) {
            setErrorPasswordMessage('Mật khẩu không giông nhau !')
        } else {
            Toast.show({
                type: 'success',
                text1: 'Successfully',
                text2: 'Thành công, Mật khẩu đã được thay đổi 👋'
            });
            navigation.navigate("login")
        }
    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <ImageBackground
                source={image}
                resizeMode="cover"
                style={{
                    width: windowWidth,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>Xác nhận OTP</Text>

                    <View style={styles.formContainer}>
                        <CustomInput
                            value={token}
                            setValue={setToken}
                            placeholder={"Mã OTP"}
                            placeholderTextColor={colors.muted}
                            radius={5}
                            icon="mail"
                        />
                        <Text style={styles.errorMessage}>{errorTokenMessage}</Text>
                        <CustomInput
                            value={password}
                            setValue={setPassword}
                            secureTextEntry={true}
                            placeholder={"Nhập mật khẩu"}
                            placeholderTextColor={colors.muted}
                            radius={5}
                            icon="lock-closed"
                        />
                        <Text style={styles.errorMessage}>{errorPasswordMessage}</Text>
                        <CustomInput
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                            secureTextEntry={true}
                            placeholder={"Nhập lại mật khẩu"}
                            placeholderTextColor={colors.muted}
                            radius={5}
                            icon="lock-closed"
                        />
                        <Text style={styles.errorMessage}>{errorConfirmPasswordMessage}</Text>
                        <TouchableOpacity style={styles.forgetPassword} onPress={handleConfirmOTP}>
                            <Text
                                style={styles.forgetPasswordText}
                                onPress={() => navigation.navigate("login")}
                            >
                                Xác nhận
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

export default ConfirmOTPScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        width: "90%",
        height: overlayHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0000001A",
        borderRadius: 5,
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20
    },
    formContainer: {
        flex: 3,
        justifyContent: "flex-start",
        alignItems: "center",
        display: "flex",
        width: "100%",
        flexDirecion: "row",
        padding: 5,
    },
    forgetPassword: {
        width: '90%',
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1677ff",
        borderRadius: 8,
    },
    forgetPasswordText: {
        color: "white",
        fontSize: 16,
        fontWeight: '500'
    },
    errorMessage: {
        color: "red",
        fontSize: 14,
        marginBottom: 10
    }
});