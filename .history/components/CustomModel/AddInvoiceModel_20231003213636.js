import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, CheckIcon, Select, Modal, FormControl, VStack, HStack, Button, Icon, Text, Input, TextArea } from 'native-base';
import { DefaultTheme, List } from "react-native-paper";
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
                <Modal.Header>Thêm hóa đơn</Modal.Header>
                <Modal.Body>
                    <Box alignItems="center" w="100%">
                        <Box w="95%" maxW="400" mb={3}>
                            <VStack space="md">
                                <List.Accordion
                                    style={styles.accordionTitle}
                                    titleStyle={{
                                        color: colors.text,
                                        fontWeight: 600,
                                        fontFamily: "Quicksand_700Bold",
                                    }}
                                    title="Thông tin đồng hồ"
                                >
                                    <Box w="95%" maxW="400" >
                                        <VStack space="md">
                                            <Text fontFamily="Quicksand_500Medium">Vùng:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={officerRead}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn vùng--"
                                                    placeholder="--Chọn vùng--"
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
                                            <Text fontFamily="Quicksand_500Medium">Khu vực:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Khu vực" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Nhân viên:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn nhân viên--"
                                                    placeholder="--Chọn nhân viên--"
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
                                            <Text fontFamily="Quicksand_500Medium">Phạm vi:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn phạm vi--"
                                                    placeholder="--Chọn phạm vi--"
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
                                            <Text fontFamily="Quicksand_500Medium">Số hợp dồng:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Số hợp dồng" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Mã đồng hồ:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Mã đồng hồ" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">CS đầu:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn chỉ số đầu--"
                                                    placeholder="--Chọn chỉ số đầu--"
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
                                            <Text fontFamily="Quicksand_500Medium">CS cuối:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn chỉ số cuối--"
                                                    placeholder="--Chọn chỉ số cuối--"
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
                                            <Text fontFamily="Quicksand_500Medium">Tiêu thụ:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Tiêu thụ" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Mã đồng hồ cũ:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Mã đồng hồ cũ" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">CS đầu cũ:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn chỉ số đầu cũ--"
                                                    placeholder="--Chọn chỉ số đầu cũ--"
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
                                            <Text fontFamily="Quicksand_500Medium">CS cuối cũ:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn chỉ số cuối cũ--"
                                                    placeholder="--Chọn chỉ số cuối cũ--"
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
                                            <Text fontFamily="Quicksand_500Medium">Truy thu:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Truy thu" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Loại hóa đơn:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn loại hóa đơn--"
                                                    placeholder="--Chọn loại hóa đơn--"
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
                                            <Text fontFamily="Quicksand_500Medium">Số nước KM:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn số nước KM--"
                                                    placeholder="--Chọn số nước KM--"
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
                                            <Text fontFamily="Quicksand_500Medium">Hình thức TT:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn hình thức thanh toán--"
                                                    placeholder="--Chọn hình thức thanh toán--"
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
                                            <Text fontFamily="Quicksand_500Medium">Đối tượng giá:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={readingRoute}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn đối tượng giá--"
                                                    placeholder="--Chọn đối tượng giá--"
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
                                        </VStack>
                                    </Box>
                                </List.Accordion>
                            </VStack>
                        </Box>

                        <Box w="95%" maxW="400" mb={3}>
                            <VStack space="md">
                                <List.Accordion
                                    style={styles.accordionTitle}
                                    titleStyle={{
                                        color: colors.text,
                                        fontWeight: 600,
                                        fontFamily: "Quicksand_700Bold",
                                    }}
                                    title="Thông tin khách hàng"
                                >
                                    <Box w="95%" maxW="400" alignItems="center">
                                        <VStack space="md">
                                            <Text fontFamily="Quicksand_500Medium">Mã khách hàng:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Mã khách hàng" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Tên KH:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Mã khách hàng" w="100%" />
                                            </Box>
                                        </VStack>
                                    </Box>
                                </List.Accordion>
                            </VStack>
                        </Box>

                        <Box w="95%" maxW="400" mb={3}>
                            <VStack space="md">
                                <List.Accordion
                                    style={styles.accordionTitle}
                                    titleStyle={{
                                        color: colors.text,
                                        fontWeight: 600,
                                        fontFamily: "Quicksand_700Bold",
                                    }}
                                    title="Thông tin chung"
                                >
                                    <Box w="95%" maxW="400" alignItems="center">
                                        <VStack space="md">
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
                                </List.Accordion>
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
                                Lưu
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

const styles = StyleSheet.create({
    accordionTitle: {
        backgroundColor: "#cccc",
        height: 55,
        borderRadius: 15,
        padding: 3,
    },
    formControl: {
        paddingLeft: 20,
        paddingRight: 20,
    },
});
