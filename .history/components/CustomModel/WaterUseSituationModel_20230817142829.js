import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../constants';


const WaterUseSituation = ({ visible, onClose }) => {
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                <Text style={styles.modelHeader}>Xem tình hình sử dụng nước </Text>
                </View>
            </Modal>
        </View>
    )
}

export default WaterUseSituation;

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
})