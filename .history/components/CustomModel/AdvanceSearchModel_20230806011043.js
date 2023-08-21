import React from 'react';
import Modal from "react-native-modal";
import { Picker } from '@react-native-picker/picker';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AdvanceSearchModel = ({ visible, onClose }) => {
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Tìm kiếm nâng cao</Text>
                    <Picker
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <TouchableOpacity onPress={onClose}>
                        <Text>Đóng</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
};

export default AdvanceSearchModel;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modelHeader: {
        fontWeight: "500",
        fontSize: 24
    }
})