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

const TableList = ({ title, renderItem, data }) => {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [service, setService] = React.useState("");
  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Hàm xử lý khi người dùng chuyển đổi trang
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <View>
      <ScrollView horizontal nestedScrollEnabled={true}>
        <Box>
          <ScrollView>
            <HStack
              style={{
                borderBottomLeftRadius: 5,
                borderBottomRightRadius: 5,
              }}
            >
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
          </ScrollView>
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
    backgroundColor: "rgb(250,250,250)",
  },
});
