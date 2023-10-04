import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Dimensions,
  Text,
  StyleSheet,
} from "react-native";
import {
  Select,
  Box,
  CheckIcon,
  Center,
  NativeBaseProvider,
  FormControl,
  WarningOutlineIcon,
  HStack,
} from "native-base";
import { useSelector } from "react-redux";
import { colors } from "../../constants";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const overlayHeight = height / 5;

const image = {
  uri: "https://nha-may-nuoc-fe.vercel.app/static/media/bia.bc4041acd559e5dfda26.gif",
};

const SelectFactoryScreen = ({ navigation }) => {
  const [service, setService] = useState("");
  const [error, setError] = useState("");
  const nhaMays = useSelector((state) => state.auth.nhaMays);
  const handleService = (itemValue) => {
    setService(itemValue);
    console.log("Service", service);
  };
  const handleNavigate = () => {
    if (service == "") {
      setError("Vui lòng chọn nhà máy");
      console.log("Error", error);
    } else {
      navigation.navigate("mydrawer", { dataService: service });
    }
  };
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{
        width: windowWidth,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Hãy chọn nhà máy</Text>
        <View style={styles.selectFactoryContainer}>
          <Box maxW="300">
            <FormControl w="3/4" maxW="300" isRequired>
              <Select
                fontFamily={"Quicksand_700Bold"}
                selectedValue={service}
                minWidth="200"
                minHeight="45"
                bg="steal.600"
                placeholder="Vui lòng chọn nhà máy"
                _selectedItem={{
                  bg: "teal.600",
                  endIcon: <CheckIcon size="5" />,
                }}
                _light={{
                  bg: "coolGray.100",
                  _hover: {
                    bg: "coolGray.200",
                  },
                  _focus: {
                    bg: "coolGray.200:alpha.70",
                  },
                }}
                _dark={{
                  bg: "coolGray.800",
                  _hover: {
                    bg: "coolGray.900",
                  },
                  _focus: {
                    bg: "coolGray.900:alpha.70",
                  },
                }}
                mt={1}
                onValueChange={handleService}
              >
                {nhaMays?.map((item) => (
                  <Select.Item
                    key={item.nhaMayId}
                    label={item.tenNhaMay}
                    value={item.tenNhaMay}
                    color="green.500"
                    fontFamily={"Quicksand_700Bold"}
                  />
                ))}
              </Select>
            </FormControl>
          </Box>
          <View style={styles.selectFactoryButton}>
            <Text
              onPress={handleNavigate}
              style={styles.selectFactoryButtonText}
            >
              Tiếp tục
            </Text>
          </View>
        </View>
        {error && (
          <HStack space={2}>
            <WarningOutlineIcon size="xs" style={{ color: "red" }} />
            <Text style={{ color: "red", paddingBottom: 5 }}>{error}</Text>
          </HStack>
        )}
      </View>
    </ImageBackground>
  );
};

export default SelectFactoryScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    width: "90%",
    height: overlayHeight,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0000001A",
    borderRadius: 5,
  },
  title: {
    color: "white",
    fontSize: 30,
    fontFamily: "Quicksand_700Bold",
  },
  selectFactoryContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectFactoryButton: {
    height: 47,
    backgroundColor: "#1677ff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    marginLeft: 5,
    marginTop: 4,
  },
  selectFactoryButtonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Quicksand_700Bold",
  },
});
