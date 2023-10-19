import { View } from "react-native";
import React, { useState } from "react";
import { Box, Center, FlatList, HStack, ScrollView, Text } from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Pagination from "../Pagination";
import { Ionicons } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

const TableList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [service, setService] = React.useState("");
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [boxTitleWidth, setBoxTitleWidth] = useState(300);
  const [checked, setChecked] = React.useState(null);

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
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
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
    <TouchableOpacity
      onPress={() => {
        setChecked(item.id);
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
            {item.chotSo ? (
              <Ionicons name="md-lock-closed-outline" size={20} color="red" />
            ) : (
              <Ionicons name="md-lock-open-outline" size={20} color="blue" />
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
          <Text style={styles.textContent}>{item.soDhdaGhi}</Text>
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
            h={"400"}
            style={{ backgroundColor: "white" }}
            nestedScrollEnabled={true}
          >
            <FlatList
              nestedScrollEnabled={true}
              windowSize={5}
              scrollEnabled={false}
              data={paginatedData}
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
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        service={service}
        setService={setService}
        setItemsPerPage={setItemsPerPage}
      />
    </View>
  );
};

export default TableList;
