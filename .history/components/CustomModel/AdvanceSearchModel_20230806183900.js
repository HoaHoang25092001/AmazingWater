import React, { useState } from 'react';
import Modal from "react-native-modal";
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, CheckIcon, Select } from 'native-base';
import { colors } from '../../constants';

const AdvanceSearchModel = ({ visible, onClose }) => {
    const [service, setService] = useState("");
    const [scope, setScope] = useState("");
    const [region, setRegion] = useState("");
    const [area, setArea] = useState("");

    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);

    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'YYYY/MM/DD');
    const [selectedStartDate, setSelectedStartDate] = useState("")
    const [startedDate, setStartedDate] = useState("06/08/2023")

    const handleChangeStartDate = (propDate) => {
        setStartedDate(propDate)
    }

    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker)
    }
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
                    <Text style={styles.modelTitleField}>Ngày đọc từ</Text>
                    <TouchableOpacity
                        style={styles.dateReadStart}
                        onPress={handleOnPressStartDate}
                    >
                        <Text>{selectedStartDate}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onClose}>
                        <View style={styles.clearButtonModel}>
                            <Text style={styles.closeButtonModelText}>Tìm kiếm</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose}>
                        <View style={styles.clearButtonModel}>
                            <Text style={styles.closeButtonModelText}>Xóa  điều kiện TK</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onClose}>
                        <View style={styles.closeButtonModel}>
                            <Text style={styles.closeButtonModelText}>X Đóng</Text>
                        </View>
                    </TouchableOpacity>

                    {/*Create model for start date */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={openStartDatePicker}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <DatePicker
                                    mode='calender'
                                    minimumDate={startDate}
                                    selected={startedDate}
                                    onDateChange={handleChangeStartDate}
                                    onSelectedChange={date => setSelectedStartDate(date)}
                                    options={{
                                        backgroundColor: "#080516",
                                        textDefaultColor: "#469ab6",
                                        textDefaultColor: "#FFFFFF",
                                        selectedTextColor: "#FFF",
                                        mainColor: "#469ab6",
                                        textSecondaryColor: "#FFFFFF",
                                        borderColor: 'rgba(122, 146, 165, 0.1)'
                                    }}
                                />
                                <TouchableOpacity
                                    onPress={handleOnPressStartDate}
                                >
                                    <Text style={{ color: "white" }}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
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
        width: "90%",
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
    clearButtonModel: {
        width: 250,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: colors.blue_400,
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20
    },
    closeButtonModel: {
        width: 250,
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
        fontSize: 14,
        padding: 8
    },
    dateReadStart: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#222",
        height: 50,
        fontSize: 18,
        justifyContent: "center",
        width: 250
    },
})