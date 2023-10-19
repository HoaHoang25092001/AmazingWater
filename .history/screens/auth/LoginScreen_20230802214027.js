import React from 'react';
import { View, ImageBackground, Dimensions, StyleSheet, Text } from "react-native";

const image = { uri: 'https://nha-may-nuoc-frontend.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif' }


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

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text onPress={() => navigation.navigate('selectfactory')}>
                    Login
                </Text>
            </View>
        </ImageBackground>
    )
}

export default LoginScreen;