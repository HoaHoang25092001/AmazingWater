import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppLoading } from "expo";
import {
  Avatar,
  Box,
  Button,
  Center,
  Checkbox,
  CheckIcon,
  FlatList,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  Progress,
  Select,
  Slider,
  Spacer,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { useDispatch, useSelector } from "react-redux";
import AccordionCustom from "../../components/AcordionCustom/AcordionCustom";
import DateTimeCustom from "../../components/DateTimeCustom/DateTimeCustom";
import Quicksand from "../../components/Fonts/QuickSand";
import MenuButton from "../../components/MenuButton/MenuButton";
import Pagination from "../../components/Pagination";
import StaggerCustom from "../../components/StaggerCustom/StaggerCustom";
import TableCreateMuti from "../../components/TableList/TableCreateMuti";
import TableList from "../../components/TableList/TableList";
import { colors } from "../../constants";

export default function BookIndexScreen({ navigation }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [date, setDate] = useState("");
  const [showPickDate, setShowPickDate] = useState(false);
  const [showDatePickerModal, setShowDatePickerModal] = useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showDateModalMuti, setShowDateModalMuti] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState("MM-YYYY");
  const [valueDate, setValueDate] = React.useState("---Chọn ngày---");
  const [valueDateMuti, setValueDateMuti] = React.useState("---Chọn ngày---");
  const [modalCreated, setModalCreated] = useState(false);
  const [modalCreateMuti, setModalCreatedMuti] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
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
        borderLeftWidth={1}
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
        <VStack space={4}>
          <AccordionCustom
            setShowDatePickerModal={setShowDatePickerModal}
            selectedDate={selectedDate}
          />
          <TableList title={title} data={data} />

          <MenuButton
            setModalVisible={setModalVisible}
            setModalCreated={setModalCreated}
            setModalCreatedMuti={setModalCreatedMuti}
            setOverlayVisible={setOverlayVisible}
            navigation={navigation}
          />
        </VStack>

        {/*Modal dialog */}
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
                locale="vi_VN"
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
            <Modal.Header>Chỉ số</Modal.Header>

            <Modal.Body>
              <Box alignItems="center" w="100%">
                <Box w="90%" maxW="400">
                  <VStack space="md">
                    <Progress size={"md"} colorScheme="primary" value={10} />
                    <Text>10%</Text>

                    <Progress size={"md"} colorScheme="warning" value={20} />
                    <Text>20%</Text>
                  </VStack>
                </Box>
              </Box>
            </Modal.Body>
          </Modal.Content>
        </Modal>

        <Modal
          isOpen={modalCreated}
          onClose={() => setModalCreated(false)}
          avoidKeyboard
          justifyContent="center"
          bottom="4"
          size="xl"
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Tạo sổ</Modal.Header>

            <Modal.Body>
              <TableList title={title} data={data} renderItem={renderItem} />
              <Center>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Kỳ ghi chỉ số</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Ngày hóa đơn</FormControl.Label>
                  <Button
                    variant="outline"
                    size="md"
                    colorScheme={"gray"}
                    onPress={() => setShowDateModal(true)}
                  >
                    {valueDate}
                  </Button>
                </FormControl>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Ngày đầu kỳ</FormControl.Label>
                  <Button
                    variant="outline"
                    size="md"
                    colorScheme={"gray"}
                    onPress={() => setShowDateModal(true)}
                  >
                    {valueDate}
                  </Button>
                </FormControl>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Ngày cuối kỳ</FormControl.Label>
                  <Button
                    variant="outline"
                    size="md"
                    colorScheme={"gray"}
                    onPress={() => setShowDateModal(true)}
                  >
                    {valueDate}
                  </Button>
                </FormControl>
                <HStack space={2} mt={10}>
                  <Checkbox value="one">Tạo biểu mẫu</Checkbox>
                  <Checkbox value="two">Ghi chỉ số online</Checkbox>
                </HStack>
                <Checkbox mt={3} mb={2} value="three">
                  Không SD kỳ
                </Checkbox>
              </Center>
              <Modal.Footer>
                <Button.Group space={2}>
                  <Button
                    colorScheme="primary"
                    leftIcon={
                      <Icon as={MaterialIcons} name="add-circle" size="sm" />
                    }
                  >
                    Tạo sổ đồng loạt
                  </Button>
                  <Button
                    colorScheme={"warning"}
                    onPress={() => {
                      setModalCreated(false);
                    }}
                  >
                    Đóng
                  </Button>
                </Button.Group>
              </Modal.Footer>
            </Modal.Body>
          </Modal.Content>
        </Modal>
        <Modal
          isOpen={modalCreateMuti}
          onClose={() => setModalCreatedMuti(false)}
          avoidKeyboard
          justifyContent="center"
          bottom="4"
          size="xl"
        >
          <Modal.Content>
            <Modal.CloseButton />
            <Modal.Header>Tạo sổ đồng loạt</Modal.Header>

            <Modal.Body>
              <TableCreateMuti renderItem={renderItem} />
              <Center>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Cán bộ đọc</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Tên sổ</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Kỳ ghi chỉ số</FormControl.Label>
                  <Input />
                </FormControl>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Ngày hóa đơn</FormControl.Label>
                  <Button
                    variant="outline"
                    size="md"
                    colorScheme={"gray"}
                    onPress={() => setShowDateModalMuti(true)}
                  >
                    {valueDateMuti}
                  </Button>
                </FormControl>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Ngày đầu kỳ</FormControl.Label>
                  <Button
                    variant="outline"
                    size="md"
                    colorScheme={"gray"}
                    onPress={() => setShowDateModalMuti(true)}
                  >
                    {valueDateMuti}
                  </Button>
                </FormControl>
                <FormControl w="90%" maxW="300px">
                  <FormControl.Label>Ngày cuối kỳ</FormControl.Label>
                  <Button
                    variant="outline"
                    size="md"
                    colorScheme={"gray"}
                    onPress={() => setShowDateModalMuti(true)}
                  >
                    {valueDateMuti}
                  </Button>
                </FormControl>
                <HStack space={2} mt={10}>
                  <Checkbox value="one">Tạo biểu mẫu</Checkbox>
                  <Checkbox value="two">Ghi chỉ số online</Checkbox>
                </HStack>
                <Checkbox mt={3} mb={2} value="three">
                  Không SD kỳ
                </Checkbox>
              </Center>
              <VStack space={2} alignItems="center">
                <Button
                  variant={"solid"}
                  w={"90%"}
                  style={{ backgroundColor: "#0ce3bc" }}
                  leftIcon={
                    <Icon as={MaterialIcons} name="picture-as-pdf" size="sm" />
                  }
                >
                  Xuất bảng kê
                </Button>
                <Button
                  variant={"solid"}
                  w={"90%"}
                  style={{ backgroundColor: "#5d87ff" }}
                  leftIcon={
                    <Icon as={MaterialIcons} name="add-circle" size="sm" />
                  }
                >
                  Tạo sổ và tạo tiếp
                </Button>
                <Button
                  variant={"solid"}
                  w={"90%"}
                  style={{ backgroundColor: "#5d87ff" }}
                  leftIcon={
                    <Icon as={MaterialIcons} name="add-circle" size="sm" />
                  }
                >
                  Tạo sổ và đóng
                </Button>
                <Button
                  colorScheme={"solid"}
                  w={"90%"}
                  style={{ backgroundColor: "#fa896b" }}
                  leftIcon={<Icon as={MaterialIcons} name="close" size="sm" />}
                  onPress={() => {
                    setModalCreatedMuti(false);
                  }}
                >
                  Đóng
                </Button>
              </VStack>
            </Modal.Body>
          </Modal.Content>
        </Modal>
        <DateTimeCustom
          showDateModal={showDateModal}
          setShowDateModal={setShowDateModal}
          valueDate={valueDate}
          setValueDate={setValueDate}
        />
        <DateTimeCustom
          showDateModal={showDateModalMuti}
          setShowDateModal={setShowDateModalMuti}
          valueDate={valueDateMuti}
          setValueDate={setValueDateMuti}
        />
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
    borderTopWidth: 1,
    backgroundColor: "rgb(250,250,250)",
  },
});
