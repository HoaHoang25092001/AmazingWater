import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Box,
  CheckIcon,
  FlatList,
  HStack,
  ScrollView,
  Select,
} from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Pagination from "../Pagination";

const TableList = ({ title, data }) => {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [service, setService] = React.useState("");
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [boxTitleWidth, setBoxTitleWidth] = useState(300);
  // Hàm xử lý khi người dùng chuyển đổi trang
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
  });

  const renderItem = ({ item, index }) => (
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
            h={"400"}
            style={{ backgroundColor: "white" }}
            nestedScrollEnabled={true}
          >
            <FlatList
              nestedScrollEnabled={true}
              scrollEnabled={false}
              data={paginatedData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
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
