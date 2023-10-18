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
import { useRoute } from "@react-navigation/native";
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
  Skeleton,
  Slider,
  Spacer,
  Stack,
  Text,
  Tooltip,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";
import { Toast } from "react-native-toast-message";
import { useDispatch, useSelector } from "react-redux";
import { soDocChiSoApi, soDocChiSoTheoNMApi } from "../../api/user";
import AccordionCustom from "../../components/AcordionCustom/AcordionCustom";
import DateTimeCustom from "../../components/DateTimeCustom/DateTimeCustom";
import Quicksand from "../../components/Fonts/QuickSand";
import MenuButton from "../../components/MenuButton/MenuButton";
import Pagination from "../../components/Pagination";
import StaggerCustom from "../../components/StaggerCustom/StaggerCustom";
import TableCreateMuti from "../../components/TableList/TableCreateMuti";
import TableList from "../../components/TableList/TableList";
import { colors } from "../../constants";
import { useService } from "../../ServiceContext";
import { hopDong, soDocChiSo } from "../../store/asyncAction";
import gql from "graphql-tag";
import TableTest from "./TableTest";
import { useQuery } from "@apollo/client";

export default function BookIndexScreen({ navigation, route }) {
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
  const [dataSodoc, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [hopDongs, setHopDong] = useState([]);
  const { service, setService } = useService();

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

  const handleOpenDatePickerModal = () => {
    setShowDatePickerModal(true);
  };
  const dispatch = useDispatch();
  const renderItem = ({ item, index }) => (
    <HStack h={10} key={item.id}>
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

  const isLoading = useSelector((state) => state.auth.isLoading);
  useEffect(() => {
    async function fetchData() {
      console.log("Fetching data...", service);

      try {
        let response;
        if (service === "123456") {
          response = await soDocChiSoApi();
        } else {
          response = await soDocChiSoTheoNMApi(service);
        }
        console.log("Data API:", response.data);
        const data = response.data;
        setData(data);
      } catch (error) {
        console.error("Lỗi data API:", error);
      }
    }

    if (service) {
      // Gọi fetchData chỉ khi service tồn tại
      fetchData();
    }
  }, [service]);

  const GET_HOP_DONGS = gql`
    query {
      GetHopDongs(first: 100) {
        nodes {
          keyId
          id
          diachi
          khachHang {
            tenKhachHang
          }
          dongHoNuocs {
            chiSoDongHos {
              chiSoCu
            }
          }
        }
      }
    }
  `;

  const fetchGraphQLData = () => {
    dispatch(hopDong(GET_HOP_DONGS));
    console.log("Data ne", data);
  };

  useEffect(() => {
    fetchGraphQLData();
  }, []);
  const { loading, error, data } = useQuery(GET_HOP_DONGS);
  if (loading) {
    return (
      <Center w="100%">
        <HStack
          w="90%"
          maxW="400"
          borderWidth="1"
          space={8}
          rounded="md"
          _dark={{
            borderColor: "coolGray.500",
          }}
          _light={{
            borderColor: "coolGray.200",
          }}
          p="4"
        >
          <Skeleton flex="1" h="150" rounded="md" startColor="coolGray.100" />
          <VStack flex="3" space="4">
            <Skeleton startColor="amber.300" />
            <Skeleton.Text />
            <HStack space="2" alignItems="center">
              <Skeleton size="5" rounded="full" />
              <Skeleton h="3" flex="2" rounded="full" />
              <Skeleton h="3" flex="1" rounded="full" startColor="indigo.300" />
            </HStack>
          </VStack>
        </HStack>
      </Center>
    );
  }
  return (
    <View>
      <VStack space={3}>
        <AccordionCustom setData={setData} />
        <TableList title={title} data={dataSodoc} />
      </VStack>
      <MenuButton
        setModalVisible={setModalVisible}
        setModalCreated={setModalCreated}
        setModalCreatedMuti={setModalCreatedMuti}
        setOverlayVisible={setOverlayVisible}
        navigation={navigation}
      />
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
            {/*} <TableList title={title} data={data} renderItem={renderItem} />*/}
            <TableTest
              title={title}
              data={data}
              loading={loading}
              error={error}
            />
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
