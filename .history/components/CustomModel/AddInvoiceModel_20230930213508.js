import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, CheckIcon, Select, Modal, FormControl, VStack, HStack, Button, Icon, Text, Input, TextArea } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants';

const AddInvoiceModel = ({ visible, onClose }) => {
    const [officerRead, setOfficerRead] = useState("");
    const [readingRoute, setReadingRoute] = useState("");
    const [scope, setScope] = useState("");

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
                                <Text fontFamily="Quicksand_500Medium">Cán bộ đọc:</Text>
                                <Box maxW="100%">
                                    <Select
                                        fontFamily="Quicksand_500Medium"
                                        selectedValue={officerRead}
                                        minWidth="150"
                                        accessibilityLabel="--Chọn cán bộ--"
                                        placeholder="--Chọn cán bộ đọc--"
                                        _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />,
                                        }}
                                        mt={0}
                                        pt={0}
                                        onValueChange={(itemValue) => setOfficerRead(itemValue)}
                                    >
                                        <Select.Item
                                            fontFamily="Quicksand_500Medium"
                                            label="Hoàng Văn Nam"
                                            value="ux"
                                        />
                                        <Select.Item
                                            fontFamily="Quicksand_500Medium"
                                            label="Hoàng Quang Hòa"
                                            value="ux"
                                        />
                                        <Select.Item
                                            fontFamily="Quicksand_500Medium"
                                            label="Trần Thiên Phúc"
                                            value="ux"
                                        />
                                    </Select>
                                </Box>
                                <Text fontFamily="Quicksand_500Medium">Tuyến đọc:</Text>
                                <Box maxW="100%">
                                    <Select
                                        fontFamily="Quicksand_500Medium"
                                        selectedValue={readingRoute}
                                        minWidth="150"
                                        accessibilityLabel="--Chọn tuyến ọc--"
                                        placeholder="--Chọn tuyến đọc--"
                                        _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />,
                                        }}
                                        mt={0}
                                        pt={0}
                                        onValueChange={(itemValue) => setReadingRoute(itemValue)}
                                    >
                                        <Select.Item
                                            fontFamily="Quicksand_500Medium"
                                            label="Hoàng Văn Nam"
                                            value="ux"
                                        />
                                    </Select>
                                </Box>
                                <Text fontFamily="Quicksand_500Medium">Mã khách hàng:</Text>
                                <Box maxW="100%" alignItems="center">
                                    <Input mx="3" placeholder="Mã khách hàng" w="100%" />
                                </Box>
                                <Text fontFamily="Quicksand_500Medium">Ghi chú:</Text>
                                <TextArea
                                    fontFamily="Quicksand_500Medium"
                                    h={20}
                                    placeholder="Nhập ghi chú"
                                    w="100%"
                                />
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
            </Modal.Content>
        </Modal>
    )
}

export default AddInvoiceModel;