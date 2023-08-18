import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Checkbox,
  CheckIcon,
  FlatList,
  HStack,
  ScrollView,
  Select,
} from "native-base";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import Pagination from "../Pagination";

const TableCreateMuti = () => {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [service, setService] = React.useState("");

  // Hàm xử lý khi người dùng chuyển đổi trang
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      nhanvien: "Cán bộ 0",
      matuyendoc: "Mã tuyến 0",
      tentuyendoc: "Tên tuyến 0",
      kyghichiso: "Kỳ ghi chỉ số 0",
      datao: "Đã tạo 0",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad5246vba",
      nhanvien: "Cán bộ 1",
      matuyendoc: "Mã tuyến 1",
      tentuyendoc: "Tên tuyến 1",
      kyghichiso: "Kỳ ghi chỉ số 1",
      datao: "Đã tạo 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad434c28ba",
      nhanvien: "Cán bộ 2",
      matuyendoc: "Mã tuyến 2",
      tentuyendoc: "Tên tuyến 2",
      kyghichiso: "Kỳ ghi chỉ số 2",
      datao: "Đã tạo 2",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad534343cba",
      nhanvien: "Cán bộ 3",
      matuyendoc: "Mã tuyến 3",
      tentuyendoc: "Tên tuyến 3",
      kyghichiso: "Kỳ ghi chỉ số 3",
      datao: "Đã tạo 3",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3a1235628ba",
      nhanvien: "Cán bộ 4",
      matuyendoc: "Mã tuyến 4",
      tentuyendoc: "Tên tuyến 4",
      kyghichiso: "Kỳ ghi chỉ số 4",
      datao: "Đã tạo 4",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3a1238ba",
      nhanvien: "Cán bộ 5",
      matuyendoc: "Mã tuyến 5",
      tentuyendoc: "Tên tuyến 5",
      kyghichiso: "Kỳ ghi chỉ số 5",
      datao: "Đã tạo 5",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad5123438ba",
      nhanvien: "Cán bộ 6",
      matuyendoc: "Mã tuyến 6",
      tentuyendoc: "Tên tuyến 6",
      kyghichiso: "Kỳ ghi chỉ số 6",
      datao: "Đã tạo 6",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad5312328ba",
      nhanvien: "Cán bộ 7",
      matuyendoc: "Mã tuyến 7",
      tentuyendoc: "Tên tuyến 7",
      kyghichiso: "Kỳ ghi chỉ số 7",
      datao: "Đã tạo 7",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad43b28ba",
      nhanvien: "Cán bộ 8",
      matuyendoc: "Mã tuyến 8",
      tentuyendoc: "Tên tuyến 8",
      kyghichiso: "Kỳ ghi chỉ số 8",
      datao: "Đã tạo 8",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad32abb28ba",
      nhanvien: "Cán bộ 9",
      matuyendoc: "Mã tuyến 9",
      tentuyendoc: "Tên tuyến 9",
      kyghichiso: "Kỳ ghi chỉ số 9",
      datao: "Đã tạo 9",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad5434128ba",
      nhanvien: "Cán bộ 10",
      matuyendoc: "Mã tuyến 10",
      tentuyendoc: "Tên tuyến 10",
      kyghichiso: "Kỳ ghi chỉ số 10",
      datao: "Đã tạo 10",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-312323ba",
      nhanvien: "Cán bộ 11",
      matuyendoc: "Mã tuyến 11",
      tentuyendoc: "Tên tuyến 11",
      kyghichiso: "Kỳ ghi chỉ số 11",
      datao: "Đã tạo 11",
    },
  ];
  const title = [
    {
      id: "0",
      name: (
        <Checkbox
          id="selectAll"
          onChange={(values) => {
            setIsCheckAll(values);
          }}
          isChecked={isCheckAll}
          accessibilityLabel="select all"
        />
      ),
    },
    {
      id: "1",
      name: "#",
    },
    {
      id: "2",
      name: "Nhân viên",
    },
    {
      id: "3",
      name: "Mã tuyến đọc",
    },
    {
      id: "4",
      name: "Tên tuyến đọc",
    },
    {
      id: "5",
      name: "Kỳ ghi chỉ số",
    },
    {
      id: "6",
      name: "Đã tạo",
    },
  ];
  const [isCheckBox, setIsCheckBox] = useState(false);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("Data", isCheckBox);
  }, [isCheckBox]);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  // Hàm xử lý khi người dùng chuyển đổi trang
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderItem = ({ item, index }) => (
    <HStack h={10} key={index}>
      <Box
        borderRightWidth={1}
        borderLeftWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Checkbox
          accessibilityLabel="select item"
          isChecked={isCheckAll}
          onChange={(values) => {
            setIsCheckAll(values);
          }}
        />
      </Box>

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
        <Text style={styles.textContent}>{item.nhanvien}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.matuyendoc}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.tentuyendoc}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.kyghichiso}</Text>
      </Box>
      <Box
        borderRightWidth={1}
        style={styles.boxContent}
        borderColor="muted.200"
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <Text style={styles.textContent}>{item.datao}</Text>
      </Box>
    </HStack>
  );
  return (
    <View>
      <ScrollView horizontal nestedScrollEnabled={true}>
        <Box>
          <ScrollView>
            <HStack>
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
              nestedScrollEnabled={false}
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

export default TableCreateMuti;
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
    width: 135,
    borderBottomWidth: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  boxTitle: {
    width: 135,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: "rgb(250,250,250)",
    alignItems: "center",
  },
});
