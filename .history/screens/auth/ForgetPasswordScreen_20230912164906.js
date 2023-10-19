import React, { useState } from "react";
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
import { apiForgotPassword } from "../../api/user";

const image = {
    uri: "https://nha-may-nuoc-frontend.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif",
};

const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const overlayHeight = height / 4;

const ForgetPasswordScreen = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleForgetPassword = async () => {
        const response = await apiForgotPassword({ username })
        console.log(response.data)
        if (response.data.StatusCode === 401) {
            setErrorMessage("Username không tồn tại. Vui lòng nhập lại!")
        } else if (response.data.errors.status == 400) {
            setErrorMessage("Không được để trống trường này !")
        } else {
            navigation.navigate("ConfirmOTPScreen")
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
                    <Text style={styles.title}>Quên mật khẩu</Text>

                    <View style={styles.formContainer}>
                        <CustomInput
                            value={username}
                            setValue={setUsername}
                            placeholder={"Username"}
                            placeholderTextColor={colors.muted}
                            radius={5}
                            icon="person"
                        />
                        <Text style={styles.errorMessage}>{errorMessage}</Text>
                        <TouchableOpacity style={styles.forgetPassword} onPress={handleForgetPassword}>
                            <Text
                                style={styles.forgetPasswordText}
                                onPress={() => navigation.navigate("ConfirmOTPScreen")}
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

export default ForgetPasswordScreen;

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
        marginBottom: 25
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