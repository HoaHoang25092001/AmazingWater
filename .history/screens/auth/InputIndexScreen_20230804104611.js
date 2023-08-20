import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import {
  Box,
  FlatList,
  HStack,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

export default function InputIndexScreen() {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      tuyen: "Tuyến 0",
      canbo: "Cán bộ 0000000000000000000000000000000",
      tenso: "Tên sổ 0",
      chuaghi: "Chưa ghi 0",
      chotso: "Chốt sổ 0",
      trangthai: "Trạng thái 0",
      ngaychot: "Ngày chốt 0",
      hoadon: "Hóa đơn 0",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb21238112",
      tuyen: "Tuyến 2",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb23128112",
      tuyen: "Tuyến 3",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53ab3123b28112",
      tuyen: "Tuyến 4",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-11321",
      tuyen: "Tuyến 5",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-123",
      tuyen: "Tuyến 6",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53ab123b28112",
      tuyen: "Tuyến 7",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28123112",
      tuyen: "Tuyến 8",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb21328112",
      tuyen: "Tuyến 9",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2811232",
      tuyen: "Tuyến 10",
      canbo: "Cán bộ 1",
      tenso: "Tên sổ 1",
      chuaghi: "Chưa ghi 1",
      chotso: "Chốt sổ 1",
      trangthai: "Trạng thái 1",
      ngaychot: "Ngày chốt 1",
      hoadon: "Hóa đơn 1",
    },
  ];
  const title = [
    {
      id: "1",
      name: "#",
    },
    {
      id: "2",
      name: "Tuyến đọc",
    },
    {
      id: "3",
      name: "Số hợp đồng",
    },
    {
      id: "4",
      name: "Sen đồng hồ",
    },
    {
      id: "5",
      name: "Tên khách hàng",
    },
    {
      id: "6",
      name: "Địa chỉ",
    },
    {
      id: "7",
      name: "Tiền thu",
    },
    {
      id: "8",
      name: "Chỉ số cũ",
    },
    {
      id: "9",
      name: "Chỉ só mới",
    },
    {
      id: "10",
      name: "Tiêu thụ",
    },
    {
      id: "11",
      name: "Ngày đọc",
    },
    {
      id: "12",
      name: "Ngày đồng bộ",
    },
    {
      id: "13",
      name: "Trạng thái đọc",
    },
    {
      id: "14",
      name: "Ngày đầu kỳ",
    },
    {
      id: "15",
      name: "Ngày cuối kỳ",
    },
    {
      id: "16",
      name: "Chỉ số cũ",
    },
    {
      id: "17",
      name: "Chỉ số mới",
    },
    {
      id: "18",
      name: "Trạng thái ĐH",
    },
    {
      id: "19",
      name: "Ghi chú",
    },
  ];
  const renderItem = ({ item, index }) => (
    <HStack h={10}>
      <Box
        borderRightWidth={1}
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
  const [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_500Medium,
  });
  if (fontsLoaded) {
    return (
      <View>
        {/* Tiêu đề của bảng */}
        <ScrollView horizontal>
          <Box>
            <ScrollView>
              <HStack
                style={{
                  borderBottomLeftRadius: 5,
                  borderBottomRightRadius: 5,
                }}
              >
                {title.map((item) => (
                  <Box
                    key={item.id}
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
            <ScrollView style={{ height: 400 }}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </ScrollView>
          </Box>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContent: {
    textAlign: "center",
    fontFamily: "Quicksand_500Medium",
  },
  textTitle: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 14,
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
