import React from 'react';
import { View, ImageBackground, Dimensions, StyleSheet, Text } from "react-native";




const LoginScreen = ({navigation}) => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text onPress={() => navigation.navigate('selectfactory')}>
                Login
            </Text>
        </View>
    )
}

export default LoginScreen;