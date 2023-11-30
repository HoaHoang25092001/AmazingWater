import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, CheckIcon, Select, Modal, FormControl, VStack, HStack, Button, Icon, Text, Input, TextArea } from 'native-base';
import { DefaultTheme, List } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
// import graphql
import { gql, useQuery } from "@apollo/client";
import apolloClient from "../../config/apolloClient"
import AutocompleteInput from 'react-native-autocomplete-input';


const EditInvoiceModel = ({ visible, onClose }) => {
    const [officerRead, setOfficerRead] = useState("");
    const [readingRoute, setReadingRoute] = useState("");
    const [customerNameField, setCustomerNameField] = useState("");
    const [customerIdField, setCustomerIdField] = useState("");
    const [customerTaxCodeField, setCustomerTaxCodeField] = useState("");
    const [customerPhoneNumberField, setCustomerPhoneNumberField] = useState("");
    const [customerAddressField, setCustomerAddressField] = useState("");
    const [inputSearchTuyenDoc, setInputSearchTuyenDoc] = useState("");
    const [resultSearchTuyenDoc, setResultSearchTuyenDoc] = useState([]);
    const [innputSearchHopDong, setInputSearchHopDong] = useState("");
    const [resultSearchHopDong, setResultSearchHopDong] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const GET_TUYEN_DOC = gql`
    query GetTuyenDocs($first: Int, $name: String) {
      GetTuyenDocs(
        first: $first
        order: { createdTime: DESC }
        where: {
          keyId: { contains: $name }
          deletedTime: { eq: null }
          isHide: { eq: false }
        }
      ) {
        nodes {
          id
          keyId
        }
      }
    }
  `;
    const GET_HOP_DONG = gql`
    query GetHopDongs($first: Int, $name: String) {
      GetHopDongs(
        first: $first
        where: { keyId: { contains: $name }, isHide: { eq: false } }
      ) {
        nodes {
          id
          keyId
        }
      }
    }
  `;

    useEffect(() => {
        apolloClient
            .query({
                query: GET_TUYEN_DOC,
                variables: {
                    first: 10,
                    name: inputSearchTuyenDoc,
                },
            })
            .then((result) => {
                console.log(result);
                setResultSearchTuyenDoc(result.data.GetTuyenDocs.nodes);
            });
    }, [inputSearchTuyenDoc]);

    useEffect(() => {
        apolloClient
            .query({
                query: GET_HOP_DONG,
                variables: {
                    first: 10,
                    name: innputSearchHopDong,
                },
            })
            .then((result) => {
                console.log(result);
                setResultSearchHopDong(result.data.GetHopDongs.nodes);
            });
    }, [innputSearchHopDong]);

    const { invoice } = useSelector(state => state.invoice)
    console.log("Hoa don by Id", invoice)

    useEffect(() => {
        if (invoice) {
            setCustomerNameField(invoice.tenKhachHang);
            setCustomerIdField(invoice.maKhachHang);
            setCustomerTaxCodeField(invoice.maSoThueKhachHang);
            setCustomerPhoneNumberField(invoice.dienThoaiKhachHang);
            setCustomerAddressField(invoice.diaChiKhachHang);
        }
    }, [invoice]);

    const data = [
        { id: '1', title: 'Alpha' },
        { id: '2', title: 'Beta' },
        { id: '3', title: 'Gamma' },
      ]

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
                <Modal.Header>Cập nhật hóa đơn</Modal.Header>
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
                                    <Box w="95%" maxW="400" alignItems="center">
                                        <VStack space="md">
                                            <Text fontFamily="Quicksand_500Medium">Nhân viên:</Text>
                                            <Box maxW="100%">
                                                <Select
                                                    fontFamily="Quicksand_500Medium"
                                                    selectedValue={officerRead}
                                                    minWidth="150"
                                                    accessibilityLabel="--Chọn nhân viên--"
                                                    placeholder="--Chọn nhân viên--"
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
                                                <FormControl mt="3">
                                                <AutocompleteInput
                                                data={data}
                                                value={selectedItem}
                                                onChangeText={(text) => setSelectedItem(text)}
                                                flatListProps={{
                                                    keyExtractor: (_, idx) => idx,
                                                    renderItem: ({ item }) => <Text>{item.id}</Text>,
                                                  }}
                                              />
                                                </FormControl>
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Số hợp đồng:</Text>
                                            <Box maxW="100%">
                                                <FormControl mt="3">
                                                    <AutocompleteDropdown
                                                        clearOnFocus={false}
                                                        closeOnBlur={true}
                                                        closeOnSubmit={false}
                                                        initialValue=''
                                                        onSelectItem={setSelectedItem}
                                                        dataSet={resultSearchHopDong?.map((item) => ({
                                                            id: item.keyId,
                                                            title: item.keyId,
                                                            value: item.keyId,
                                                        }))}
                                                        onChangeText={(value) => {
                                                            setInputSearchHopDong(value);
                                                        }}
                                                        textInputProps={{
                                                            placeholder: 'Số hợp đồng'
                                                        }}
                                                        inputContainerStyle={{
                                                            backgroundColor: '#fff',
                                                            borderWidth: 1,
                                                            borderColor: '#dcdcdc'
                                                        }}
                                                    />
                                                </FormControl>
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
                                                <Input mx="3" placeholder="Mã khách hàng" value={customerIdField} w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Tên khách hàng:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Tên khách hàng" value={customerNameField} w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Mã số thuế:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Mã số thuế" value={customerTaxCodeField} w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Điện thoại:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Điện thoại" value={customerPhoneNumberField} w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Địa chỉ:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Địa chỉ" value={customerAddressField} w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Số hộ:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Số hộ" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Số khẩu:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Số khẩu" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Tên ngân hàng:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Tên ngân hàng" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Tài khoản ngân hàng:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Tài khoản hàng" w="100%" />
                                            </Box>
                                            <Text fontFamily="Quicksand_500Medium">Tên tài khoản:</Text>
                                            <Box maxW="100%" alignItems="center">
                                                <Input mx="3" placeholder="Tên tài khoản" w="100%" />
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

export default EditInvoiceModel;

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
