import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackedBarChart, XAxis } from 'react-native-svg-charts'
import { colors } from '../../constants';

const StateModel = ({ visible, onClose }) => {
    const data = [
        {
            month: new Date(2023, 1, 1),
            states: 3840,
        },
        {
            month: new Date(2023, 2, 1),
            states: 3840,
        },
        {
            month: new Date(2023, 3, 1),
            states: 3840,
        },
        {
            month: new Date(2023, 4, 1),
            states: 3840,
        },
        {
            month: new Date(2023, 5, 1),
            states: 3840,
        },
        {
            month: new Date(2023, 6, 1),
            states: 3840,
        },
        {
            month: new Date(2023, 7, 1),
            states: 3840,
        },
        {
            month: new Date(2023, 8, 1),
            states: 3840,
        },
        {
            month: new Date(2023, 9, 1),
            states: 3840,
        },
    ]
    const colors = ['#7b4173']
    const keys = ['states']
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Tình hình trạng thái </Text>
                    <View style={{ height: 400, width: 280 }}>
                        <StackedBarChart
                            style={{ height: 200, width: 280 }}
                            keys={keys}
                            colors={colors}
                            data={data}
                            showGrid={false}
                            contentInset={{ top: 30, bottom: 30 }}
                        />
                        <XAxis
                            data={data}
                            formatLabel={(value, index) => index}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 10, fill: 'black' }}
                        />
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