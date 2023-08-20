import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { colors } from '../../constants';


const WaterUseSituation = ({ visible, onClose }) => {
    const [numberContract, onChangeNumberContract] = useState('');
    const [customerCode, onChangeCustomerCode] = useState('');
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Xem tình hình sử dụng nước </Text>
                    <Text style={styles.modelTitleField}>Số HĐ</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumberContract}
                        value={numberContract}
                    />
                    <Text style={styles.modelTitleField}>Số HĐ</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeCustomerCode}
                        value={customerCode}
                    />

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
    modelHeader: {
        fontWeight: "500",
        fontSize: 24,
        marginBottom: 40
    },
    modelTitleField: {
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        height: 35,
        margin: 2,
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 4,
        width: 280
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