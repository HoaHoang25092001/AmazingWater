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
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { Button, StyleSheet, TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { color } from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../constants";
import { useService } from "../../ServiceContext";
import { fetchSoDocChiSoByNhaMayId } from "../../store/SoDocChiSoTheoNM/action";

const WriteIndex = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const navigator = useNavigation();
  const { service, setService } = useService([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

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

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        navigator.navigate("WriteIndexDetail", { itemId: item.id })
      }
    >
      <Box
        style={{ borderRadius: "5px", shadowOpacity: 0.1 }}
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
            >
              Tên sổ:{" "}
              <Text style={{ fontFamily: "Quicksand_700Bold" }}>
                {item.tenSo}
              </Text>
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Tên tuyến:{" "}
              <Text style={{ fontFamily: "Quicksand_700Bold" }}>
                {item.tenTuyenDoc}
              </Text>
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Cán bộ:{" "}
              <Text style={{ fontFamily: "Quicksand_700Bold" }}>
                {item.nguoiQuanLyId}
              </Text>
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Trạng thái sổ:{" "}
              <Text style={{ fontFamily: "Quicksand_700Bold" }}>
                {item.trangThai == 1 ? "Đang ghi" : "Chưa ghi"}
              </Text>
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Trạng thái khóa sổ:{" "}
              <Text
                style={{
                  color: item.trangThaiKhoaSo == 1 ? "blue" : "red",
                  fontFamily: "Quicksand_700Bold",
                }}
              >
                {item.trangThaiKhoaSo == 1 ? "Chưa khóa" : "Đã khóa"}
              </Text>
            </Text>
            <Text color="green.600">Đồng hồ: {item.tongSoChiSoDongHo}</Text>
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

        {/* <View style={{ alignItems: "flex-start", justifyContent: "center" }}>
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
        </View>*/}

        <FlatList
          h="85%"
          data={data.items}
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
