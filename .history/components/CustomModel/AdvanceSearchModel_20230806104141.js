import React, { useState } from 'react';
import Modal from "react-native-modal";
import { Picker } from '@react-native-picker/picker';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, CheckIcon, Select } from 'native-base';

const AdvanceSearchModel = ({ visible, onClose }) => {
    const [service, setService] = useState("");
    const [scope, setScope] = useState("");
    const [region, setRegion] = useState("");
    const [area, setArea] = useState("");
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Tìm kiếm nâng cao</Text>
                    <Text style={styles.modelTitleField}>Loại khách hàng</Text>
                    <Box maxW="300">
                        <Select selectedValue={service} minWidth="250" height="37" accessibilityLabel="Choose Service" bg="white" placeholder="Loại khách hàng" _selectedItem={{
                            bg: "white",
                            endIcon: <CheckIcon size="5" />
                        }} _light={{
                            bg: "white",
                            _hover: {
                                bg: "coolGray.200"
                            },
                            _focus: {
                                bg: "coolGray.200:alpha.70"
                            }
                        }} _dark={{
                            bg: "coolGray.800",
                            _hover: {
                                bg: "coolGray.900"
                            },
                            _focus: {
                                bg: "coolGray.900:alpha.70"
                            }
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="UX Research" value="ux" color="blue.500" />
                            <Select.Item label="Web Development" value="web" color="green.500" />
                        </Select>
                    </Box>
                    <Text style={styles.modelTitleField}>Phạm vi</Text>
                    <Box maxW="300">
                        <Select selectedValue={scope} minWidth="250" height="37" accessibilityLabel="Choose Service" bg="white" placeholder="Phạm vi" _selectedItem={{
                            bg: "white",
                            endIcon: <CheckIcon size="5" />
                        }} _light={{
                            bg: "white",
                            _hover: {
                                bg: "coolGray.200"
                            },
                            _focus: {
                                bg: "coolGray.200:alpha.70"
                            }
                        }} _dark={{
                            bg: "coolGray.800",
                            _hover: {
                                bg: "coolGray.900"
                            },
                            _focus: {
                                bg: "coolGray.900:alpha.70"
                            }
                        }} mt={1} onValueChange={itemValue => setScope(itemValue)}>
                            <Select.Item label="UX Research" value="ux" color="blue.500" />
                            <Select.Item label="Web Development" value="web" color="green.500" />
                        </Select>
                    </Box>
                    <Text style={styles.modelTitleField}>Vùng</Text>
                    <Box maxW="400">
                        <Select selectedValue={region} minWidth="250" height="37" accessibilityLabel="Choose Service" bg="white" placeholder="Vùng" _selectedItem={{
                            bg: "white",
                            endIcon: <CheckIcon size="5" />
                        }} _light={{
                            bg: "white",
                            _hover: {
                                bg: "coolGray.200"
                            },
                            _focus: {
                                bg: "coolGray.200:alpha.70"
                            }
                        }} _dark={{
                            bg: "coolGray.800",
                            _hover: {
                                bg: "coolGray.900"
                            },
                            _focus: {
                                bg: "coolGray.900:alpha.70"
                            }
                        }} mt={1} onValueChange={itemValue => setRegion(itemValue)}>
                            <Select.Item label="UX Research" value="ux" color="blue.500" />
                            <Select.Item label="Web Development" value="web" color="green.500" />
                        </Select>
                    </Box>
                    <Text style={styles.modelTitleField}>Khu vực</Text>
                    <Box maxW="400">
                        <Select selectedValue={area} minWidth="250" height="37" accessibilityLabel="Choose Service" bg="white" placeholder="Khu vực" _selectedItem={{
                            bg: "white",
                            endIcon: <CheckIcon size="2" />
                        }} _light={{
                            bg: "white",
                            _hover: {
                                bg: "coolGray.200"
                            },
                            _focus: {
                                bg: "coolGray.200:alpha.70"
                            }
                        }} _dark={{
                            bg: "coolGray.800",
                            _hover: {
                                bg: "coolGray.900"
                            },
                            _focus: {
                                bg: "coolGray.900:alpha.70"
                            }
                        }} mt={1} onValueChange={itemValue => setArea(itemValue)}>
                            <Select.Item label="UX Research" value="ux" color="blue.500" />
                            <Select.Item label="Web Development" value="web" color="green.500" />
                        </Select>
                    </Box>
                    <TouchableOpacity onPress={onClose}>
                        <View style={styles.closeButtonModel}>
                            <Text style={styles.closeButtonModelText}>X Đóng</Text>
                        </View>
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
    },
    modelTitleField: {
        marginTop: 20,
        marginBottom: 5
    },
    closeButtonModel: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "red"
    },
    closeButtonModelText : {
        color: "white",
    }
})