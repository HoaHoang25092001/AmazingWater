import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Box, Button, Menu } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const MenuButtonV2 = ({
  setModalVisible,
  setModalCreated,
  setModalCreatedMuti,
  setOverlayVisible,
  navigation,
}) => {
  const handleNavigation = () => {
    navigation.navigate("WriteIndex");
  };
  return (
    <Box w="98%" h="60%" alignItems="flex-end">
      <Menu
        w="200"
        placement="top right"
        borderRadius={25}
        trigger={(triggerProps) => {
          return (
            <Button
              alignSelf="flex-end"
              position={"absolute"}
              style={{
                backgroundColor: "#1677ff",
              }}
              variant="solid"
              h="50"
              w="50"
              {...triggerProps}
              borderRadius={50}
            >
              <Ionicons
                name={"add-outline"}
                size={24}
                style={{ textAlign: "center" }}
                color={"white"}
              />
            </Button>
          );
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.emerald_300,
            marginLeft: 10,
          }}
        >
          <Menu.Item
            style={{
              borderRadius: 10,
            }}
            onPress={() => setModalCreated(true)}
          >
            <Ionicons color={"white"} name="add-circle-outline" size={24} />
            <Text style={styles.buttonMenu}>Tạo sổ</Text>
          </Menu.Item>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.amber_500,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Menu.Item
            style={{
              borderRadius: 10,
            }}
            onPress={() => setModalCreatedMuti(true)}
          >
            <Ionicons color={"white"} name="add-circle-sharp" size={24} />
            <Text style={styles.buttonMenu}>Tạo sổ đồng loạt</Text>
          </Menu.Item>
        </TouchableOpacity>
        <Menu.Item
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 8,
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.blue_700,
            marginLeft: 10,
            marginRight: 10,
          }}
          onPress={handleNavigation}
        >
          <Ionicons color={"white"} name="create-outline" size={24} />
          <Text style={styles.buttonMenu}>Ghi chỉ số</Text>
        </Menu.Item>

        <Menu.Item
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 8,
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.indigo_400,
            marginLeft: 10,
            marginRight: 10,
          }}
          onPress={() => setModalSoHoaDon(true)}
        >
          <Ionicons color={"white"} name="ios-key-outline" size={24} />
          <Text style={styles.buttonMenu}>Bỏ khóa</Text>
        </Menu.Item>
        <TouchableOpacity
          style={{
            flex: 1,
            flexDirection: "row",
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.danger_500,
            marginLeft: 10,
          }}
          onPress={() => console.log("Hello")}
        >
          <Menu.Item>
            <Ionicons color={"white"} name="close-circle-outline" size={24} />
            <Text style={styles.buttonMenu}>Xóa biểu mẫu</Text>
          </Menu.Item>
        </TouchableOpacity>
        <Menu.Item
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 8,
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.emerald_300,
            marginLeft: 10,
            marginRight: 10,
          }}
          onPress={() => console.log("Hello")}
        >
          <Ionicons color={"white"} name="checkmark-circle-outline" size={24} />
          <Text style={styles.buttonMenu}>Chốt sổ</Text>
        </Menu.Item>
        <Menu.Item
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 8,
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.amber_500,
            marginLeft: 10,
            marginRight: 10,
          }}
          onPress={() => console.log("Hello")}
        >
          <Ionicons color={"white"} name="settings-outline" size={24} />
          <Text style={styles.buttonMenu}>Ngừng ghi chỉ số</Text>
        </Menu.Item>
        <Menu.Item
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 8,
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.indigo_400,
            marginLeft: 10,
            marginRight: 10,
          }}
          onPress={() => console.log("Hello")}
        >
          <Ionicons color={"white"} name="pencil-outline" size={24} />
          <Text style={styles.buttonMenu}>Đồng bộ lại</Text>
        </Menu.Item>
        <Menu.Item
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 8,
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.info_500,
            marginLeft: 10,
            marginRight: 10,
          }}
          onPress={() => console.log("Hello")}
        >
          <Ionicons
            color={"white"}
            name="ellipsis-vertical-outline"
            size={24}
          />
          <Text style={styles.buttonMenu}>Tiện ích</Text>
        </Menu.Item>
        <Menu.Item
          style={{
            flex: 1,
            flexDirection: "row",
            paddingVertical: 8,
            paddingHorizontal: 8,
            width: "90%",
            marginBottom: 5,
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: colors.blue_700,
            marginLeft: 10,
            marginRight: 10,
          }}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons color={"white"} name="bar-chart-outline" size={24} />
          <Text style={styles.buttonMenu}>Chỉ số</Text>
        </Menu.Item>
      </Menu>
    </Box>
  );
};

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
  buttonMenu: {
    width: "75%",
    fontFamily: "Quicksand_700Bold",
    color: "white",
  },
});
export default MenuButtonV2;
