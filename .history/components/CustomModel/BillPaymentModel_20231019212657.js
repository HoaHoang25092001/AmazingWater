import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import YearMonthPicker from "../PickYearMonth/PickYearMonth";
import { getFormatedDate } from 'react-native-modern-datepicker';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, CheckIcon, Select, Modal, FormControl, VStack, HStack, Button, Icon, Text, Input, TextArea, } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { getAllReadingRoutes } from '../../store/readingRoute/asyncAction'
import { getAllInvoiceSerialNumberList } from '../../store/invoiceSerialNumberList/asyncAction'
import moment from "moment";
import { colors } from '../../constants';

const rows = [{
    id: 1,
    name: "Đặng Văn Sinh - Nguyễn Thị Lưu",
    nick: "@johny",
}, {
    id: 2,
    name: "Nguyễn Văn Sơn - Hiền",
    nick: "@johny",
}, {
    id: 3,
    name: "Lê Thế (Lan)",
    nick: "@alex",
}, {
    id: 4,
    name: "Đặng Trung Chính",
    nick: "@johny",
},
{
    id: 5,
    name: "Trần Văn Hiền",
    nick: "@johny",
},
{
    id: 6,
    name: "Phạm Thị Miên - Tôn",
    nick: "@johny",
},
{
    id: 7,
    name: "Đặng Văn Sinh - Nguyễn Thị Lưu",
    nick: "@johny",
},
{
    id: 8,
    name: "Nguyễn Viết Sỹ - Đặng Thị Hạnh",
    nick: "@johny",
},
{
    id: 9,
    name: "Trần Thị Tình",
    nick: "@johny",
},
{
    id: 10,
    name: "Bùi Văn Đạo - Đặng Thị Ánh (HĐ2)",
    nick: "@johny",
},
{
    id: 11,
    name: "Nguyễn Văn Nghị HĐ2",
    nick: "@johny",
},

];


