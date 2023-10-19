import { Box, HStack, ScrollView, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import { View, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import Pagination from "../../components/Pagination";
import AccordionCreateSoDoc from "../../components/AcordionCustom/AcordionCreateSoDoc";
function TableTest({ data, loading }) {
  const [boxTitleWidth, setBoxTitleWidth] = useState(300);
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [service, setService] = React.useState("");
  const hopDongs = data ? data.GetHopDongs.nodes : [];
  const totalPages = Math.ceil(hopDongs.length / itemsPerPage);
  const paginatedData = hopDongs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const [checked, setChecked] = React.useState(false);
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
      width: 300, // Set width to boxTitleWidth
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
  const title = [
    {
      id: "2",
      name: "Số HĐ",
    },
    {
      id: "3",
      name: "Mã HĐ",
    },
    {
      id: "4",
      name: "Tên khách hàng",
    },
    {
      id: "5",
      name: "Địa chỉ",
    },
    {
      id: "6",
      name: "Chỉ số cũ",
    },
  ];

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <AccordionCreateSoDoc />
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
              style={[styles.boxContent]}
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
            {paginatedData.map((hopDong, index) => (
              <TouchableOpacity>
                <HStack minH={5}>
                  <Box
                    borderRightWidth={1}
                    borderLeftWidth={1}
                    style={styles.boxContent2}
                    borderColor="muted.200"
                    pl={["5", "4"]}
                    pr={["5", "5"]}
                    py="2"
                  >
                    <Text style={styles.textContent}>
                      <Checkbox
                        status={checked ? "checked" : "unchecked"}
                        onPress={() => {
                          setChecked(!checked);
                        }}
                      />
                    </Text>
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
                    <Text style={styles.textContent}>{hopDong.keyId}</Text>
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
                    <Text style={styles.textContent}>{hopDong.keyId}</Text>
                  </Box>
                  {hopDong.khachHang && (
                    <Box
                      borderRightWidth={1}
                      borderLeftWidth={1}
                      style={styles.boxContent2}
                      borderColor="muted.200"
                      pl={["5", "4"]}
                      pr={["5", "5"]}
                      py="2"
                    >
                      <Text style={styles.textContent}>
                        {hopDong.khachHang.tenKhachHang}
                      </Text>
                    </Box>
                  )}
                  <Box
                    borderRightWidth={1}
                    borderLeftWidth={1}
                    style={styles.boxContent2}
                    borderColor="muted.200"
                    pl={["5", "4"]}
                    pr={["5", "5"]}
                    py="2"
                  >
                    <Text style={styles.textContent}>{hopDong.diachi}</Text>
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
                    <Text style={styles.textContent}>{hopDong.diachi}</Text>
                  </Box>
                </HStack>
              </TouchableOpacity>
            ))}
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
}

export default TableTest;
