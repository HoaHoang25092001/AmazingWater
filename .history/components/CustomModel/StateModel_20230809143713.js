import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackedBarChart } from 'react-native-svg-charts'
import { colors } from '../../constants';

const StateModel = ({ visible, onClose }) => {
    const data = [
        {
            month: new Date(2015, 0, 1),
            apples: 3840,
            bananas: 1920,
            cherries: 960,
            dates: 400,
            oranges: 400,
        },
        {
            month: new Date(2015, 1, 1),
            apples: 1600,
            bananas: 1440,
            cherries: 960,
            dates: 400,
        },
        {
            month: new Date(2015, 2, 1),
            apples: 640,
            bananas: 960,
            cherries: 3640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 3320,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 3320,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 2320,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 1320,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 2120,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
        {
            month: new Date(2015, 3, 1),
            apples: 1120,
            bananas: 480,
            cherries: 640,
            dates: 400,
        },
        
    ]
    const colors = ['#7b4173', '#a55194', '#ce6dbd', '#de9ed6']
    const keys = ['apples', 'bananas', 'cherries', 'dates']
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Tình hình trạng thái </Text>
                    <View style={{ height: 200, width: 280 }}>
                        <StackedBarChart
                            style={{ height: 200 }}
                            keys={keys}
                            colors={colors}
                            data={data}
                            showGrid={false}
                            contentInset={{ top: 30, bottom: 30 }}
                            horizontal={true}
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