import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  FlatList,
  HamburgerIcon,
  HStack,
  Menu,
  Pressable,
  ScrollView,
  VStack,
  Radio,
  useDisclose,
  useColorMode,
  useColorModeValue,
  Modal,
  Progress,
  Divider,
  Checkbox,
  Select,
  CheckIcon,
  Center,
  TextArea,
  Icon,
  Text,
  Input,
  FormControl,
  WarningOutlineIcon,
} from "native-base";
import AccordionCustom from "../../components/AcordionCustom/AcordionCustom";
import TableList from "../../components/TableList/TableList";
import MenuButton from "../../components/MenuButton/MenuButton";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants";
import DateTimeCustom from "../../components/DateTimeCustom/DateTimeCustom";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    thanhtoan: "Đã TT",
    ngaythu: "22/07/2023",
    nguoithu: "KT Nguyễn Thị Thúy",
    tongtien: "450,000",
    sotiendatt: "450,000",
    sohopdong: "HD49846156",
    tuyendoc: "baovinh",
    tenkhachhang: "Nguyễn Thị Bích Hậu",
    diachi: "Bảo Vinh - Bảo Hà - Bảo Yên - Bảo Hà",
    sdt: "0356451264",
    hinhthuctt: "Tiền mặt",
    seri: "MT/21E",
    sohoadon: "0068975",
    tieuthu: "55",
    thanhtien: "450,000",
    dtdn: "0",
    bvmt: "0",
    vat: "200",
    ngaythanhlaphd: "03/07/2023",
    ghichu: "",
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb455428ba",
    thanhtoan: "Đã TT",
    ngaythu: "22/07/2023",
    nguoithu: "KT Nguyễn Thị Thúy",
    tongtien: "450,000",
    sotiendatt: "450,000",
    sohopdong: "HD49846156",
    tuyendoc: "baovinh",
    tenkhachhang: "Nguyễn Thị Bích Hậu",
    diachi: "Bảo Vinh - Bảo Hà - Bảo Yên - Bảo Hà",
    sdt: "0356451264",
    hinhthuctt: "Tiền mặt",
    seri: "MT/21E",
    sohoadon: "0068975",
    tieuthu: "55",
    thanhtien: "450,000",
    dtdn: "0",
    bvmt: "0",
    vat: "200",
    ngaythanhlaphd: "03/07/2023",
    ghichu: "",
  },
];
const title = [
  {
    id: "2",
    name: "Thanh toán",
  },
  {
    id: "3",
    name: "Ngày thu",
  },
  {
    id: "4",
    name: "Người thu",
  },
  {
    id: "5",
    name: "Tổng tiền",
  },
  {
    id: "6",
    name: "Số tiền đã TT",
  },
  {
    id: "7",
    name: "Số hợp đồng",
  },
  {
    id: "8",
    name: "Tuyến đọc",
  },
  {
    id: "10",
    name: "Tên khách hàng",
  },
  {
    id: "11",
    name: "Địa chỉ",
  },
  {
    id: "12",
    name: "Điện thoại",
  },
  {
    id: "13",
    name: "Hình thức TT",
  },
  {
    id: "14",
    name: "Seri hóa đơn",
  },
  {
    id: "15",
    name: "Số hóa đơn",
  },
  {
    id: "16",
    name: "Tiêu thụ",
  },
  {
    id: "17",
    name: "Thành tiền",
  },
  {
    id: "22",
    name: "Phí DTĐN",
  },
  {
    id: "18",
    name: "Phí BVMT",
  },
  {
    id: "19",
    name: "Phí VAT",
  },
  {
    id: "20",
    name: "Ngày lập HĐ",
  },
  {
    id: "21",
    name: "Ghi chú TT",
  },
];

