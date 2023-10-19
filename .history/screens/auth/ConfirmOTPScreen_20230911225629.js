import React, { useState } from "react";
import {
    View,
    ImageBackground,
    Dimensions,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
} from "react-native";
import { colors } from "../../constants";

import CustomInput from "../../components/CustomInput/CustomInput";

const image = {
    uri: "https://nha-may-nuoc-frontend.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif",
};

const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const overlayHeight = height / 3;

const ConfirmOTPScreen = ({ navigation }) => {
    const [opt, setOtp] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
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
                            value={opt}
                            setValue={setOtp}
                            placeholder={"Mã OTP"}
                            placeholderTextColor={colors.muted}
                            radius={5}
                            icon="mail"
                        />
                        <CustomInput
                            value={password}
                            setValue={setPassword}
                            placeholder={"Nhập mật khẩu"}
                            placeholderTextColor={colors.muted}
                            radius={5}
                            icon="lock-closed"
                        />
                        <CustomInput
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                            placeholder={"Nhập lại mật khẩu"}
                            placeholderTextColor={colors.muted}
                            radius={5}
                            icon="lock-closed"
                        />
                        <View style={styles.forgetPassword}>
                            <Text
                                style={styles.forgetPasswordText}
                                onPress={() => navigation.navigate("mydrawer")}
                            >
                                Xác nhận
                            </Text>
                        </View>
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
});