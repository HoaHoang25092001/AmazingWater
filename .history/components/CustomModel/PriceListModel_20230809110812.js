import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../constants';

const PriceListModel = ({ visible, onClose }) => {
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Bảng giá </Text>
                </View>
            </Modal>
        </View>
    )
}

export default PriceListModel;

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
        fontSize: 24
    },
})