const BillPaymentModel = ({ visible, onClose }) => {
    const [officerRead, setOfficerRead] = useState("");
    const [readingRoute, setReadingRoute] = useState("");
    const [customerNameField, setCustomerNameField] = useState("");
    const [filteredCustomerNames, setFilteredCustomerNames] = useState(rows);
    const [searchField, setSearchField] = useState('');
    const [scope, setScope] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("MM-YYYY");
    const [showDatePickerModal, setShowDatePickerModal] = useState(false);



    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllReadingRoutes())
    }, [])

    const { readingRoutes } = useSelector(state => state.readingRoute)
    console.log(readingRoutes)

    useEffect(() => {
        const newFilteredCustomerNames = rows.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        setFilteredCustomerNames(newFilteredCustomerNames);
    }, [rows, searchField]);

    const onValueChange = (text) => {
        const customerNameFieldString = text.toLocaleLowerCase();
        setSearchField(customerNameFieldString);
    };

    const data = filteredCustomerNames?.map((customerName, index) => {
        return (
            <View style={{ width: '100%' }}>
                <View  style={{ width: '90%' }}>
                    <Text>{customerName.name}</Text>
                </View>
            </View>
        )
    })
    return (
        <Modal
            isOpen={visible}
            onClose={onClose}
            avoidKeyboard
            justifyContent="center"
            bottom="4"
            size="xl"
            closeOnOverlayClick={true}
        >
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Tính tiền hóa đơn</Modal.Header>
                <Modal.Body>
                    <Box alignItems="center" w="100%">
                        <Box w="90%" maxW="400">
                            <VStack space="md">
                                <Text fontFamily="Quicksand_500Medium">Tháng:</Text>
                                <Button
                                    variant="outline"
                                    size="md"
                                    colorScheme={"gray"}
                                    onPress={() => setShowDatePickerModal(true)}
                                >
                                    {moment(selectedMonth).format("MM/YYYY")}
                                </Button>
                                <Text fontFamily="Quicksand_500Medium">Tuyến đọc:</Text>
                                <Box maxW="100%">
                                    <Select
                                        fontFamily="Quicksand_500Medium"
                                        selectedValue={readingRoute}
                                        minWidth="150"
                                        accessibilityLabel="--Chọn tuyến đọc--"
                                        placeholder="--Chọn tuyến đọc--"
                                        _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />,
                                        }}
                                        mt={0}
                                        pt={0}
                                        onValueChange={(itemValue) => setReadingRoute(itemValue)}
                                    >
                                        {readingRoutes?.map((item) => (
                                            <Select.Item
                                                fontFamily="Quicksand_500Medium"
                                                label={item.tenTuyen}
                                                value={item.id}
                                                key={item.id}
                                            />
                                        ))}
                                    </Select>
                                </Box>
                                <Text fontFamily="Quicksand_500Medium">Seri hóa đơn:</Text>
                                <Box maxW="100%">
                                    <Select
                                        fontFamily="Quicksand_500Medium"
                                        selectedValue={readingRoute}
                                        minWidth="150"
                                        accessibilityLabel="--Chọn seri hóa đơn--"
                                        placeholder="--Chọn seri hóa đơn--"
                                        _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />,
                                        }}
                                        mt={0}
                                        pt={0}
                                        onValueChange={(itemValue) => setReadingRoute(itemValue)}
                                    >
                                        {readingRoutes?.map((item) => (
                                            <Select.Item
                                                fontFamily="Quicksand_500Medium"
                                                label={item.tenTuyen}
                                                value={item.id}
                                                key={item.id}
                                            />
                                        ))}
                                    </Select>
                                </Box>
                                <Text fontFamily="Quicksand_500Medium">Khách hàng:</Text>
                                <Box maxW="100%" alignItems="center">
                                    <Input mx="3" placeholder="Tên khách hàng" w="100%" onChangeText={onValueChange} value="Đặng Trung Chính"/>
                                </Box>
                                <Box maxW="100%">
                                {data}
                                </Box>
                                <Text fontFamily="Quicksand_500Medium">Ghi chú:</Text>
                                <TextArea
                                    fontFamily="Quicksand_500Medium"
                                    h={20}
                                    placeholder="Nhập ghi chú"
                                    w="100%"
                                />
                                <View style={{ height: 250 }}></View>
                            </VStack>
                        </Box>
                    </Box>
                </Modal.Body>
                <Modal.Footer>
                    <HStack space={3}>
                        <Button
                            leftIcon={
                                <Icon as={Ionicons} name="save" size="sm" />
                            }
                            onPress={() => console.log("hello world")}
                            colorScheme="blue"
                        >
                            <Text fontFamily="Quicksand_700Bold" color={"white"}>
                                Bắt đầu thực hiện
                            </Text>
                        </Button>
                        <Button
                            leftIcon={<Icon as={Ionicons} name="close" size="sm" />}
                            colorScheme="warning"
                            onPress={onClose}
                        >
                            <Text fontFamily="Quicksand_700Bold" color={"white"}>
                                Đóng
                            </Text>
                        </Button>
                    </HStack>
                </Modal.Footer>
                <Modal
                    isOpen={showDatePickerModal}
                    onClose={() => setShowDatePickerModal(false)}
                    size="xl"
                    _backdrop={{
                        _dark: {
                            bg: "coolGray.800",
                        },
                        bg: "warmGray.50",
                    }}
                >
                    <Modal.Content maxWidth="100%" maxH="600">
                        <Modal.CloseButton />
                        <Modal.Header>Chọn tháng</Modal.Header>
                        <Modal.Body>
                            {/*<DatePicker
                                mode="monthYear"
                                selectorStartingYear={2000}
                                onMonthYearChange={(selectedMonth) =>
                                    setSelectedMonth(selectedMonth)
                                }
                                locale="vi_VN"
                            />*/}
                            <YearMonthPicker
                                dateSelected={selectedMonth}
                                setDateSelected={setSelectedMonth}
                            />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button
                                    variant="ghost"
                                    colorScheme="blueGray"
                                    onPress={() => {
                                        setShowDatePickerModal(false);
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    onPress={() => {
                                        setShowDatePickerModal(false);
                                        // Set the selectedDate value to the input when Save is pressed
                                    }}
                                >
                                    Save
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Modal.Content>
        </Modal>
    )
}

export default BillPaymentModel;