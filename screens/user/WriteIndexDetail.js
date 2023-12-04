import { Entypo, Feather, Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native"; // Import useRoute
import {
  Box,
  Button,
  Center,
  Checkbox,
  CheckIcon,
  Divider,
  FlatList,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  ScrollView,
  Select,
  Spacer,
  Text,
  useToast,
  View,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import CameraCustom from "../../components/CameraCustom/CameraCustom";
import ImagePickerCustom from "../../components/ImagePicker/ImagePicker";
import ImagePicker from "../../components/ImagePicker/ImagePicker";
import { fetchChiSoDongHoByIdSoDoc } from "../../store/ChiSoDongHo/action";
import moment from "moment";
import { ActivityIndicator } from "react-native-paper";
import Pagination from "../../components/Pagination";

const WriteIndexDetail = ({ navigation }) => {
  const route = useRoute();
  const { itemId } = route.params;
  const [showModal, setShowModal] = useState(false);
  const [showModalCamera, setShowModalCamera] = useState(false);
  const [dataChiSoDongHo, setDataChiSoDongHo] = useState(false);
  const { data, loading } = useSelector((state) => state.chiSoDongHo);

  const instState = [
    {
      title: "123",
    },
    {
      title: "123",
    },
    {
      title: "123",
    },
    {
      title: "123",
    },
  ];
  const [list, setList] = React.useState(instState);
  const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();

  const addItem = (title) => {
    if (title === "") {
      toast.show({
        title: "Please Enter Text",
        status: "warning",
      });
      return;
    }

    setList((prevList) => {
      return [
        ...prevList,
        {
          title: title,
          isCompleted: false,
        },
      ];
    });
  };
  const handleCamera = () => {
    setShowModalCamera(true);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Id Item", itemId);
    dispatch(
      fetchChiSoDongHoByIdSoDoc({
        itemId,
      })
    ).then((result) => {
      if (result.payload) {
        console.log("Data Chi So Dong Ho returned:", result.payload);
        const data = result.payload;
        setDataChiSoDongHo(data);
      } else {
        console.log("No data returned");
      }
    });
  }, [itemId]);

  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderItem = ({ item }) => (
    <Box
      style={{ borderRadius: "5px", shadowOpacity: 0.1 }}
      backgroundColor="white"
      mt={2}
      mb={2}
      mr={4}
      ml={4}
      pl={["5", "4"]}
      pr={["5", "5"]}
      py="2"
    >
      <HStack space={[3, 4]} justifyContent="space-between">
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <VStack>
            <Text
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              bold
            >
              Tên: {item.tenKhachHang} - {item.maKhachHang} - {item.diaChi}
            </Text>
            <HStack justifyContent="space-between">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                CS Đầu Cũ:{item.chiSoDauCu}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                CS Cuối Cũ: {item.chiSoCuoiCu}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                CS Cũ:{item.chiSoCu}
              </Text>
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                CS Mới: {item.chiSoMoi}
              </Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Tiêu thụ: {item.tiLeTangGiamTieuThu}
              </Text>

              {item.tenTrangThai === "Đã ghi" ? (
                <Ionicons
                  name={"checkmark-circle"}
                  color={"green"}
                  size={30}
                  style={styles.icon}
                />
              ) : (
                <Ionicons
                  name={"checkmark-circle"}
                  color={"red"}
                  size={30}
                  style={styles.icon}
                />
              )}
            </HStack>
            <HStack justifyContent="space-between">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
              >
                Cập nhật ngày: {moment(item.ngayDoc).format("DD/MM/YYYY")}
              </Text>
              <TouchableOpacity onPress={() => console.log("Hello")}>
                <Ionicons
                  name={"location-sharp"}
                  color={"orange"}
                  size={30}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </HStack>
          </VStack>
        </TouchableOpacity>
      </HStack>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content minWidth="350" minH="500">
          <Modal.CloseButton />
          <Modal.Header>{item.tenKhachHang}</Modal.Header>
          <Modal.Body>
            <HStack>
              <View>
                <Select
                  minHeight={30}
                  minWidth="50%"
                  backgroundColor={"white"}
                  accessibilityLabel="Selection"
                  placeholder={item.tenTrangThai}
                  _selectedItem={{
                    bg: "teal.300",
                    endIcon: <CheckIcon size="2" />,
                  }}
                  mt={1}
                >
                  <Select.Item label="Đã ghi" value="Đã ghi" />
                  <Select.Item label="Chưa ghi" value="Chưa ghi" />
                </Select>
              </View>
              <Button marginLeft={8} minHeight={5} minWidth={8} padding={0}>
                <Ionicons
                  color={"white"}
                  name={"save-outline"}
                  size={18}
                  style={styles.icon}
                />
              </Button>
            </HStack>
            <Center width={"100%"} marginTop={5}>
              <Box
                borderWidth={1}
                width="90%"
                padding={5}
                borderRadius={10}
                borderColor={"#f0f0f0"}
              >
                <Text textAlign={"center"} fontSize={25} fontWeight={700}>
                  Sinh hoạt ABC
                </Text>
              </Box>
            </Center>
            {/* <Center width={"100%"} marginTop={5}>
              <FlatList
                nestedScrollEnabled={true}
                scrollEnabled={false}
                data={dataTable}
                renderItem={render}
              />
                </Center>*/}
            {list.map((item, itemI) => (
              <HStack h={10} key={item.title + itemI.toString()}>
                <Box
                  borderBottomWidth={2}
                  backgroundColor={"gray.400"}
                  borderColor="muted.200"
                  w={100}
                  py="2"
                >
                  <Text
                    textAlign={"center"}
                    color={"gray.500"}
                    fontSize={20}
                    fontWeight={700}
                  >
                    Tháng {itemI + 1}
                  </Text>
                </Box>
                <Box
                  borderBottomWidth={1}
                  borderColor="muted.200"
                  w={100}
                  pl={["5", "4"]}
                  pr={["5", "5"]}
                  py="2"
                >
                  <Text textAlign={"center"} fontSize={20} fontWeight={700}>
                    {item.title}
                  </Text>
                </Box>
                <Box
                  borderBottomWidth={1}
                  borderColor="muted.200"
                  w={100}
                  pl={["5", "4"]}
                  pr={["5", "5"]}
                  py="2"
                >
                  <Text textAlign={"center"} fontSize={20} fontWeight={700}>
                    {item.title}
                  </Text>
                </Box>
              </HStack>
            ))}
            <Center width={"100%"} marginTop={5}>
              <Box
                borderWidth={1}
                width="90%"
                padding={5}
                borderRadius={10}
                borderColor={"#f0f0f0"}
              >
                <VStack space={4}>
                  <HStack space={2}>
                    <Input
                      flex={1}
                      onChangeText={(v) => setInputValue(v)}
                      value={inputValue}
                      placeholder="Thêm chỉ số"
                      fontWeight={700}
                      fontSize={25}
                      textAlign={"center"}
                    />
                    <IconButton
                      borderRadius="sm"
                      variant="solid"
                      icon={
                        <Icon
                          as={Feather}
                          name="plus"
                          size="sm"
                          color="warmGray.50"
                        />
                      }
                      onPress={() => {
                        addItem(inputValue);
                        setInputValue("");
                      }}
                    />
                  </HStack>
                </VStack>
              </Box>
            </Center>
            <Divider mt={5} mb={5} />
            <Text ml={3} fontSize={20} fontWeight={700}>
              Mục đích sử dụng
            </Text>
            <Input ml={3} mt={5} variant="outline" value={item.mucDichSuDung} />

            <Divider mt={5} mb={5} />
            <Text ml={3} fontSize={20} fontWeight={700}>
              Hình ảnh
            </Text>
            <Center>
              <Button title="Camera" onPress={handleCamera} width={150}>
                Sử dụng camera
              </Button>
            </Center>

            <ImagePickerCustom />

            <Divider mt={5} mb={5} />
            <Text ml={3} fontSize={20} fontWeight={700}>
              Số hiệu đồng hồ
            </Text>
            <Input ml={3} mt={5} variant="outline" isDisabled />
            <Divider mt={5} mb={5} />
            <Text ml={3} fontSize={20} fontWeight={700}>
              Số điện thoại
            </Text>
            <Input ml={3} mt={5} variant="outline" value={item.dienThoai} />
            <Divider mt={5} mb={5} />
            <Text ml={3} fontSize={20} fontWeight={700}>
              Loại đồng hồ
            </Text>
            <Input ml={3} mt={5} variant="outline" isDisabled />
            <Divider mt={5} mb={5} />
            <Text ml={3} fontSize={20} fontWeight={700}>
              Mã vạch
            </Text>
            <Input
              ml={3}
              mt={5}
              variant="outline"
              value={item.maVach}
              isDisabled
            />
            <Divider mt={5} mb={5} />
            <Text ml={3} fontSize={20} fontWeight={700}>
              Ghi chú
            </Text>
            <Input ml={3} mt={5} variant="outline" />
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );

  if (loading === "pending") {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView>
      <View>
        {/*<Button title="Show Date Picker" onPress={showDatePicker} />
    <DateTimePickerModal
      isVisible={isDatePickerVisible}
      mode="date"
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
      locale={"vi-VN"}
/>*/}

        <View style={{ margin: 10 }}>
          <HStack justifyContent="space-between">
            <TouchableOpacity
              style={{
                flexDirection: "row",
                paddingVertical: 8,
                paddingHorizontal: 8,
                marginTop: 5,
                marginBottom: 5,
                alignItems: "center",
                borderRadius: 10,
                backgroundColor: colors.blue_400,
              }}
              onPress={() => navigation.navigate("Trang chủ")}
            >
              <View>
                <Ionicons
                  name={"arrow-back-circle-outline"}
                  size={20}
                  style={styles.icon}
                />
              </View>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>Trở về</Text>
              </View>
            </TouchableOpacity>
          </HStack>
        </View>

        <FlatList h={"80%"} data={paginatedData} renderItem={renderItem} />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setItemsPerPage={setItemsPerPage}
        />

        {/*        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content minWidth="350" minH="500">
            <Modal.CloseButton />
            <Modal.Header>{selectedItem.fullName}</Modal.Header>
            <Modal.Body>
              <HStack>
                <View>
                  <Select
                    minHeight={30}
                    minWidth="50%"
                    backgroundColor={"white"}
                    accessibilityLabel="Selection"
                    placeholder={selectedItem.fullName}
                    _selectedItem={{
                      bg: "teal.300",
                      endIcon: <CheckIcon size="2" />,
                    }}
                    mt={1}
                  >
                    <Select.Item
                      label={selectedItem.fullName}
                      value={selectedItem.fullName}
                    />
                  </Select>
                </View>
                <Button marginLeft={8} minHeight={5} minWidth={8} padding={0}>
                  <Ionicons
                    color={"white"}
                    name={"save-outline"}
                    size={18}
                    style={styles.icon}
                  />
                </Button>
              </HStack>
              <Center width={"100%"} marginTop={5}>
                <Box
                  borderWidth={1}
                  width="90%"
                  padding={5}
                  borderRadius={10}
                  borderColor={"#f0f0f0"}
                >
                  <Text textAlign={"center"} fontSize={25} fontWeight={700}>
                    Sinh hoạt ABC
                  </Text>
                </Box>
              </Center>
              {/* <Center width={"100%"} marginTop={5}>
              <FlatList
                nestedScrollEnabled={true}
                scrollEnabled={false}
                data={dataTable}
                renderItem={render}
              />
                </Center>
              {list.map((item, itemI) => (
                <HStack h={10} key={item.title + itemI.toString()}>
                  <Box
                    borderBottomWidth={2}
                    backgroundColor={"gray.400"}
                    borderColor="muted.200"
                    w={100}
                    py="2"
                  >
                    <Text
                      textAlign={"center"}
                      color={"gray.500"}
                      fontSize={20}
                      fontWeight={700}
                    >
                      Tháng {itemI + 1}
                    </Text>
                  </Box>
                  <Box
                    borderBottomWidth={1}
                    borderColor="muted.200"
                    w={100}
                    pl={["5", "4"]}
                    pr={["5", "5"]}
                    py="2"
                  >
                    <Text textAlign={"center"} fontSize={20} fontWeight={700}>
                      {item.title}
                    </Text>
                  </Box>
                  <Box
                    borderBottomWidth={1}
                    borderColor="muted.200"
                    w={100}
                    pl={["5", "4"]}
                    pr={["5", "5"]}
                    py="2"
                  >
                    <Text textAlign={"center"} fontSize={20} fontWeight={700}>
                      {item.title}
                    </Text>
                  </Box>
                </HStack>
              ))}
              <Center width={"100%"} marginTop={5}>
                <Box
                  borderWidth={1}
                  width="90%"
                  padding={5}
                  borderRadius={10}
                  borderColor={"#f0f0f0"}
                >
                  <VStack space={4}>
                    <HStack space={2}>
                      <Input
                        flex={1}
                        onChangeText={(v) => setInputValue(v)}
                        value={inputValue}
                        placeholder="Thêm chỉ số"
                        fontWeight={700}
                        fontSize={25}
                        textAlign={"center"}
                      />
                      <IconButton
                        borderRadius="sm"
                        variant="solid"
                        icon={
                          <Icon
                            as={Feather}
                            name="plus"
                            size="sm"
                            color="warmGray.50"
                          />
                        }
                        onPress={() => {
                          addItem(inputValue);
                          setInputValue("");
                        }}
                      />
                    </HStack>
                  </VStack>
                </Box>
              </Center>
              <Divider mt={5} mb={5} />
              <Text ml={3} fontSize={20} fontWeight={700}>
                Mục đích sử dụng
              </Text>
              <Input ml={3} mt={5} variant="outline" value="Sinh hoạt ABC" />

              <Divider mt={5} mb={5} />
              <Text ml={3} fontSize={20} fontWeight={700}>
                Hình ảnh
              </Text>
              <Center>
                <Button title="Camera" onPress={handleCamera} width={150}>
                  Sử dụng camera
                </Button>
              </Center>

              <ImagePickerCustom />

              <Divider mt={5} mb={5} />
              <Text ml={3} fontSize={20} fontWeight={700}>
                Số hiệu đồng hồ
              </Text>
              <Input ml={3} mt={5} variant="outline" value="12345" />
              <Divider mt={5} mb={5} />
              <Text ml={3} fontSize={20} fontWeight={700}>
                Số điện thoại
              </Text>
              <Input ml={3} mt={5} variant="outline" />
              <Divider mt={5} mb={5} />
              <Text ml={3} fontSize={20} fontWeight={700}>
                Loại đồng hồ
              </Text>
              <Input ml={3} mt={5} variant="outline" />
              <Divider mt={5} mb={5} />
              <Text ml={3} fontSize={20} fontWeight={700}>
                Mã vạch
              </Text>
              <Input ml={3} mt={5} variant="outline" />
              <Divider mt={5} mb={5} />
              <Text ml={3} fontSize={20} fontWeight={700}>
                Ghi chú
              </Text>
              <Input ml={3} mt={5} variant="outline" />
            </Modal.Body>
          </Modal.Content>
                      </Modal>
                    */}
        <Modal
          isOpen={showModalCamera}
          onClose={() => setShowModalCamera(false)}
        >
          <Modal.Content width="100%" height="100%">
            <Modal.CloseButton />
            <CameraCustom />
          </Modal.Content>
        </Modal>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.danger,
  },
  buttonTextContainer: {
    marginLeft: 10,
  },
  buttonText: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 16,
  },
});

export default WriteIndexDetail;
