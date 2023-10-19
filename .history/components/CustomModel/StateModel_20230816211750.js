import React, { useState } from 'react';
import Modal from "react-native-modal";
import { Slider, VStack } from "native-base";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../constants';

const StateModel = ({ visible, onClose }) => {
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Tình hình trạng thái </Text>
                    <View style={{ height: 200, width: 280 }}>
                        <VStack w="3/4" maxW="300" space={4}>
                            <Slider defaultValue={10} colorScheme="orange">
                                <Slider.Track>
                                    <Slider.FilledTrack />
                                </Slider.Track>
                            </Slider>
                            <Slider defaultValue={20} colorScheme="emerald">
                                <Slider.Track>
                                    <Slider.FilledTrack />
                                </Slider.Track>
                            </Slider>
                            <Slider defaultValue={30} colorScheme="indigo">
                                <Slider.Track>
                                    <Slider.FilledTrack />
                                </Slider.Track>
                            </Slider>
                            <Slider defaultValue={30} colorScheme="indigo">
                                <Slider.Track>
                                    <Slider.FilledTrack />
                                </Slider.Track>
                            </Slider>
                            <Slider defaultValue={30} colorScheme="indigo">
                                <Slider.Track>
                                    <Slider.FilledTrack />
                                </Slider.Track>
                            </Slider>
                            <Slider defaultValue={30} colorScheme="indigo">
                                <Slider.Track>
                                    <Slider.FilledTrack />
                                </Slider.Track>
                            </Slider>
                        </VStack>
                    </View>
                    <TouchableOpacity onPress={onClose}>
                        <View style={styles.closeButtonModel}>
                            <Text style={styles.closeButtonModelText}>X Đóng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default StateModel;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        width: "100%",
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 40,
        alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },
    modelHeader: {
        fontWeight: "500",
        fontSize: 24,
        marginBottom: 40
    },
    closeButtonModel: {
        width: 280,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: colors.warning_500,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20
    },
    closeButtonModelText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        padding: 8
    },
})