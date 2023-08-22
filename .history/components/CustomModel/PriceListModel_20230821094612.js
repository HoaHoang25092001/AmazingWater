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
                    <View style={styles.modelContent}>
                        <View>
                            <Text style={styles.tableHeader}>Mức</Text>
                            <Text style={styles.tableContent}>Mức 1</Text>
                            <Text style={styles.tableContent}>Mức 2</Text>
                        </View>
                        <View>
                            <Text style={styles.tableHeader}>Giá(Đồng/m3)</Text>
                            <Text style={styles.tableContent}>5000</Text>
                            <Text style={styles.tableContent}>7000</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={onClose}>
                        <View style={styles.updateButtonModel}>
                            <Text style={styles.closeButtonModelText}>Cập nhật</Text>
                        </View>
                    </TouchableOpacity>
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
        fontSize: 24,
        marginBottom: 40
    },
    modelContent: {
        width: 280,
        flexDirection: "row",
        justifyContent: "space-between"
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
    updateButtonModel: {
        width: 280,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#71D1F8",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 16
    },
    closeButtonModelText: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        padding: 5
    },
    tableHeader: {
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 30
    },
    tableContent: {
        fontSize: 16,
        marginBottom: 30,
    }
})