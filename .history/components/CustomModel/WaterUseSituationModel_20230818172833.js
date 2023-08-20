import React, { useState } from 'react';
import Modal from "react-native-modal";
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { colors } from '../../constants';


const WaterUseSituation = ({ visible, onClose }) => {
    const [numberContract, onChangeNumberContract] = useState('');
    const [customerCode, onChangeCustomerCode] = useState('');
    const [customerName, onChangeCustomerName] = useState('');
    const [route, onChangeRoute] = useState('');
    const [address, onChangeAddress] = useState('');
    const [recordEmployee, onChangeRecordEmployee] = useState('');

    const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
    const [openEndDatePicker, setOpenEndDatePicker] = useState(false);

    const today = new Date();
    const startDate = getFormatedDate(today.setDate(today.getDate() + 1), 'DD/MM/YYYY');
    const endDate = getFormatedDate(today.setDate(today.getDate() + 1), 'DD/MM/YYYY');
    const [selectedStartDate, setSelectedStartDate] = useState("")
    const [selectedEndDate, setSelectedEndDate] = useState("")
    const [startedDate, setStartedDate] = useState("06/08/2023")
    const [endedDate, setEndedDate] = useState("06/08/2023")

    const handleChangeStartDate = (propDate) => {
        setStartedDate(propDate)
    }
    const handleChangeEndDate = (propDate) => {
        setEndedDate(propDate)
    }

    const handleOnPressStartDate = () => {
        setOpenStartDatePicker(!openStartDatePicker)
    }
    const handleOnPressEndDate = () => {
        setOpenEndDatePicker(!openEndDatePicker)
    }
    return (
        <View style={styles.centeredView}>
            <ScrollView>
                <Modal visible={visible} animationType="slide">
                    <View style={styles.modalView}>
                        <Text style={styles.modelHeader}>Xem tình hình sử dụng nước </Text>
                        <Text style={styles.modelTitleField}>Số HĐ</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumberContract}
                            value={numberContract}
                        />
                        <Text style={styles.modelTitleField}>Mã Kh</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeCustomerCode}
                            value={customerCode}
                        />
                        <Text style={styles.modelTitleField}>Từ ngày</Text>
                        <TouchableOpacity
                            style={styles.dateReadStart}
                            onPress={handleOnPressStartDate}
                        >
                            <Text style={{ marginLeft: 15 }}>{selectedStartDate}</Text>
                        </TouchableOpacity>
                        <Text style={styles.modelTitleField}>Đến ngày</Text>
                        <TouchableOpacity
                            style={styles.dateReadStart}
                            onPress={handleOnPressEndDate}
                        >
                            <Text style={{ marginLeft: 15 }}>{selectedEndDate}</Text>
                        </TouchableOpacity>
                        <Text style={styles.modelTitleField}>Tên khách hàng</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeCustomerName}
                            value={customerName}
                        />
                        <Text style={styles.modelTitleField}>Tuyến đọc</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeRoute}
                            value={route}
                        />
                        <Text style={styles.modelTitleField}>Địa chỉ</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeAddress}
                            value={address}
                        />
                        <Text style={styles.modelTitleField}>Nhân viên ghi</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeRecordEmployee}
                            value={recordEmployee}
                        />

                        <TouchableOpacity onPress={onClose}>
                            <View style={styles.searchButtonModel}>
                                <Text style={styles.closeButtonModelText}>Tìm kiếm</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose}>
                            <View style={styles.exportButtonModel}>
                                <Text style={styles.closeButtonModelText}>Xuất biểu đồ nước</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose}>
                            <View style={styles.saveButtonModel}>
                                <Text style={styles.closeButtonModelText}>Lưu biểu đồ</Text>
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
                                            textHeaderColor: "#469ab6",
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
                                        <View style={styles.closeButtonModel}>
                                            <Text style={styles.closeButtonModelText}>Đóng</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>

                        {/*Create model for end date */}
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={openEndDatePicker}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <DatePicker
                                        mode='calender'
                                        minimumDate={endDate}
                                        selected={endedDate}
                                        onDateChange={handleChangeEndDate}
                                        onSelectedChange={date => setSelectedEndDate(date)}
                                        options={{
                                            backgroundColor: "#080516",
                                            textHeaderColor: "#469ab6",
                                            textDefaultColor: "#FFFFFF",
                                            selectedTextColor: "#FFF",
                                            mainColor: "#469ab6",
                                            textSecondaryColor: "#FFFFFF",
                                            borderColor: 'rgba(122, 146, 165, 0.1)'
                                        }}
                                    />
                                    <TouchableOpacity
                                        onPress={handleOnPressEndDate}
                                    >
                                        <View style={styles.closeButtonModel}>
                                            <Text style={styles.closeButtonModelText}>Đóng</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    )
}

export default WaterUseSituation;

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
    modelTitleField: {
        marginTop: 20,
        marginBottom: 5
    },
    input: {
        height: 35,
        borderWidth: 0.5,
        padding: 5,
        borderRadius: 4,
        width: 280
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
    dateReadStart: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "gray",
        height: 40,
        fontSize: 18,
        justifyContent: "center",
        width: 280
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
    saveButtonModel: {
        width: 280,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#7D94FF",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20
    },
    exportButtonModel: {
        width: 280,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#0CE3BC",
        alignItems: "center",
        borderRadius: 5,
        marginTop: 20
    },
    searchButtonModel: {
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