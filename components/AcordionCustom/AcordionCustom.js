import { MaterialIcons } from "@expo/vector-icons";
import {
  Button,
  Center,
  FormControl,
  HStack,
  Icon,
  Input,
  Pressable,
  ScrollView,
  View,
} from "native-base";
import * as React from "react";
import { StyleSheet } from "react-native";
import { DefaultTheme, List } from "react-native-paper";

const AccordionCustom = ({ setShowDatePickerModal, selectedDate }) => {
  const [expanded, setExpanded] = React.useState(true);
  const [value, setValue] = React.useState("");

  const handleChange = () => {
    console.log("handleChange");
  };
  const theme = {
    ...DefaultTheme,
    // Specify custom property
    myOwnProperty: true,
    // Specify custom property in nested object
    colors: {
      myOwnColor: "red",
    },
  };

  return (
    <List.Accordion
      theme={theme}
      style={styles.accordionTitle}
      title="Tìm kiếm"
    >
      <ScrollView
        style={{
          backgroundColor: "white",
        }}
      >
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Chọn tháng</FormControl.Label>
          <Button
            variant="outline"
            size="md"
            colorScheme={"gray"}
            onPress={() => setShowDatePickerModal(true)}
          >
            {selectedDate}
          </Button>
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Cán bộ đọc</FormControl.Label>
          <Input size="md" />
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Tuyến đọc</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Trạng thái</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Khu vực</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Kỳ GSC</FormControl.Label>
          <Input />
        </FormControl>
        <FormControl mt="3" style={styles.formControl}>
          <FormControl.Label>Tên sổ</FormControl.Label>
          <Input />
        </FormControl>
        <Center>
          <HStack mt="3" mb="3" style={{ alignContent: "space-between" }}>
            <Button.Group space={2}>
              <Button
                variant={"outline"}
                leftIcon={<Icon as={MaterialIcons} name="search" size="sm" />}
              >
                Tìm kiếm
              </Button>
              <Button
                variant={"outline"}
                leftIcon={<Icon as={MaterialIcons} name="search" size="sm" />}
              >
                Tìm mới
              </Button>
            </Button.Group>
          </HStack>
        </Center>
      </ScrollView>
    </List.Accordion>
  );
};

export default AccordionCustom;
const styles = StyleSheet.create({
  accordionTitle: {
    backgroundColor: "#cccc",
    height: 55,
  },
  formControl: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
