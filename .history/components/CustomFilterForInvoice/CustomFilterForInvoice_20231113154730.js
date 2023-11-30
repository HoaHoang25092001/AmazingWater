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
} from "../../api/user";
import { useState, useEffect } from "react";
import moment from "moment";
import YearMonthPicker from "../PickYearMonth/PickYearMonth";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
// import graphql
import { gql, useQuery } from "@apollo/client";
import apolloClient from "../../config/apolloClient"

const CustomFilterForInvoice = ({ data, setData }) => {
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

    const handleFilterSoDoc = async () => {
        const filterParams = {
            thangSoDoc: moment(dateSelected).format("MM/YYYY"),
            canboDocId: selectedCanBo,
            tuyenDocId: selectedTuyenDoc,
            trangThaiSoDoc: 1,
            khuVucId: selectedKhuVuc,
            kyGhiChiSoId: selectedKyGhi,
            tenSo: selectedTenSo,
        };
        try {
            const filterData = await filterSoDocApi(filterParams);
            setData(filterData.data);
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
    // useEffect(() => {
    //   setData(responseData);
    //   console.log("data123123", responseData);
    // }, [handleFilterSoDoc]);
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
                        onChangeText={(value) => {
                            setInputSearchTuyenDoc(value);
                        }}
                        
                        dataSet={resultSearchTuyenDoc?.map((item) => ({
                            label: item.keyId,
                            value: item.keyId,
                          }))}
                    />
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Số hợp dồng</FormControl.Label>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        initialValue={{ id: '2' }} // or just '2'
                        onSelectItem={setSelectedItem}
                        dataSet={[
                            { id: '1', title: 'Alpha' },
                            { id: '2', title: 'Beta' },
                            { id: '3', title: 'Gamma' },
                        ]}
                    />
                </FormControl>
                <FormControl mt="3" style={styles.formControl}>
                    <FormControl.Label>Khách hàng</FormControl.Label>
                    <AutocompleteDropdown
                        clearOnFocus={false}
                        closeOnBlur={true}
                        closeOnSubmit={false}
                        initialValue={{ id: '2' }} // or just '2'
                        onSelectItem={setSelectedItem}
                        dataSet={[
                            { id: '1', title: 'Alpha' },
                            { id: '2', title: 'Beta' },
                            { id: '3', title: 'Gamma' },
                        ]}
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
                        <Select.Item key={"1"} label="Đang ghi" value="1" />
                        <Select.Item key={"2"} label="Đã ngưng" value="2" />
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
                        <Select.Item key={"1"} label="Đang ghi" value="1" />
                        <Select.Item key={"2"} label="Đã ngưng" value="2" />
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
                    <Input
                        size="md"
                        value={selectedTenSo}
                        onChangeText={(text) => setSelectedTenSo(text)}
                        placeholder="Số điện thoại"
                    />
                </FormControl>
                <Center>
                    <HStack mt="3" mb="3" style={{ alignContent: "space-between" }}>
                        <Button.Group space={2}>
                            <Button
                                variant={"outline"}
                                onPress={handleFilterSoDoc}
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
