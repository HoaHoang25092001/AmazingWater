import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BarChart, Grid, XAxis } from 'react-native-svg-charts'
import { colors } from '../../constants';

const ChartModel = ({ visible, onClose }) => {
    const fill = 'rgb(134, 65, 244)'
    const data = [20, 10, 40, 45, 4, 24, 25, 35, 53, 53, 24, 50, 20, 30]
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Xem biểu đồ </Text>
                    <Text style={styles.chartHeader}>Biểu đồ sử dụng nước </Text>
                    <View style={{width: 50, height:20, backgroundColor: 'rgb(134, 65, 244)'}}></View>
                    <Text>Sản lượng m3</Text>
                    <View style={{ height: 350, width: 280 }}>
                        <BarChart style={{ height: 300, width: 280 }} data={data} svg={{ fill }} contentInset={{ top: 30, bottom: 30 }}>
                            <Grid />
                        </BarChart>
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

export default ChartModel;

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
    chartHeader: {
        fontWeight: "600",
        fontSize: 16
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