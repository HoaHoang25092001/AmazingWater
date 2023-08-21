import React, {useState} from 'react';
import Modal from "react-native-modal";
import { Picker } from '@react-native-picker/picker';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, CheckIcon, Select } from 'native-base';

const AdvanceSearchModel = ({ visible, onClose }) => {
    const [service, setService] = useState("");
    return (
        <View style={styles.centeredView}>
            <Modal visible={visible} animationType="slide">
                <View style={styles.modalView}>
                    <Text style={styles.modelHeader}>Tìm kiếm nâng cao</Text>
                    <Text >Loại khách hàng</Text>
                    <Box maxW="300">
                        <Select selectedValue={service} minWidth="200" minHeight="45" accessibilityLabel="Choose Service" bg="steal.600" placeholder="Choose Service" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} _light={{
                            bg: "coolGray.100",
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
                    <Text >Phạm vi</Text>
                    <Picker
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <Text >Vùng</Text>
                    <Picker
                        style={{ height: 50, width: 200 }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ language: itemValue })
                        }>
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                    <Text >Khu vực</Text>
                    <Picker
                        style={{ height: 50, width: 200 }}
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