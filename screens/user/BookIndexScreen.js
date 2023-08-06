import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import {
  Avatar,
  Box,
  Button,
  CheckIcon,
  FlatList,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  Select,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import Quicksand from "../../components/Fonts/QuickSand";
import Pagination from "../../components/Pagination";
import StaggerCustom from "../../components/StaggerCustom/StaggerCustom";
import TableList from "../../components/TableList/TableList";
import { colors } from "../../constants";

export default function BookIndexScreen() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [date, setDate] = useState("");
  const [showPickDate, setShowPickDate] = useState(false);
  const [showDatePickerModal, setShowDatePickerModal] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState("MM-YYYY");

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      tuyen: "Tuyến 0",
      canbo: "Cán bộ 0",
      tenso: "Tên sổ 0",
      chuaghi: "Chưa ghi 0",
      chotso: "Chốt sổ 0",
      trangthai: "Trạng thái 0",
      ngaychot: "Ngày chốt 0",
      hoadon: "Hóa đơn 0",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb21238112",
      tuyen: "Tuyến 2",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb23128112",
      tuyen: "Tuyến 3",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53ab3123b28112",
      tuyen: "Tuyến 4",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-11321",
      tuyen: "Tuyến 5",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-123",
      tuyen: "Tuyến 6",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53ab123b28112",
      tuyen: "Tuyến 7",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28123112",
      tuyen: "Tuyến 8",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb21328112",
      tuyen: "Tuyến 9",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53ab12323b2811232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad5331243abb2811232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad312353abb2811232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad5231233abb2811232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-123123123",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28312311232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-1232312",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb123452811232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb243423811232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2431811232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28123411232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
  ];
  const title = [
    {
      id: "1",
      name: "#",
    },
    {
      id: "2",
      name: "Tuyến đọc",
    },
    {
      id: "3",
      name: "Cán bộ đọc",
    },
    {
      id: "4",
      name: "Tên sổ",
    },
    {
      id: "5",
      name: "Chưa ghi",
    },
    {
      id: "6",
      name: "Chốt sổ",
    },
    {
      id: "7",
      name: "Trạng thái",
    },
    {
      id: "8",
      name: "Ngày chốt",
    },
    {
      id: "9",
      name: "Hóa đơn",
    },
  ];

  const searchLabel = [
    {
      label: "Cán bộ đọc",
    },
    { label: "Tuyến đọc" },
    { label: "Trạng thái" },
    { label: "Khu vực" },
    { label: "Kỳ GSC" },
    { label: "Tên sổ" },
  ];
  const handleOpenDatePickerModal = () => {
    setShowDatePickerModal(true);
  };
  const renderItem = ({ item, index }) => (
    <HStack h={10} key={index}>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{index + 1}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.tuyen}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.canbo}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.tenso}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.chuaghi}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.chotso}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.trangthai}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.ngaychot}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.hoadon}</Text>
      </Box>
    </HStack>
  );

  //pagination
  // Tính tổng số trang dựa trên số lượng mục và số lượng mục trên mỗi trang

  const [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_500Medium,
  });
  if (fontsLoaded) {
    return (
      <View>
        <TableList title={title} data={data} renderItem={renderItem} />

        <StaggerCustom setModalVisible={setModalVisible} />
        {/*Modal dialog */}

        <Modal
          isOpen={modalVisible}
          onClose={() => setModalVisible(false)}
          avoidKeyboard
          justifyContent="center"
          bottom="4"
          size="xl"
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Tìm kiếm</Modal.Header>

            <Modal.Body>
              <Button onPress={() => setShowDatePickerModal(true)}>
                Chọn tháng
              </Button>
              <FormControl mt="3">
                <FormControl.Label>Chọn tháng</FormControl.Label>
                <Input isReadOnly value={selectedDate} />
              </FormControl>
              <Modal
                isOpen={showDatePickerModal}
                onClose={() => setShowDatePickerModal(false)}
                size="lg"
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
                    <DatePicker
                      mode="monthYear"
                      selectorStartingYear={2000}
                      onMonthYearChange={(selectedDate) =>
                        setSelectedDate(selectedDate)
                      }
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
                          setSelectedDate(selectedDate);
                        }}
                      >
                        Save
                      </Button>
                    </Button.Group>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
              {searchLabel.map((item, index) => (
                <FormControl mt="3" key={index}>
                  <FormControl.Label>{item.label}</FormControl.Label>
                  <Input />
                </FormControl>
              ))}
            </Modal.Body>
            <Modal.Footer>
              <Button
                flex="1"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Tìm kiếm
              </Button>{" "}
              <Button
                flex="1"
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                Tìm mới
              </Button>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  paginationButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  paginationButtonActive: {
    backgroundColor: "#ccc",
  },
  paginationText: {
    color: "#333",
    fontWeight: "bold",
  },
  paginationTextActive: {
    color: "white",
  },
  textContent: {
    textAlign: "center",
    fontFamily: "Quicksand_700Bold",
    fontSize: 14,
    color: colors.text,
    fontWeight: 600,
  },
  textTitle: {
    textAlign: "center",
    fontWeight: 600,
    fontSize: 16,
    fontFamily: "Quicksand_700Bold",
  },
  boxContent: {
    width: 120,
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
  boxTitle: {
    width: 120,
    borderBottomWidth: 1,
    backgroundColor: "rgb(250,250,250)",
  },
});
