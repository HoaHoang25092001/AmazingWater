import React, { useState } from 'react';
import Modal from "react-native-modal";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../constants';
import * as Progress from 'react-native-progress';

const StateModel = ({ visible, onClose }) => {
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Tình hình trạng thái </Text>
                    <View style={{ height: 200, width: 280 }}>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <Progress.Bar progress={0.1} width={250} height={8} color='red' borderWidth={0.3} />
                            <Text style={{ marginLeft: 15 }}>100</Text>
                        </View>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <Progress.Bar progress={0.2} width={250} height={8} color='orange' borderWidth={0.3} />
                            <Text style={{ marginLeft: 15 }}>200</Text>
                        </View>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <Progress.Bar progress={0.3} width={250} height={8} color='yellow' borderWidth={0.3} />
                            <Text style={{ marginLeft: 15 }}>300</Text>
                        </View>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <Progress.Bar progress={0.4} width={250} height={8} color='green' borderWidth={0.3} />
                            <Text style={{ marginLeft: 15 }}>400</Text>
                        </View>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <Progress.Bar progress={0.5} width={250} height={8} color='blue' borderWidth={0.3} />
                            <Text style={{ marginLeft: 15 }}>500</Text>
                        </View>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <Progress.Bar progress={0.6} width={250} height={8} color='indigo' borderWidth={0.3} />
                            <Text style={{ marginLeft: 15 }}>600</Text>
                        </View>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <Progress.Bar progress={0.7} width={250} height={8} color='violet' borderWidth={0.3} />
                            <Text style={{ marginLeft: 15 }}>700</Text>
                        </View>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <Progress.Bar progress={0.8} width={250} height={8} color='pink' borderWidth={0.3} />
                            <Text style={{ marginLeft: 15 }}>800</Text>
                        </View>
                        <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <Progress.Bar progress={0.9} width={250} height={8} color='purple' borderWidth={0.3} />
                            <Text style={{ marginLeft: 15 }}>900</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={onClose}>
                    <View style={styles.closeButtonModel}>
                        <Text style={styles.closeButtonModelText}>X Đóng</Text>
                    </View>
                </TouchableOpacity>
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