const PaymentScreen = () => {
  const [boxTitleWidth, setBoxTitleWidth] = useState(150);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalCongno, setModalCongNo] = React.useState(false);
  const [modalSohoadon, setModalSoHoaDon] = React.useState(false);
  const [modalChiSo, setModalChiSo] = React.useState(false);
  const [service, setService] = React.useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };
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
      width: boxTitleWidth, // Set width to boxTitleWidth
      borderBottomWidth: 1,
      backgroundColor: "white",
    },
    boxIndex: {
      minWidth: 60, // Set width to boxTitleWidth
      borderBottomWidth: 1,
      backgroundColor: "white",
    },
    boxTitle: {
      width: boxTitleWidth,
      borderBottomWidth: 1,
      backgroundColor: "rgb(250,250,250)",
    },
    buttonMenu: {
      maxWidth: "80%",
      fontFamily: "Quicksand_700Bold",
      color: "white",
    },
  });

  const renderItem = ({ item, index }) => (
    <TouchableOpacity>
      <HStack h={10} key={index}>
        <Box
          borderRightWidth={1}
          borderLeftWidth={1}
          style={styles.boxIndex}
          borderColor="muted.200"
          w={50}
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
          <Text style={styles.textContent}>{item.thanhtoan}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.ngaythu}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.nguoithu}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.tongtien}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.sotiendatt}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.sohopdong}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.tuyendoc}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.tenkhachhang}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.diachi}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.sdt}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.hinhthuctt}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.seri}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.sohoadon}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.tieuthu}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.thanhtien}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.dtdn}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.bvmt}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.vat}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.ngaythanhlaphd}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.ghichu}</Text>
        </Box>
      </HStack>
    </TouchableOpacity>
  );
  return (
    <View>
      <VStack space={4}>
        <AccordionCustom />
        <ScrollView horizontal={true} nestedScrollEnabled={true}>
          <Box>
            <HStack
              style={{
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
              <Box
                borderRightWidth={1}
                borderBottomWidth={1}
                borderColor="muted.200"
                style={[styles.boxIndex]}
                pl={["5", "4"]}
                pr={["5", "5"]}
                py="2"
              >
                <Text style={styles.textTitle}>#</Text>
              </Box>

              {title.map((item, index) => (
                <Box
                  key={index}
                  borderRightWidth={1}
                  borderBottomWidth={1}
                  borderColor="muted.200"
                  style={[styles.boxTitle]}
                  pl={["5", "4"]}
                  pr={["5", "5"]}
                  py="2"
                >
                  <Text style={styles.textTitle}>{item.name}</Text>
                </Box>
              ))}
            </HStack>
            {/* Nội dung của bảng */}
            <ScrollView
              h={"75%"}
              style={{ backgroundColor: "white" }}
              nestedScrollEnabled={true}
              scrollEnabled={true}
            >
              <FlatList
                scrollEnabled={false}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </ScrollView>
          </Box>
        </ScrollView>
        <Box w="95%" h="70%" alignItems="center">
          <Menu
            w="200"
            placement="top right"
            borderRadius={25}
            trigger={(triggerProps) => {
              return (
                <Button
                  alignSelf="flex-end"
                  position={"absolute"}
                  style={{
                    boxShadow: "0px 0px 10px 2px rgba(0, 128, 255, 0.7)", // Sử dụng màu xanh trong boxShadow
                    backgroundColor: "red",
                  }}
                  variant="solid"
                  h="50"
                  w="50"
                  {...triggerProps}
                  borderRadius={50}
                >
                  <Ionicons
                    name={"add-outline"}
                    size={24}
                    style={{ textAlign: "center" }}
                    color={"white"}
                  />
                </Button>
              );
            }}
          >
            <Menu.Item
              style={{
                flex: 1,
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 8,
                width: "90%",
                marginBottom: 5,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.emerald_300,
                marginLeft: 10,
                marginRight: 10,
              }}
              onPress={() => setModalVisible(true)}
            >
              <Ionicons color={"white"} name="cash-outline" size={24} />
              <Text style={styles.buttonMenu}>Thanh toán</Text>
            </Menu.Item>
            <Menu.Item
              style={{
                flex: 1,
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 8,
                width: "90%",
                marginBottom: 5,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.amber_500,
                marginLeft: 10,
                marginRight: 10,
              }}
              onPress={() => setModalCongNo(true)}
            >
              <Ionicons color={"white"} name="card" size={24} />
              <Text style={styles.buttonMenu}>Thanh toán công nợ</Text>
            </Menu.Item>

            <Menu.Item
              style={{
                flex: 1,
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 8,
                width: "90%",
                marginBottom: 5,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.blue_700,
                marginLeft: 10,
                marginRight: 10,
              }}
              onPress={() => console.log("Hello")}
            >
              <Ionicons color={"white"} name="card" size={24} />
              <Text style={styles.buttonMenu}>
                Thanh toán tại quầy (in biên lai)
              </Text>
            </Menu.Item>

            <Menu.Item
              style={{
                flex: 1,
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 8,
                width: "90%",
                marginBottom: 5,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.indigo_400,
                marginLeft: 10,
                marginRight: 10,
              }}
              onPress={() => setModalSoHoaDon(true)}
            >
              <Ionicons color={"white"} name="card" size={24} />
              <Text style={styles.buttonMenu}>Thanh toán theo số hóa đơn</Text>
            </Menu.Item>
            <Menu.Item
              style={{
                flex: 1,
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 8,
                width: "90%",
                marginBottom: 5,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.danger_500,
                marginLeft: 10,
                marginRight: 10,
              }}
              onPress={() => setModalChiSo(true)}
            >
              <Ionicons
                color={"white"}
                name="ios-bar-chart-outline"
                size={24}
              />
              <Text style={styles.buttonMenu}>Chỉ số thống kê</Text>
            </Menu.Item>
            <Menu.Item
              style={{
                flex: 1,
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 8,
                width: "90%",
                marginBottom: 5,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.info_500,
                marginLeft: 10,
                marginRight: 10,
              }}
              onPress={() => console.log("Hello")}
            >
              <Ionicons
                color={"white"}
                name="ios-ellipsis-vertical-outline"
                size={24}
              />
              <Text style={styles.buttonMenu}>Tiện ích</Text>
            </Menu.Item>
          </Menu>
        </Box>
      </VStack>
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
          <Modal.Header>Thanh toán</Modal.Header>

          <Modal.Body>
            <Text fontSize="sm" fontFamily="Quicksand_700Bold">
              Thanh toán cho 1 đơn được chọn
            </Text>
            <Divider my="2" />
            <Box alignItems="center" w="100%">
              <Box w="90%" maxW="400">
                <VStack space="md">
                  <HStack space={3}>
                    <Text fontFamily="Quicksand_500Medium">Đã thanh toán:</Text>
                    <Checkbox
                      value="test"
                      accessibilityLabel="This is a dummy checkbox"
                    />
                  </HStack>
                  <Text fontFamily="Quicksand_500Medium">Người thu tiền:</Text>
                  <Box maxW="100%">
                    <Select
                      fontFamily="Quicksand_500Medium"
                      selectedValue={service}
                      minWidth="150"
                      accessibilityLabel="Chọn người thu tiền"
                      placeholder="Chọn người thu tiền"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={0}
                      pt={0}
                      onValueChange={(itemValue) => setService(itemValue)}
                    >
                      <Select.Item
                        fontFamily="Quicksand_500Medium"
                        label="Hoàng Văn Nam"
                        value="ux"
                      />
                    </Select>
                  </Box>
                  <Text fontFamily="Quicksand_500Medium">Ngày thu tiền:</Text>
                  <Button
                    title="Chọn ngày"
                    variant="outline"
                    onPress={showDatePicker}
                  >
                    <Text fontFamily="Quicksand_500Medium">
                      {selectedDate
                        ? selectedDate.toLocaleDateString()
                        : "No date selected"}
                    </Text>
                  </Button>
                  <DateTimePickerModal
                    date={selectedDate}
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    locale={"vi-VN"}
                  />
                  <Text fontFamily="Quicksand_500Medium">
                    Hình thức thu tiền:
                  </Text>
                  <Box maxW="100%">
                    <Select
                      fontFamily="Quicksand_500Medium"
                      selectedValue={service}
                      minWidth="150"
                      accessibilityLabel="Chọn hình thức thu tiền"
                      placeholder="Chọn hình thức thu tiền"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={0}
                      pt={0}
                      onValueChange={(itemValue) => setService(itemValue)}
                    >
                      <Select.Item label="Theo hợp đồng" value="ux" />
                    </Select>
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
                  <Icon as={Ionicons} name="pencil-outline" size="sm" />
                }
                onPress={() => console.log("hello world")}
              >
                <Text fontFamily="Quicksand_700Bold" color={"white"}>
                  Ghi lại
                </Text>
              </Button>
              <Button
                leftIcon={<Icon as={Ionicons} name="close" size="sm" />}
                colorScheme="warning"
                onPress={() => console.log("hello world")}
              >
                <Text fontFamily="Quicksand_700Bold" color={"white"}>
                  Đóng
                </Text>
              </Button>
            </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={modalCongno}
        onClose={() => setModalCongNo(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="xl"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Thanh toán công nợ</Modal.Header>

          <Modal.Body>
            <Text fontSize="sm" fontFamily="Quicksand_700Bold">
              Thông tin tài khoản
            </Text>
            <Divider my="2" />
            <Box alignItems="center" w="100%">
              <Box w="90%" maxW="400">
                <VStack space="md">
                  <Text fontFamily="Quicksand_500Medium">Tìm kiếm</Text>
                  <Input placeholder="Tìm theo mã khách hàng, idKH, tên khách hàng, địa chỉ, số điện thoại" />
                  <Text fontFamily="Quicksand_500Medium">Mã KH (*)</Text>
                  <Input placeholder="Nhập mã khách hàng" />

                  <Text fontFamily="Quicksand_500Medium">ID KH</Text>
                  <Input placeholder="Nhập ID khách hàng" />
                  <Text fontFamily="Quicksand_500Medium">Tên KH</Text>
                  <Input placeholder="Nhập tên khách hàng" />
                  <Text fontFamily="Quicksand_500Medium">Địa chỉ</Text>
                  <Input placeholder="Nhập địa chỉ" />
                  <Text fontFamily="Quicksand_500Medium">Tài khoản có</Text>
                  <Input placeholder="Nhập tài khoản có" />
                  <Text fontFamily="Quicksand_500Medium">Tài khoản nợ</Text>
                  <Input placeholder="Nhập tài khoản nợ" />
                  <Text fontFamily="Quicksand_500Medium">Dư nợ hiện tại</Text>
                  <Input placeholder="Nhập dư nợ hiện tại" />
                  <Divider my="2" />
                  <Text fontSize="sm" fontFamily="Quicksand_700Bold">
                    Thông tin công nợ
                  </Text>
                  <Divider my="1" mt={0} pt={0} />
                  <Text fontFamily="Quicksand_500Medium">Loại công nợ (*)</Text>
                  <Box maxW="100%">
                    <Select
                      fontFamily="Quicksand_500Medium"
                      selectedValue={service}
                      minWidth="150"
                      accessibilityLabel="Chọn loại công nợ"
                      placeholder="Chọn loại công nợ"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={0}
                      pt={0}
                      onValueChange={(itemValue) => setService(itemValue)}
                    >
                      <Select.Item label="LNC 1" value="LNC1" />
                    </Select>
                  </Box>
                  <Text fontFamily="Quicksand_500Medium">Số tiền (*)</Text>
                  <Input placeholder="Nhập số tiền" />
                  <Box maxW="100%">
                    <FormControl isRequired isInvalid>
                      <FormControl.Label>Hình thức</FormControl.Label>
                      <Select
                        minWidth="200"
                        accessibilityLabel="Chọn hình thức"
                        placeholder="Chọn hình thức"
                        _selectedItem={{
                          bg: "teal.600",
                          endIcon: <CheckIcon size={5} />,
                        }}
                        mt="1"
                      >
                        <Select.Item label="HT1" value="HT1" />
                      </Select>
                      <FormControl.ErrorMessage
                        leftIcon={<WarningOutlineIcon size="xs" />}
                      >
                        Vui lòng chọn hình thức
                      </FormControl.ErrorMessage>
                    </FormControl>
                  </Box>
                  <Text fontFamily="Quicksand_500Medium">Người nộp</Text>
                  <Input placeholder="Chọn người nộp" />
                  <Text fontFamily="Quicksand_500Medium">Nhập diễn giải</Text>
                  <TextArea
                    fontFamily="Quicksand_500Medium"
                    h={20}
                    placeholder="Nhập ghi chú"
                    w="100%"
                  />
                  <Text fontFamily="Quicksand_500Medium">Ngày lập</Text>
                  <Input placeholder="Chọn ngày lập" />
                  <Text fontFamily="Quicksand_500Medium">Người lập</Text>
                  <Input placeholder="Chọn người lập" />
                </VStack>
              </Box>
            </Box>
          </Modal.Body>
          <Modal.Footer>
            <HStack space={3}>
              <Button
                leftIcon={<Icon as={Ionicons} name="save-outline" size="sm" />}
                onPress={() => console.log("hello world")}
              >
                <Text fontFamily="Quicksand_700Bold" color={"white"}>
                  Lưu
                </Text>
              </Button>
              <Button
                leftIcon={<Icon as={Ionicons} name="close" size="sm" />}
                colorScheme="warning"
                onPress={() => console.log("hello world")}
              >
                <Text fontFamily="Quicksand_700Bold" color={"white"}>
                  Đóng
                </Text>
              </Button>
            </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={modalSohoadon}
        onClose={() => setModalSoHoaDon(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="xl"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Thanh toán theo số hóa đơn</Modal.Header>

          <Modal.Body>
            <Box alignItems="center" w="100%">
              <Box w="90%" maxW="400">
                <VStack space="md">
                  <Text fontFamily="Quicksand_500Medium">Số seri</Text>
                  <Input placeholder="Nhập số seri" />
                  <Text fontFamily="Quicksand_500Medium">Số HĐ</Text>
                  <Input placeholder="Nhập số hóa đơn" />
                  <Divider my="2" />
                  <Text fontSize="sm" fontFamily="Quicksand_700Bold">
                    Thông tin khách hàng
                  </Text>
                  <Divider my="2" />
                  <Text fontFamily="Quicksand_500Medium">Số HĐ</Text>
                  <Input placeholder="Nhập số hóa đơn" />
                  <Text fontFamily="Quicksand_500Medium">Tên KH</Text>
                  <Input placeholder="Nhập tên khách hàng" />
                  <Text fontFamily="Quicksand_500Medium">Địa chỉ</Text>
                  <Input placeholder="Nhập địa chỉ" />
                  <Text fontFamily="Quicksand_500Medium">Hợp đồng</Text>
                  <Input placeholder="Nhập hợp đồng" />
                  <Text fontFamily="Quicksand_500Medium">Tổng tiền</Text>
                  <Input placeholder="Nhập tổng tiền" />
                  <Text fontFamily="Quicksand_500Medium">Bằng chữ</Text>
                  <Input placeholder="Nhập tiền bằng chữ" />
                  <HStack space={3}>
                    <Text fontFamily="Quicksand_500Medium">Đã TT</Text>
                    <Checkbox
                      value="test"
                      accessibilityLabel="This is a dummy checkbox"
                    />
                  </HStack>
                  <Text fontFamily="Quicksand_500Medium">Ngày thu</Text>
                  <Input placeholder="Nhập ngày thu" />
                  <Text fontFamily="Quicksand_500Medium">Người thu</Text>
                  <Box maxW="100%">
                    <Select
                      fontFamily="Quicksand_500Medium"
                      selectedValue={service}
                      minWidth="150"
                      accessibilityLabel="Chọn người thu tiền"
                      placeholder="Chọn người thu tiền"
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />,
                      }}
                      mt={0}
                      pt={0}
                      onValueChange={(itemValue) => setService(itemValue)}
                    >
                      <Select.Item label="NT 1" value="NT1" />
                    </Select>
                  </Box>
                </VStack>
              </Box>
            </Box>
          </Modal.Body>
          <Modal.Footer>
            <HStack space={3}>
              <Button
                leftIcon={
                  <Icon as={Ionicons} name="pencil-outline" size="sm" />
                }
                onPress={() => setModalSoHoaDon(false)}
              >
                <Text fontFamily="Quicksand_700Bold" color={"white"}>
                  Ghi lại
                </Text>
              </Button>
              <Button
                leftIcon={<Icon as={Ionicons} name="close" size="sm" />}
                colorScheme="warning"
                onPress={() => setModalSoHoaDon(false)}
              >
                <Text fontFamily="Quicksand_700Bold" color={"white"}>
                  Đóng
                </Text>
              </Button>
            </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
      <Modal
        isOpen={modalChiSo}
        onClose={() => setModalChiSo(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="xl"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Các chỉ số</Modal.Header>

          <Modal.Body>
            <Box alignItems="center" w="100%">
              <Box w="90%" maxW="400">
                <VStack space="md">
                  <Progress
                    size={"md"}
                    max={1000}
                    colorScheme="primary"
                    value={600}
                  />
                  <Text>600</Text>

                  <Progress
                    size={"md"}
                    max={1000}
                    colorScheme="warning"
                    value={100}
                  />
                  <Text>100</Text>
                  <Progress
                    size={"md"}
                    max={1000}
                    colorScheme="warning"
                    value={300}
                  />
                  <Text>300</Text>
                  <Progress
                    size={"md"}
                    max={1000}
                    colorScheme="warning"
                    value={900}
                  />
                  <Text>900</Text>
                </VStack>
              </Box>
            </Box>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default PaymentScreen;
