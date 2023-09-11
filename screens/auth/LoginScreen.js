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
import { useDispatch, useSelector } from "react-redux";
import { TextInput } from "react-native";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../../store/asyncAction";

const image = {
  uri: "https://nha-may-nuoc-frontend.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif",
};

const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const overlayHeight = height / 3;

const LoginScreen = ({ navigation }) => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);
  console.log("Token here", token);

  const handleLogin = () => {
    dispatch(loginUser(credentials));
    console.log("Error12123", error);
    if (!token) {
      navigation.navigate("login");
      console.log("Error123", error);
    } else {
      console.log("Error456", error);
      navigation.navigate("mydrawer");
    }
  };
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
          <Text style={styles.title}>Đăng nhập</Text>

          <View style={styles.formContainer}>
            <CustomInput
              placeholder={"Username"}
              placeholderTextColor={colors.muted}
              radius={5}
              icon="person"
              onChangeText={(text) =>
                setCredentials({ ...credentials, username: text })
              }
            />
            <CustomInput
              secureTextEntry={true}
              placeholder={"Password"}
              placeholderTextColor={colors.muted}
              radius={5}
              icon="lock-closed"
              onChangeText={(text) =>
                setCredentials({ ...credentials, password: text })
              }
            />
            <View style={styles.loginButton}>
              <Text style={styles.loginButtonText} onPress={handleLogin}>
                Đăng nhập
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    fontSize: 35,
    fontWeight: "bold",
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
  loginButton: {
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1677ff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    marginLeft: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 18,
  },
});
