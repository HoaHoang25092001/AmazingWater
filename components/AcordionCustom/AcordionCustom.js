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
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import * as React from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, List } from "react-native-paper";
import { color } from "react-native-reanimated";
import { colors } from "../../constants";
import {
  filterSoDocApi,
  khuVucAllApi,
  soDocChiSoApi,
  tuyenDocAllApi,
} from "../../api/user";
import { useState } from "react";
import DatePicker, {
  getFormatedDate,
  getToday,
} from "react-native-modern-datepicker";
import { parseISO, format } from "date-fns";
import { useEffect } from "react";
import MonthPicker from "react-native-month-picker";
import moment from "moment";
import App from "../../screens/user/TestTable";
import YearMonthPicker from "../PickYearMonth/PickYearMonth";

const AccordionCustom = ({ data, setData }) => {
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
  const [dateSelected, setDateSelected] = useState(moment());

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
            {moment(dateSelected).format("MM/YYYY")}
          </Button>
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Cán bộ đọc</FormControl.Label>
          <Input
            size="md"
            value={selectedCanBo}
            onChangeText={(text) => setSelectedCanBo(text)}
          />
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Tuyến đọc</FormControl.Label>

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
            {allData?.map((item) => (
              <Select.Item
                key={item.id}
                label={item.tenTuyen}
                value={item.id}
              />
            ))}
          </Select>
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Trạng thái</FormControl.Label>

          <Select
            selectedValue={selectedTrangThai}
            minWidth="200"
            accessibilityLabel="Chọn trạng thái"
            placeholder="Chọn trạng thái"
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
          <FormControl.Label>Khu vực</FormControl.Label>
          <Select
            selectedValue={selectedKhuVuc}
            minWidth="200"
            accessibilityLabel="Chọn khu vực"
            placeholder="Chọn khu vực"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setSelectedKhuVuc(itemValue)}
          >
            {allKVData?.map((item) => (
              <Select.Item
                key={item.id}
                label={item.tenKhuVuc}
                value={item.id}
              />
            ))}
          </Select>
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Kỳ GSC</FormControl.Label>
          <Input
            size="md"
            value={selectedKyGhi}
            onChangeText={(text) => setSelectedKyGhi(text)}
          />
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Tên sổ</FormControl.Label>
          <Input
            size="md"
            value={selectedTenSo}
            onChangeText={(text) => setSelectedTenSo(text)}
          />
        </FormControl>
        <Center>
          <HStack mt="3" mb="3" style={{ alignContent: "space-between" }}>
            <Button.Group space={2}>
              <Button
                variant={"outline"}
                onPress={handleFilterSoDoc}
                leftIcon={<Icon as={MaterialIcons} name="search" size="sm" />}
              >
                Tìm kiếm
              </Button>
              <Button
                variant={"outline"}
                onPress={handleTimMoi}
                leftIcon={<Icon as={MaterialIcons} name="search" size="sm" />}
              >
                Tìm mới
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
                dateSelected={dateSelected}
                setDateSelected={setDateSelected}
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

export default AccordionCustom;
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
