import React from 'react';
import { View, ImageBackground, Dimensions, Text, StyleSheet } from 'react-native';


const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const overlayHeight = height / 5;

const image = {uri: 'https://nha-may-nuoc-frontend.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif'}

const SelectFactoryScreen = () => {
    return (
        <View>
            <ImageBackground
                source={image}
                resizeMode='cover'
                style={{
                    width: windowWidth,
                    height: '100%',
                }}
            >
                <View style={styles.overlay}>
                    <Text style={{color: 'white'}}>This is my background image</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SelectFactoryScreen;

const styles = StyleSheet.create({
    overlay: {
        width: '85%',
        height: overlayHeight,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'red'
      },
})

