import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { color } from "react-native-reanimated";
import { colors } from "../../constants";

const WriteIndex = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const navigator = useNavigation();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Tháng 05/2023 Đoan Bái - Thôn An Hoà Nguyễn Văn Huấn",
      clock: "100",
      record: "0 bản ghi và 0 ảnh cần đồng bộ",
      detail: {
        name: "Ngô Mạnh Hương - Trần Thị Phương HĐ1, HD996, Trầm Lộng - An Hoà - Đoan Bái, Hiệp Hoà - Bắc Giang",
        csd: "1520",
        csc: "1557",
        soluong: "37",
        ngaycapnhat: "ngày 28-05-2023 lúc 10:00",
      },
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad123123a",
      fullName: "Tháng 06/2023 Đoan Bái - Địa chỉ 2",
      clock: "100",
      record: "0 bản ghi và 0 ảnh cần đồng bộ",
      detail: {
        name: "Nguyễn Văn Huy - Nguyễn Thị Huyền HĐ1, HD996, Trầm Lộng - An Hoà - Đoan Bái, Hiệp Hoà - Bắc Giang",
        csd: "1520",
        csc: "1557",
        soluong: "37",
        ngaycapnhat: "ngày 28-05-2023 lúc 10:00",
      },
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3addfs28ba",
      fullName: "Tháng 07/2023 Đoan Bái - Địa chỉ 3",
      clock: "100",
      record: "0 bản ghi và 0 ảnh cần đồng bộ",
      detail: {
        name: "Nguyễn Văn Huy - Nguyễn Thị Huyền HĐ1, HD996, Trầm Lộng - An Hoà - Đoan Bái, Hiệp Hoà - Bắc Giang Nguyễn Văn Huy - Nguyễn Thị Huyền HĐ1, HD996, Trầm Lộng - An Hoà - Đoan Bái, Hiệp Hoà - Bắc Giang",
        csd: "1520",
        csc: "1557",
        soluong: "37",
        ngaycapnhat: "ngày 28-05-2023 lúc 10:00",
      },
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad12dsb28ba",
      fullName: "Tháng 08/2023 Đoan Bái - Địa chỉ 4",
      clock: "100",
      record: "0 bản ghi và 0 ảnh cần đồng bộ",
      detail: {
        name: "Nguyễn Văn Huy - Nguyễn Thị Huyền HĐ1, HD996, Trầm Lộng - An Hoà - Đoan Bái, Hiệp Hoà - Bắc Giang",
        csd: "1520",
        csc: "1557",
        soluong: "37",
        ngaycapnhat: "ngày 28-05-2023 lúc 10:00",
      },
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3a12ecda8ba",
      fullName: "Tháng 09/2023 Đoan Bái - Địa chỉ 5",
      clock: "100",
      record: "0 bản ghi và 0 ảnh cần đồng bộ",
      detail: {
        name: "Nguyễn Văn Huy - Nguyễn Thị Huyền HĐ1, HD996, Trầm Lộng - An Hoà - Đoan Bái, Hiệp Hoà - Bắc Giang",
        csd: "1520",
        csc: "1557",
        soluong: "37",
        ngaycapnhat: "ngày 28-05-2023 lúc 10:00",
      },
    },
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigator.navigate("WriteIndexDetail", { itemId: item.id, data: data })
      }
    >
      <Box
        style={{ borderRadius: 5, shadowOpacity: 0.1 }}
        backgroundColor="white"
        mt={2}
        mb={2}
        mr={4}
        ml={4}
        pl={["5", "4"]}
        pr={["5", "5"]}
        py="2"
      >
        <HStack space={[3, 4]} justifyContent="space-between">
          <VStack>
            <Text
              _dark={{
                color: "warmGray.50",
              }}
              color="coolGray.800"
              bold
            >
              {item.fullName}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Đồng hồ: {item.clock}
            </Text>
            <Text color="green.600">Đồng hồ: {item.record}</Text>
          </VStack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <SafeAreaView>
      <View>
        {/*<Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        locale={"vi-VN"}
  />*/}

        <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              paddingVertical: 8,
              paddingHorizontal: 8,
              marginLeft: 10,
              marginTop: 5,
              marginBottom: 5,
              alignItems: "center",
              borderRadius: 10,
              backgroundColor: colors.blue_400,
            }}
            onPress={() => navigation.navigate("Sổ đọc chỉ số")}
          >
            <View>
              <Ionicons
                name={"arrow-back-circle-outline"}
                size={20}
                style={styles.icon}
              />
            </View>
            <View style={styles.buttonTextContainer}>
              <Text style={styles.buttonText}>Trở về</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          navigation={navigation}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.danger,
  },
  buttonTextContainer: {
    marginLeft: 10,
  },
  buttonText: {
    fontWeight: "500",
    color: "#fff",
    fontSize: 16,
  },
});

export default WriteIndex;
