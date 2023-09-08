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
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import CameraCustom from "../../components/CameraCustom/CameraCustom";
import ImagePickerCustom from "../../components/ImagePicker/ImagePicker";
import ImagePicker from "../../components/ImagePicker/ImagePicker";

const WriteIndexDetail = ({ navigation }) => {
  const route = useRoute();
  const { itemId, data } = route.params;
  const [showModal, setShowModal] = useState(false);
  const [showModalCamera, setShowModalCamera] = useState(false);

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
  console.log(data);
  const selectedItem = data.find((item) => item.id === itemId);
  console.log(selectedItem);
  console.log(selectedItem.detail.name);

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
        <VStack>
          <Text
            _dark={{
              color: "warmGray.50",
            }}
            color="coolGray.800"
            bold
          >
            {item.detail.name}
          </Text>
          <HStack justifyContent="space-between">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              CS Đầu: {item.detail.csd}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              CS Cuối: {item.detail.csc}
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Số lượng: {item.detail.soluong}
            </Text>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons
                name={"checkmark-circle"}
                color={"green"}
                size={30}
                style={styles.icon}
              />
            </TouchableOpacity>
          </HStack>
          <HStack justifyContent="space-between">
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Cập nhật ngày: {item.detail.ngaycapnhat}
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
      </HStack>
    </Box>
  );

  return (
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
            onPress={() => navigation.navigate("WriteIndex")}
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
          <View>
            <Select
              minHeight={38}
              minWidth="250"
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
        </HStack>
      </View>

      <FlatList h={"85%"} data={data} renderItem={renderItem} />

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
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
      <Modal isOpen={showModalCamera} onClose={() => setShowModalCamera(false)}>
        <Modal.Content width="100%" height="100%">
          <Modal.CloseButton />
          <CameraCustom />
        </Modal.Content>
      </Modal>
    </View>
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
