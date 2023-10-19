import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
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
import { useDispatch, useSelector } from "react-redux";
import { soDocChiSoApi, soDocChiSoTheoNMApi } from "../../api/user";
import AccordionCustom from "../../components/AcordionCustom/AcordionCustom";
import DateTimeCustom from "../../components/DateTimeCustom/DateTimeCustom";
import Quicksand from "../../components/Fonts/QuickSand";
import MenuButton from "../../components/MenuButton/MenuButton";
import TableCreateMuti from "../../components/TableList/TableCreateMuti";
import TableList from "../../components/TableList/TableList";
import { colors } from "../../constants";
import { useService } from "../../ServiceContext";
import { hopDong, soDocChiSo } from "../../store/asyncAction";
import gql from "graphql-tag";
import TableTest from "./TableTest";
import { useQuery } from "@apollo/client";

import CreateSoDocModal from "../../components/CustomModel/CreateSoDocModal";
import CreateMutiSoDocModal from "../../components/CustomModel/CreateMutiSoDocModal";
import ChiSoModal from "../../components/CustomModel/ChiSoModal";
export default function BookIndexScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showDateModalMuti, setShowDateModalMuti] = useState(false);
  const [valueDate, setValueDate] = React.useState("---Chọn ngày---");
  const [valueDateMuti, setValueDateMuti] = React.useState("---Chọn ngày---");
  const [modalCreated, setModalCreated] = useState(null);
  const [modalCreateMuti, setModalCreatedMuti] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [dataSodoc, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);
  const [hopDongs, setHopDong] = useState([]);
  const { service, setService } = useService();
  const [selectedTenCanBo, setSelectedTenCanBo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
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
          <Text style={styles.textContent}>{item.tenTuyenDoc}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.nguoiQuanLyId}</Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.tenSo}</Text>
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
          <Text style={styles.textContent}>
            {item.chotSo ? "Đã chốt" : "Chưa chốt"}
          </Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>
            {item.trangThai === 1
              ? "Đang ghi"
              : item.trangThai === 2
              ? "Đã ngừng"
              : ""}
          </Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>
            {item.ngayChot
              ? `${item.ngayChot.substring(8, 10)}/${item.ngayChot.substring(
                  5,
                  7
                )}/${item.ngayChot.substring(0, 4)}`
              : ""}
          </Text>
        </Box>
        <Box
          borderRightWidth={1}
          style={styles.boxContent}
          borderColor="muted.200"
          pl={["5", "4"]}
          pr={["5", "5"]}
          py="2"
        >
          <Text style={styles.textContent}>{item.hoaDon}</Text>
        </Box>
      </HStack>
    </TouchableOpacity>
  );
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

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const handleOpenDatePickerModal = () => {
    setShowDatePickerModal(true);
  };
  const dispatch = useDispatch();

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

  if (fontsLoaded) {
    return (
      <View>
        <VStack space={4}>
          <AccordionCustom data={data} setData={setData} />
          <TableList title={title} data={data} renderItem={renderItem}/>
          <MenuButton
            setModalVisible={setModalVisible}
            setModalCreated={setModalCreated}
            setModalCreatedMuti={setModalCreatedMuti}
            setOverlayVisible={setOverlayVisible}
            navigation={navigation}
          />
        </VStack>

  const GET_HOP_DONGS = gql`
    query {
      GetHopDongs(first: 70) {
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
  };

  useEffect(() => {
    fetchGraphQLData();
  }, [modalCreated]);
  const { loading, error, data } = useQuery(GET_HOP_DONGS);
  if (loading) {
    return (
      <Center w="100%">
        <ActivityIndicator size="large" color="#0000ff" />
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

      {modalCreated != null && (
        <CreateSoDocModal
          modalCreated={modalCreated}
          data={data}
          loading={loading}
          error={error}
          setModalCreated={setModalCreated}
        />
      )}
      {modalCreateMuti != null && (
        <CreateMutiSoDocModal
          modalCreateMuti={modalCreateMuti}
          setModalCreatedMuti={setModalCreatedMuti}
        />
      )}
      {modalVisible != null && (
        <ChiSoModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
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
