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
import { canBoDoc, hopDong, soDocChiSo } from "../../store/asyncAction";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

import CreateSoDocModal from "../../components/CustomModel/CreateSoDocModal";
import CreateMutiSoDocModal from "../../components/CustomModel/CreateMutiSoDocModal";
import ChiSoModal from "../../components/CustomModel/ChiSoModal";
import MenuButtonV2 from "../../components/MenuButton/MenuButtonV2";
export default function BookIndexScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalCreated, setModalCreated] = useState(null);
  const [modalCreateMuti, setModalCreatedMuti] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [dataSodoc, setData] = useState([]);
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
  const LOAD_ALL_CAN_BO_DOC = gql`
    query GetUsers($first: Int!, $roleCanBo: String!) {
      GetUsers(
        first: $first
        where: { phongBan: { name: { eq: $roleCanBo } } }
      ) {
        nodes {
          id
          userName
          phongBan {
            id
            name
          }
        }
        totalCount
      }
    }
  `;

  const fetchGraphQLData = () => {
    dispatch(hopDong(GET_HOP_DONGS));
    dispatch(canBoDoc(LOAD_ALL_CAN_BO_DOC));
  };

  useEffect(() => {
    fetchGraphQLData();
  }, [modalCreated]);
  const {
    loading: hopDongsLoading,
    error: hopDongsError,
    data: hopDongsData,
  } = useQuery(GET_HOP_DONGS);
  const {
    loading: canBoDocLoading,
    error: canBoDocError,
    data: canBoDocData,
  } = useQuery(LOAD_ALL_CAN_BO_DOC, {
    variables: {
      first: 10, // Thay đổi giá trị của $first tùy theo nhu cầu
      roleCanBo: "Cán bộ đọc", // Thay đổi giá trị của $roleCanBo tùy theo nhu cầu
    },
  });
  if (hopDongsLoading) {
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
      <MenuButtonV2
        setModalVisible={setModalVisible}
        setModalCreated={setModalCreated}
        setModalCreatedMuti={setModalCreatedMuti}
        setOverlayVisible={setOverlayVisible}
        navigation={navigation}
      />

      {modalCreated != null && (
        <CreateSoDocModal
          modalCreated={modalCreated}
          data={hopDongsData}
          loading={hopDongsLoading}
          error={hopDongsError}
          canBoDocData={canBoDocData}
          canBoDocLoading={canBoDocLoading}
          canBoDocError={canBoDocError}
          setModalCreated={setModalCreated}
          service={service}
        />
      )}
      {modalCreateMuti != null && (
        <CreateMutiSoDocModal
          modalCreateMuti={modalCreateMuti}
          setModalCreatedMuti={setModalCreatedMuti}
          data={hopDongsData}
          loading={hopDongsLoading}
          error={hopDongsError}
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
