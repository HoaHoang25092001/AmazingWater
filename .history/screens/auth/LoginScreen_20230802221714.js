import React from 'react';
import { View, ImageBackground, Dimensions, StyleSheet, Text } from "react-native";

const image = { uri: 'https://nha-may-nuoc-frontend.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif' }

const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const overlayHeight = height / 5;

const LoginScreen = ({ navigation }) => {
    return (
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
        <Text style={styles.title}>Hãy chọn nhà máy</Text>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text onPress={() => navigation.navigate('selectfactory')}>
                    Login
                </Text>
            </View>
        </View>
        </ImageBackground>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    overlay: {
        width: '85%',
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
})