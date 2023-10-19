import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  Button,
  Center,
  Checkbox,
  CheckIcon,
  FormControl,
  HStack,
  Icon,
  Input,
  Modal,
  Select,
} from "native-base";
import TableTest from "../../screens/user/TableTest";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";

const CreateSoDocModal = ({
  modalCreated,
  setModalCreated,
  data,
  loading,
}) => {
  const [selectedTenCanBo, setSelectedTenCanBo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  return (
    <View>
      <Modal
        isOpen={modalCreated}
        onClose={() => setModalCreated(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="xl"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Tạo sổ</Modal.Header>

          <Modal.Body>
            {/*} <TableList title={title} data={data} renderItem={renderItem} />*/}
            <TableTest data={data} loading={loading}/>
            <Center>
              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Cán bộ</FormControl.Label>
                <Select
                  selectedValue={selectedTenCanBo}
                  minWidth="200"
                  accessibilityLabel="Chọn cán bộ"
                  placeholder="Chọn cán bộ"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setSelectedTenCanBo(itemValue)}
                >
                  <Select.Item key={"1"} label="luongvantuong" value="1" />
                </Select>
              </FormControl>
              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Kỳ ghi chỉ số</FormControl.Label>
                <Select
                  selectedValue={selectedTenCanBo}
                  minWidth="200"
                  accessibilityLabel="Chọn kỳ ghi chỉ số"
                  placeholder="Chọn kỳ ghi chỉ số"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setSelectedTenCanBo(itemValue)}
                >
                  <Select.Item key={"1"} label="luongvantuong" value="1" />
                </Select>
              </FormControl>
              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Ngày hóa đơn</FormControl.Label>
                <Button
                  variant="outline"
                  size="xs"
                  colorScheme={"gray"}
                  onPress={() => {
                    setDatePickerVisible(true);
                  }}
                >
                  <Text fontFamily="Quicksand_500Medium">
                    {selectedDate
                      ? selectedDate.toLocaleDateString()
                      : "No date selected"}
                  </Text>
                </Button>
                <DateTimePickerModal
                  date={selectedDate}
                  isVisible={datePickerVisible}
                  mode="date"
                  onConfirm={(date) => {
                    setDatePickerVisible(false);
                    setSelectedDate(date);
                  }}
                  onCancel={() => {
                    setDatePickerVisible(false);
                  }}
                  locale="vi-VN"
                />
              </FormControl>
              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Ngày đầu kỳ</FormControl.Label>
                <Button
                  variant="outline"
                  size="xs"
                  colorScheme={"gray"}
                  onPress={() => setShowDateModal(true)}
                ></Button>
              </FormControl>
              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Ngày cuối kỳ</FormControl.Label>
                <Button
                  variant="outline"
                  size="xs"
                  colorScheme={"gray"}
                  onPress={() => setShowDateModal(true)}
                ></Button>
              </FormControl>
              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Tên sổ</FormControl.Label>
                <Input />
              </FormControl>
              <HStack space={2} mt={10}>
                <Checkbox value="one">Tạo biểu mẫu</Checkbox>
                <Checkbox value="two">Ghi chỉ số online</Checkbox>
              </HStack>
              <Checkbox mt={3} mb={2} value="three">
                Không SD kỳ
              </Checkbox>
            </Center>
            <Modal.Footer>
              <Button.Group space={2}>
                <Button
                  colorScheme="primary"
                  leftIcon={
                    <Icon as={MaterialIcons} name="add-circle" size="sm" />
                  }
                >
                  Tạo sổ đồng loạt
                </Button>
                <Button
                  colorScheme={"warning"}
                  onPress={() => {
                    setModalCreated(false);
                  }}
                >
                  Đóng
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default CreateSoDocModal;
