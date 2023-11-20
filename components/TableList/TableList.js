import { RefreshControl, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Center,
  FlatList,
  HStack,
  Modal,
  ScrollView,
  Text,
} from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Pagination from "@cherry-soft/react-native-basic-pagination";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, RadioButton } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { fetchSoDocChiSoByNhaMayId } from "../../store/SoDocChiSoTheoNM/action";
import { useService } from "../../ServiceContext";

const TableList = ({
  checked,
  setChecked,
  setCurrentPage,
  currentPage,
  setData,
  data,
  checkedChotSo,
  setCheckedChotSo,
  checkedKhoaSo,
  setCheckedKhoaSo,
}) => {
  const { loading, error } = useSelector((state) => state.soDocChiSo);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [boxTitleWidth, setBoxTitleWidth] = useState(300);
  const [refreshing, setRefreshing] = useState(false);
  const { service, setService } = useService([]);
  const successMessage = useSelector((state) => state.huyChotSo.successMessage);
  const successMessageMoKhoa = useSelector(
    (state) => state.moKhoa.successMessage
  );
  const successMessageKhoaSo = useSelector(
    (state) => state.khoaSo.successMessage
  );
  const dispatch = useDispatch();
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setRefreshing(false);
    setChecked(null);
    setCheckedChotSo(null);
    setCheckedKhoaSo(null);
  });
  useEffect(() => {
    dispatch(
      fetchSoDocChiSoByNhaMayId({
        service,
        currentPage,
      })
    ).then((result) => {
      if (result.payload) {
        console.log("Data returned Table List:", result.payload);
        const data = result.payload;
        setData(data);
      } else {
        console.log("No data returned");
      }
    });
  }, [successMessage, successMessageMoKhoa, successMessageKhoaSo]);

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
  // useEffect(
  //   () => console.log("Item checked:", checked),
  //   console.log("Item Chot So:", checkedChotSo),
  //   console.log("Item Khoa So:", checkedKhoaSo),
  //   [checked]
  // );
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
      maxWidth: 300,
    },
    textTitle: {
      textAlign: "center",
      fontWeight: 600,
      fontSize: 16,
      fontFamily: "Quicksand_700Bold",
    },
    boxContent: {
      width: boxTitleWidth,
      borderBottomWidth: 1,
      backgroundColor: "white",
      minWidth: 60,
    },
    boxContent2: {
      width: 60, // Set width to boxTitleWidth
      borderBottomWidth: 1,
      backgroundColor: "white",
    },
    boxIndex: {
      minWidth: 60, // Set width to boxTitleWidth
      borderBottomWidth: 1,
      backgroundColor: "rgb(250,250,250)",
    },
    boxTitle: {
      minWidth: boxTitleWidth,
      borderBottomWidth: 1,
      backgroundColor: "rgb(250,250,250)",
    },
    emptyContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 150,
    },
    emptyText: {
      marginTop: 8,
    },
  });

  const renderItem = ({ item, index }) => (
    <>
      <TouchableOpacity
        onPress={() => {
          setChecked(item.id);
          setCheckedKhoaSo(item.trangThaiKhoaSo);
          setCheckedChotSo(item.chotSo);
        }}
      >
        <HStack minH={5} key={item.id}>
          <Box
            borderLeftWidth={1}
            style={styles.boxContent2}
            borderColor="muted.200"
          >
            <Center>
              <Text style={styles.textContent}>
                <RadioButton
                  value={item.id}
                  status={checked === item.id ? "checked" : "unchecked"}
                  color="#5898e1"
                />
              </Text>
            </Center>
          </Box>
          <Box
            borderRightWidth={1}
            borderLeftWidth={1}
            style={styles.boxContent2}
            borderColor="muted.200"
            pl={["5", "4"]}
            pr={["5", "5"]}
            py="2"
          >
            <Text style={styles.textContent}>{index + 1}</Text>
          </Box>

          <Box
            borderRightWidth={1}
            style={styles.boxContent2}
            borderColor="muted.200"
            pl={["5", "4"]}
            pr={["5", "5"]}
            py="2"
          >
            <Text style={styles.textContent}>
              {item.trangThaiKhoaSo == 1 ? (
                <Ionicons name="md-lock-open-outline" size={20} color="blue" />
              ) : (
                <Ionicons name="md-lock-closed-outline" size={20} color="red" />
              )}
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
            <Text style={styles.textContent}>{item.soChiSoDongHoChuaGhi}</Text>
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
              {item.chotSo ? (
                <Text style={{ color: "red" }}>Đã chốt</Text>
              ) : (
                <Text style={{ color: "blue" }}>Chưa chốt</Text>
              )}
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
    </>
  );
  return (
    <View>
      <ScrollView horizontal nestedScrollEnabled={true}>
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
              <Text style={styles.textTitle}></Text>
            </Box>
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
            <Box
              borderRightWidth={1}
              borderBottomWidth={1}
              borderColor="muted.200"
              style={[styles.boxIndex]}
              pl={["5", "4"]}
              pr={["5", "5"]}
              py="2"
            >
              <Text style={styles.textTitle}></Text>
            </Box>
            {title.map((item, index) => (
              <Box
                key={index}
                borderRightWidth={1}
                borderBottomWidth={1}
                borderColor="muted.200"
                style={[styles.boxContent]}
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
            h={"350"}
            style={{ backgroundColor: "white" }}
            nestedScrollEnabled={true}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={["#9Bd35A", "#689F38"]}
              />
            }
          >
            <FlatList
              nestedScrollEnabled={true}
              windowSize={5}
              scrollEnabled={false}
              data={data.items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              ListEmptyComponent={() => (
                <View style={styles.emptyContainer}>
                  <Ionicons
                    name="md-information-circle"
                    size={60}
                    color="black"
                  />
                  <Text style={{ fontFamily: "Quicksand_700Bold" }}>
                    Không tìm thấy dữ liệu
                  </Text>
                </View>
              )}
            />
          </ScrollView>
        </Box>
      </ScrollView>
      <Pagination
        totalItems={data.totalCount}
        pageSize={10}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        btnStyle={{
          backgroundColor: "#ccc",
          borderRadius: "5px",
          borderWidth: "0px",
        }}
        textStyle={{ fontFamily: "Quicksand_700Bold" }}
        activeBtnStyle={{ backgroundColor: "gray" }}
      />

      {loading === "pending" && (
        <Modal
          isOpen={true}
          avoidKeyboard
          justifyContent="center"
          bottom="4"
          size="xs"
        >
          <Modal.Content>
            <Modal.Body>
              <ActivityIndicator size="large" animating={true} />
            </Modal.Body>
          </Modal.Content>
        </Modal>
      )}
    </View>
  );
};

export default TableList;
