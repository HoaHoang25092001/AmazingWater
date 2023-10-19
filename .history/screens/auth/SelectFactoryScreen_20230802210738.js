import React, { useState } from 'react';
import { View, ImageBackground, Dimensions, Text, StyleSheet, Button, Alert } from 'react-native';
import { Select, Box, CheckIcon, Center, NativeBaseProvider } from "native-base";

const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const overlayHeight = height / 5;

const image = { uri: 'https://nha-may-nuoc-frontend.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif' }

const SelectFactoryScreen = () => {
    const [service, setService] = useState("");
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
                <View style={styles.selectFactoryContainer}>
                    <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" bg="steal.600" placeholder="Choose Service" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }} _light={{
                        bg: "coolGray.100",
                        _hover: {
                            bg: "coolGray.200"
                        },
                        _focus: {
                            bg: "coolGray.200:alpha.70"
                        }
                    }} _dark={{
                        bg: "coolGray.800",
                        _hover: {
                            bg: "coolGray.900"
                        },
                        _focus: {
                            bg: "coolGray.900:alpha.70"
                        }
                    }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                        <Select.Item label="UX Research" value="ux" color="blue.500" />
                        <Select.Item label="Web Development" value="web" color="green.500" />
                    </Select>
                    <View style={styles.selectFactoryButton}>
                        <Text style={styles.selectFactoryButtonText}>Tiếp tục</Text>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
};

export default SelectFactoryScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
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
    selectFactoryContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    selectFactoryButton: {
        height: 45,
        backgroundColor: '#1677ff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    selectFactoryButtonText: {
        color: 'white',
        fontSize: 17
    }
})

