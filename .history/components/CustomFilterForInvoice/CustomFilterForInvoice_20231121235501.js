import { MaterialIcons } from "@expo/vector-icons";
import {
    Button,
    Center,
    CheckIcon,
    FormControl,
    HStack,
    Icon,
    Input,
    Modal,
    Pressable,
    ScrollView,
    Select,
    Text,
} from "native-base";
import * as React from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, List } from "react-native-paper";
import { colors } from "../../constants";
import {
    filterSoDocApi,
    khuVucAllApi,
    soDocChiSoApi,
    tuyenDocAllApi,
    filterHoaDonApi
} from "../../api/user";
import { useState, useEffect } from "react";
import moment from "moment";
import YearMonthPicker from "../PickYearMonth/PickYearMonth";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
// import graphql
import { gql, useQuery } from "@apollo/client";
import apolloClient from "../../config/apolloClient"

const CustomFilterForInvoice = ({ data, setInvoicesByNMId }) => {
    const [expanded, setExpanded] = React.useState(true);
    const [value, setValue] = React.useState("");
    const [showDatePickerModal, setShowDatePickerModal] = useState(false);
    const [selectedDate, changeDate] = useState(null);
    const [responseData, setResponseData] = useState(null); // State to store the response data
    const [selectedCanBo, setSelectedCanBo] = useState(null);
    const [selectedTuyenDoc, setSelectedTuyenDoc] = useState(null);
    const [selectedTrangThai, setSelectedTrangThai] = useState(null);
    const [selectedKhuVuc, setSelectedKhuVuc] = useState(null);
    const [selectedKyGhi, setSelectedKyGhi] = useState(null);
    const [selectedTenSo, setSelectedTenSo] = useState(null);
    const [allData, setAllData] = useState();
    const [allKVData, setAllKVData] = useState();
    const [selectedMonth, setSelectedMonth] = useState(moment());
    const [inputSearchTuyenDoc, setInputSearchTuyenDoc] = useState("");
    const [resultSearchTuyenDoc, setResultSearchTuyenDoc] = useState([]);
    const [innputSearchHopDong, setInputSearchHopDong] = useState("");
    const [resultSearchHopDong, setResultSearchHopDong] = useState([]);
    const [inputSearchKH, setInputSearchKH] = useState("");
    const [resultSearchKH, setResultSearchKH] = useState([]);
    const [inputSearchSDT, setInputSearchSDT] = useState("");
    const [resultSearchSDT, setResultSearchSDT] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const canBoDoc = useQuery(gql`
    query {
      GetUsers(
        first: 100
        where: { phongBanId: { eq: "7b8cbc57b834441abb9ad0d2666b658d" } }
      ) {
        nodes {
          id
          userName
          normalizedUserName
          phongBan {
            id
            name
          }
        }
      }
    }
  `);
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
    const GET_KHACH_HANGS = gql`
    query GetKhachHangs($first: Int, $name: String) {
      GetKhachHangs(
        first: $first
        where: { tenKhachHang: { contains: $name }, isHide: { eq: false } }
      ) {
        nodes {
          id
          tenKhachHang
        }
      }
    }
  `;
    const GET_KHACH_HANG_SDT = gql`
    query GetKhachHangs($first: Int, $phoneNumber: String) {
      GetKhachHangs(
        first: $first
        where: { dienThoai: { contains: $phoneNumber }, isHide: { eq: false } }
      ) {
        nodes {
          id
          dienThoai
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

    useEffect(() => {
        apolloClient
            .query({
                query: GET_KHACH_HANGS,
                variables: {
                    first: 10,
                    name: inputSearchKH,
                },
            })
            .then((result) => {
                console.log(result);
                setResultSearchKH(result.data.GetKhachHangs.nodes);
            });
    }, [inputSearchKH]);

    useEffect(() => {
        apolloClient
            .query({
                query: GET_KHACH_HANG_SDT,
                variables: {
                    first: 10,
                    phoneNumber: inputSearchSDT,
                },
            })
            .then((result) => {
                console.log(result);
                setResultSearchSDT(result.data.GetKhachHangs.nodes);
            });
    }, [inputSearchSDT]);

    const handleFilterHoaDon = async () => {
        const filterParams = {

            NhaMayIds: "31b9862347e14cd884f15e27b3fc0ffa"
        };
        try {
            const filterData = await filterHoaDonApi(filterParams);
            setInvoicesByNMId(filterData.data.items);
        } catch (error) {
            // Handle errors here
            console.error("Error:", error);
        }
    };
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await tuyenDocAllApi();
                const responeKhuVuc = await khuVucAllApi();
                console.log("Tuyen doc API:", response.data);
                const data = response.data;
                const khuVucData = responeKhuVuc.data;
                setAllData(data);
                setAllKVData(khuVucData);
            } catch (error) {
                console.error("Lỗi tuyen doc API:", error);
                // Xử lý lỗi ở đây nếu cần
            }
        }
        fetchData();
    }, []);
    const handleTimMoi = () => {
        setDateSelected();
        setSelectedCanBo();
        setSelectedTuyenDoc();
        setSelectedTrangThai();
        setSelectedKhuVuc();
        setSelectedKyGhi();
        setSelectedTenSo();
    };
    return (
        <List.Accordion
            style={styles.accordionTitle}
            titleStyle={{
                color: colors.text,
                fontWeight: 600,
                fontFamily: "Quicksand_700Bold",
            }}
            title="Tìm kiếm"
        >
            <ScrollView
                style={{
                    backgroundColor: "white",
                    height: "40%",
                }}
            >
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Chọn tháng</FormControl.Label>
                    <Button
                        variant="outline"
                        size="md"
                        colorScheme={"gray"}
                        onPress={() => setShowDatePickerModal(true)}
                    >
                        {moment(selectedMonth).format("MM/YYYY")}
                    </Button>
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Cán bộ đọc</FormControl.Label>
                    <Select
                        selectedValue={selectedTuyenDoc}
                        minWidth="200"
                        accessibilityLabel="Chọn tuyến đọc"
                        placeholder="Chọn tuyến đọc"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setSelectedTuyenDoc(itemValue)}
                    >
                        {canBoDoc?.data?.GetUsers?.nodes?.map((item) => (
                            <Select.Item
                                key={item.id}
                                label={item.normalizedUserName}
                                value={item.id}
                            />
                        ))}
                    </Select>
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Tuyến đọc</FormControl.Label>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        initialValue=''
                        onSelectItem={setSelectedItem}
                        dataSet={resultSearchTuyenDoc?.map((item) => ({
                            id: item.keyId,
                            title: item.keyId,
                            value: item.keyId,
                        }))}
                        onChangeText={(value) => {
                            setInputSearchTuyenDoc(value);
                        }}
                        textInputProps={{
                            placeholder: 'Tuyến đọc'
                        }}
                        inputContainerStyle={{
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#dcdcdc'
                        }}
                    />
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Số hợp dồng</FormControl.Label>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        initialValue=''
                        onSelectItem={setSelectedItem}
                        dataSet={resultSearchHopDong?.map((item) => ({
                            id: item.id,
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
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Khách hàng</FormControl.Label>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        initialValue=''
                        onSelectItem={setSelectedItem}
                        dataSet={resultSearchKH?.map((item) => ({
                            id: item.id,
                            title: item.tenKhachHang,
                            value: item.tenKhachHang,
                        }))}
                        onChangeText={(value) => {
                            setInputSearchKH(value);
                        }}
                        textInputProps={{
                            placeholder: 'Tên Khách hàng'
                        }}
                        inputContainerStyle={{
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#dcdcdc'
                        }}
                    />
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Số hóa đơn</FormControl.Label>
                    <Input
                        size="md"
                        value={selectedKyGhi}
                        onChangeText={(text) => setSelectedKyGhi(text)}
                    />
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Từ</FormControl.Label>

                    <Select
                        selectedValue={selectedTrangThai}
                        minWidth="200"
                        accessibilityLabel="Chọn tháng"
                        placeholder="Từ"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setSelectedTrangThai(itemValue)}
                    >
                        <Select.Item key={"1"} label="Tháng 1" value="1" />
                        <Select.Item key={"2"} label="Tháng 2" value="2" />
                        <Select.Item key={"3"} label="Tháng 3" value="3" />
                        <Select.Item key={"4"} label="Tháng 4" value="4" />
                        <Select.Item key={"5"} label="Tháng 5" value="5" />
                        <Select.Item key={"6"} label="Tháng 6" value="6" />
                        <Select.Item key={"7"} label="Tháng 7" value="7" />
                        <Select.Item key={"8"} label="Tháng 8" value="8" />
                        <Select.Item key={"9"} label="Tháng 9" value="9" />
                        <Select.Item key={"10"} label="Tháng 10" value="10" />
                        <Select.Item key={"11"} label="Tháng 11" value="11" />
                        <Select.Item key={"12"} label="Tháng 12" value="12" />
                    </Select>
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Đến</FormControl.Label>

                    <Select
                        selectedValue={selectedTrangThai}
                        minWidth="200"
                        accessibilityLabel="Chọn Tháng"
                        placeholder="Đến"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setSelectedTrangThai(itemValue)}
                    >
                        <Select.Item key={"1"} label="Tháng 1" value="1" />
                        <Select.Item key={"2"} label="Tháng 2" value="2" />
                        <Select.Item key={"3"} label="Tháng 3" value="3" />
                        <Select.Item key={"4"} label="Tháng 4" value="4" />
                        <Select.Item key={"5"} label="Tháng 5" value="5" />
                        <Select.Item key={"6"} label="Tháng 6" value="6" />
                        <Select.Item key={"7"} label="Tháng 7" value="7" />
                        <Select.Item key={"8"} label="Tháng 8" value="8" />
                        <Select.Item key={"9"} label="Tháng 9" value="9" />
                        <Select.Item key={"10"} label="Tháng 10" value="10" />
                        <Select.Item key={"11"} label="Tháng 11" value="11" />
                        <Select.Item key={"12"} label="Tháng 12" value="12" />
                    </Select>
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>TT Hóa đơn</FormControl.Label>

                    <Select
                        selectedValue={selectedTrangThai}
                        minWidth="200"
                        accessibilityLabel="Chọn trạng thái hóa đơn"
                        placeholder="Trạng thái hóa đơn"
                        _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />,
                        }}
                        mt={1}
                        onValueChange={(itemValue) => setSelectedTrangThai(itemValue)}
                    >
                        <Select.Item key={"1"} label="Đang ghi" value="1" />
                        <Select.Item key={"2"} label="Đã ngưng" value="2" />
                    </Select>
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Số điện thoại</FormControl.Label>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        initialValue=''
                        onSelectItem={setSelectedItem}
                        dataSet={resultSearchSDT
                            ?.filter((item) => item.dienThoai !== "")
                            ?.map((item) => ({
                                id: item.id,
                                title: item.dienThoai,
                                value: item.dienThoai,
                            }))}
                        onChangeText={(value) => {
                            setInputSearchSDT(value);
                        }}
                        textInputProps={{
                            placeholder: 'Số điện thoại'
                        }}
                        inputContainerStyle={{
                            backgroundColor: '#fff',
                            borderWidth: 1,
                            borderColor: '#dcdcdc'
                        }}
                    />
                </FormControl>
                <Center>
                    <HStack mt="3" mb="3" style={{ alignContent: "space-between" }}>
                        <Button.Group space={2}>
                            <Button
                                variant={"outline"}
                                onPress={handleFilterHoaDon}
                                leftIcon={<Icon as={MaterialIcons} name="search" size="sm" />}
                                colorScheme="info"
                            >
                                Tìm kiếm
                            </Button>
                            <Button
                                variant={"outline"}
                                onPress={handleTimMoi}
                                colorScheme="info"
                            >
                                Làm mới
                            </Button>
                        </Button.Group>
                    </HStack>
                </Center>
                <Modal
                    isOpen={showDatePickerModal}
                    onClose={() => setShowDatePickerModal(false)}
                    size="lg"
                >
                    <Modal.Content width={"90%"} maxH="600">
                        <Modal.CloseButton />
                        <Modal.Header>Chọn tháng</Modal.Header>
                        <Modal.Body>
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
            </ScrollView>
        </List.Accordion>
    );
};

export default CustomFilterForInvoice;
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
