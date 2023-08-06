import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Center,
  FlatList,
  HStack,
  Icon,
  IconButton,
  Stagger,
  Tooltip,
  useDisclose,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import IconButtonCustom from "./IconButtonCustom";

const StaggerCustom = ({ setModalVisible }) => {
  const { isOpen, onToggle } = useDisclose();
  const [isOpenTooltip, setOpenTooltip] = useState(false);
  const handleTooltip = () => {
    onToggle();
    setOpenTooltip(true);
  };
  const handleModalPicker = () => {
    setModalVisible(true);
    onToggle();
  };

  const icons = [
    {
      id: "1",
      label: "Tạo sổ",
      name: "plus-circle",
      bg: "blue.600",
      type: "MaterialCommunityIcons",
    },
    {
      id: "2",
      label: "Tạo sổ đồng loạt",
      name: "plus-circle-multiple",
      bg: "blue.500",
      type: "MaterialCommunityIcons",
    },
    {
      id: "3",
      label: "Xóa sổ",
      name: "delete",
      type: "MaterialCommunityIcons",
      bg: "red.500",
    },
    {
      id: "4",
      label: "Bỏ khóa",
      name: "vpn-key",
      type: "MaterialIcons",
      bg: "red.500",
    },
    {
      id: "5",
      label: "Xóa biểu mẫu",
      name: "close-circle",
      type: "MaterialCommunityIcons",
      bg: "red.500",
    },
    {
      id: "6",
      label: "Chốt sổ",
      name: "check-circle-outline",
      type: "MaterialCommunityIcons",
      bg: "teal.400",
    },
    {
      id: "7",
      label: "Ngừng ghi chỉ số",
      name: "settings",
      type: "MaterialIcons",
      bg: "indigo.500",
    },
    {
      id: "8",
      label: "Đồng bộ lại",
      name: "edit",
      type: "MaterialIcons",
      bg: "yellow.400",
    },
    {
      id: "9",
      label: "Tiện ích",
      name: "more",
      type: "MaterialCommunityIcons",
      bg: "teal.400",
    },
    {
      id: "10",
      label: "Chỉ số",
      name: "bar-chart",
      type: "MaterialIcons",
      bg: "coolGray.600",
    },
    {
      id: "11",
      label: "Tìm kiếm",
      name: "search",
      bg: "blue.600",
      type: "MaterialIcons",
      handle: handleModalPicker,
    },
  ];

  return (
    <View alignItems="flex-end" position="absolute" left={"85%"}>
      <Box alignItems="center" minH="220">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
        >
          {icons.map((item, index) => (
            <Tooltip
              key={index}
              label={item.label}
              openDelay
              placement={"left"}
              isOpen={isOpen}
              style={styles.TooltipCustom}
            >
              {item.type === "MaterialCommunityIcons" ? (
                <IconButton
                  mb="4"
                  variant="solid"
                  bg={item.bg}
                  colorScheme="red"
                  onPress={item.handle}
                  borderRadius="full"
                  icon={
                    <Icon
                      as={MaterialCommunityIcons}
                      size="6"
                      name={item.name}
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="warmGray.50"
                    />
                  }
                />
              ) : (
                <IconButton
                  mb="4"
                  variant="solid"
                  bg={item.bg}
                  colorScheme="red"
                  borderRadius="full"
                  onPress={item.handle}
                  icon={
                    <Icon
                      as={MaterialIcons}
                      size="6"
                      name={item.name}
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="warmGray.50"
                    />
                  }
                />
              )}
            </Tooltip>
          ))}
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={handleTooltip}
          bg="cyan.400"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="dots-horizontal"
              color="warmGray.50"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
      </HStack>
    </View>
  );
};
const styles = StyleSheet.create({
  TooltipCustom: {
    marginBottom: 100,
    marginRight: 20,
  },
});

export default StaggerCustom;
