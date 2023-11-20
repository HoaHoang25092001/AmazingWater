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
import {
  kyGhiChiSoAllApi,
  soDocChiSoApi,
  soDocChiSoTheoNMApi,
} from "../../api/user";
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
import { fetchSoDocChiSoByNhaMayId } from "../../store/SoDocChiSoTheoNM/action";
export default function BookIndexScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalCreated, setModalCreated] = useState(null);
  const [modalCreateMuti, setModalCreatedMuti] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);
  const [dataSodoc, setData] = useState([]);
  const [kyGCSData, setKyGCSData] = useState();
  const { service, setService } = useService([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [checked, setChecked] = React.useState(null);
  const [checkedChotSo, setCheckedChotSo] = React.useState();
  const [checkedKhoaSo, setCheckedKhoaSo] = React.useState(null);
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
  const { data, loading, error } = useSelector((state) => state.soDocChiSo);
  const {
    loading: { loadingHuyChotSo },
  } = useSelector((state) => state.huyChotSo);
  useEffect(() => {
    dispatch(
      fetchSoDocChiSoByNhaMayId({
        service,
        currentPage,
      })
    ).then((result) => {
      if (result.payload) {
        console.log("Data returned:", result.payload);
        const data = result.payload;
        setData(data);
      } else {
        console.log("No data returned");
      }
    });
  }, [service, currentPage]);
  // useEffect(() => {
  //   async function fetchData() {
  //     console.log("Fetching data...", service);

  //     try {
  //       let response;
  //       if (service === "123456") {
  //         response = await soDocChiSoApi();
  //       } else {
  //         const filterData = {
  //           nhaMayId: service,
  //           pageNumber: currentPage,
  //         };
  //         response = await soDocChiSoTheoNMApi(filterData);
  //       }
  //       const data = response.data;
  //       setData(data);
  //     } catch (error) {
  //       console.error("Lỗi data API:", error);
  //     }
  //   }

  //   if (service) {
  //     // Gọi fetchData chỉ khi service tồn tại
  //     fetchData();
  //   }
  // }, [service]);
  // useEffect(() => {
  //   async function fetchData() {
  //     console.log("Fetching data...", service);

  //     try {
  //       const filterData = {
  //         nhaMayId: service,
  //         pageNumber: currentPage,
  //       };
  //       const response = await soDocChiSoTheoNMApi(filterData);

  //       const data = response.data;
  //       setData(data);
  //     } catch (error) {
  //       console.error("Lỗi data API:", error);
  //     }
  //   }

  //   if (service) {
  //     // Gọi fetchData chỉ khi service tồn tại
  //     fetchData();
  //   }
  // }, [currentPage]);

  useEffect(() => {
    async function fetchKyGCSData() {
      try {
        const response = await kyGhiChiSoAllApi();
        console.log("Ky GCS API:", response.data);
        const data = response.data;
        setKyGCSData(data);
      } catch (error) {
        console.error("Lỗi Ky GCS API:", error);
        // Xử lý lỗi ở đây nếu cần
      }
    }
    fetchKyGCSData();
  }, [service]);

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
    dispatch(canBoDoc(LOAD_ALL_CAN_BO_DOC));
  };

  useEffect(() => {
    fetchGraphQLData();
  }, [modalCreated]);
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

  return (
    <View>
      <VStack space={3}>
        <AccordionCustom
          setData={setData}
          kyGCSData={kyGCSData}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <TableList
          loading={loading}
          title={title}
          data={dataSodoc}
          checked={checked}
          setData={setData}
          checkedChotSo={checkedChotSo}
          setCheckedChotSo={setCheckedChotSo}
          checkedKhoaSo={checkedKhoaSo}
          setCheckedKhoaSo={setCheckedKhoaSo}
          setChecked={setChecked}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </VStack>
      <MenuButtonV2
        data={dataSodoc}
        checked={checked}
        checkedChotSo={checkedChotSo}
        checkedKhoaSo={checkedKhoaSo}
        setModalVisible={setModalVisible}
        setModalCreated={setModalCreated}
        setModalCreatedMuti={setModalCreatedMuti}
        setOverlayVisible={setOverlayVisible}
        navigation={navigation}
        setData={setData}
      />

      {modalCreated != null && (
        <CreateSoDocModal
          modalCreated={modalCreated}
          canBoDocData={canBoDocData}
          canBoDocLoading={canBoDocLoading}
          canBoDocError={canBoDocError}
          setModalCreated={setModalCreated}
          service={service}
          kyGCSData={kyGCSData}
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
