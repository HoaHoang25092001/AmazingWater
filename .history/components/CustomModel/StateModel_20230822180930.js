import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, Progress, VStack, Center, NativeBaseProvider } from "native-base";
import { colors } from '../../constants';

const StateModel = ({ visible, onClose }) => {
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Tình hình trạng thái </Text>
                    <View style={{ minHeight: 200, width: 280 }}>
                        <Box w="100%" maxW="400">
                            <VStack space="md">
                                <VStack mx="4" space="md">
                                    <Progress colorScheme="lime" value={10} />
                                    <Progress colorScheme="secondary" value={20} />
                                    <Progress colorScheme="tertiary" value={30} />
                                    <Progress colorScheme="warning" value={40} />
                                    <Progress colorScheme="amber" value={50} />
                                    <Progress colorScheme="rose" value={60} />
                                    <Progress colorScheme="fuchsia" value={70} />
                                    <Progress colorScheme="indigo" value={80} />
                                    <Progress colorScheme="lightBlue" value={90} />
                                </VStack>
                            </VStack>
                        </Box>
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