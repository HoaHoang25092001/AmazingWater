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
                            <Text style={styles.closeButtonModelText}>Cập Nhật</Text>
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
        fontWeight: "600",
        fontSize: 23,
        marginBottom: 20
    },
    modelContent: {
        width: 280,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "rgba(0,0,0,0.02)",
        padding: 30,
        borderRadius: 10
    },
    closeButtonModel: {
        width: 280,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#FA896B",
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
        marginTop: 10
    },
    closeButtonModelText: {
        color: "white",
        textAlign: "center",
        fontSize: 14,
        padding: 8,
    },
    tableHeader: {
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 30
    },
    tableContent: {
        fontSize: 16,
        marginBottom: 30,
        backgroundColor: colors.white,
        padding: 10,
        color: "#5A6A85"
    }
})