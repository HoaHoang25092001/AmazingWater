import React from 'react';
import { View, ImageBackground, Dimensions, Text } from 'react-native';


const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const image = {uri: 'https://nha-may-nuoc-frontend.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif'}

const SelectFactoryScreen = () => {
    return (
        <View>
            <ImageBackground
                source={image}
                resizeMode='contain'
                style={{
                    width: windowWidth,
                    height: '100%',
                }}
            >
                <View>
                    <Text style={{color: 'white'}}>This is my background image</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

export default SelectFactoryScreen;

