import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Center,
  Checkbox,
  CheckIcon,
  CloseIcon,
  FormControl,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Modal,
  Select,
  VStack,
} from "native-base";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { MaterialIcons } from "@expo/vector-icons";
import AccordionCreateSoDoc from "../AcordionCustom/AcordionCreateSoDoc";
import { createNewSoDocApi } from "../../api/user";
import TableCreate from "../TableList/TableCreate";
import moment from "moment";
import Toast from "react-native-toast-message";

const CreateSoDocModal = ({
  modalCreated,
  setModalCreated,
  kyGCSData,
  loading,
  canBoDocData,
  service,
}) => {
  const [selectedTenCanBo, setSelectedTenCanBo] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const [selectedDauKy, setSelectedDauKy] = useState(new Date());
  const [dateDauKy, setDateDauKy] = useState(false);

  const [selectedDateCuoiKy, setSelectedDateCuoiKy] = useState(new Date());
  const [datePickerVisibleCuoiKy, setDatePickerVisibleCuoiKy] = useState(false);

  const [selectedTenSoDoc, setSelectedTenSoDoc] = useState(null);
  const [selectedHopDongId, setSelectedHopDongId] = useState([]);
  const [selectedKyGhiId, setSelectedKyGhiId] = useState(null);
  const [createSoDocData, setCreateSoDocData] = useState();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const canBoDocs = canBoDocData ? canBoDocData.GetUsers.nodes : [];
  const [totalCount, setTotalCount] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [dataHopDong, setDataHopDong] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const handleCreateNewSoDoc = async () => {
    const createSoDocField = {
      nguoiQuanLyId: selectedTenCanBo,
      tenSo: "Tháng 01/2034 luongvantuong",
      hopDongId: selectedHopDongId,
      kyGhiChiSoId: "ed0b09b9d087484fa3a636814d186080",
      ngayDauKy: selectedDauKy,
      thangTaoSoDoc: "01/2034",
      ngayCuoiKy: selectedDateCuoiKy,
      ngayHoaDon: selectedDate,
      nhaMayId: service,
    };
    try {
      const dataCreate = await createNewSoDocApi(createSoDocField);

      console.log("Successfully created", dataCreate);
      if (dataCreate.statusCode === 200) {
        setShowSuccessMessage(true);
        setCreateSoDocData(dataCreate.statusCode);
      }
    } catch (error) {
      // Handle errors here
      if (error.StatusCode === 409) {
        setShowSuccessMessage(true);
        setCreateSoDocData(error.StatusCode);
      }
      console.error("Error:", error);
    }
  };

  return (
    <View>
      <Modal
        isOpen={modalCreated}
        onClose={() => setModalCreated(false)}
        avoidKeyboard
        justifyContent="center"
        bottom="4"
        size="full"
      >
        <Modal.Content>
          <Modal.CloseButton />

          <Modal.Header>Tạo sổ</Modal.Header>

          <Modal.Body>
            {/*} <TableList title={title} data={data} renderItem={renderItem} />*/}
            <VStack space={3}>
              <AccordionCreateSoDoc
                dataHopDong={dataHopDong}
                setDataHopDong={setDataHopDong}
                canBoDocs={canBoDocs}
                service={service}
                setTotalCount={setTotalCount}
                setTotalPages={setTotalPages}
                currentPage={currentPage}
              />
              <TableCreate
                dataHopDong={dataHopDong}
                loading={loading}
                selectedHopDongId={selectedHopDongId}
                setSelectedHopDongId={setSelectedHopDongId}
                totalCount={totalCount}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </VStack>

            <Center>
              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Cán bộ</FormControl.Label>
                <Select
                  selectedValue={selectedTenCanBo}
                  style={{ fontFamily: "Quicksand_500Medium" }}
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
                  {canBoDocs?.map((item) => (
                    <Select.Item
                      key={item.id}
                      label={item.userName}
                      value={item.id}
                    />
                  ))}
                </Select>
              </FormControl>
              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Kỳ ghi chỉ số</FormControl.Label>
                <Select
                  selectedValue={selectedKyGhiId}
                  minWidth="200"
                  style={{ fontFamily: "Quicksand_500Medium" }}
                  accessibilityLabel="Chọn kỳ ghi chỉ số"
                  placeholder="Chọn kỳ ghi chỉ số"
                  _selectedItem={{
                    bg: "teal.600",
                    endIcon: <CheckIcon size="5" />,
                  }}
                  mt={1}
                  onValueChange={(itemValue) => setSelectedKyGhiId(itemValue)}
                >
                  {kyGCSData?.map((item) => (
                    <Select.Item
                      key={item.id}
                      label={item.tenKyGCS}
                      value={item.id}
                    />
                  ))}
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
                  <Text style={{ fontFamily: "Quicksand_500Medium" }}>
                    {moment(selectedDate).format("DD/MM/YYYY")}
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
                  onPress={() => {
                    setDateDauKy(true);
                  }}
                >
                  <Text style={{ fontFamily: "Quicksand_500Medium" }}>
                    {moment(selectedDauKy).format("DD/MM/YYYY")}
                  </Text>
                </Button>
                <DateTimePickerModal
                  date={selectedDauKy}
                  isVisible={dateDauKy}
                  mode="date"
                  onConfirm={(date) => {
                    setDateDauKy(false);
                    setSelectedDauKy(date);
                  }}
                  onCancel={() => {
                    setDateDauKy(false);
                  }}
                  locale="vi-VN"
                />
              </FormControl>
              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Ngày cuối kỳ</FormControl.Label>
                <Button
                  variant="outline"
                  size="xs"
                  colorScheme={"gray"}
                  onPress={() => {
                    setDatePickerVisibleCuoiKy(true);
                  }}
                >
                  <Text style={{ fontFamily: "Quicksand_500Medium" }}>
                    {moment(selectedDateCuoiKy).format("DD/MM/YYYY")}
                  </Text>
                </Button>
                <DateTimePickerModal
                  date={selectedDateCuoiKy}
                  isVisible={datePickerVisibleCuoiKy}
                  mode="date"
                  onConfirm={(date2) => {
                    setDatePickerVisibleCuoiKy(false);
                    setSelectedDateCuoiKy(date2);
                  }}
                  onCancel={() => {
                    setDatePickerVisibleCuoiKy(false);
                  }}
                  locale="vi-VN"
                />
              </FormControl>

              <FormControl w="90%" maxW="300px">
                <FormControl.Label>Tên sổ</FormControl.Label>
                <Input style={{ fontFamily: "Quicksand_500Medium" }} />
              </FormControl>
              <HStack space={2} mt={10}>
                <Checkbox value="one">
                  <Text style={{ fontFamily: "Quicksand_700Bold" }}>
                    Tạo biểu mẫu
                  </Text>
                </Checkbox>
                <Checkbox value="two">
                  <Text style={{ fontFamily: "Quicksand_700Bold" }}>
                    Ghi chỉ số online
                  </Text>
                </Checkbox>
              </HStack>
              <Checkbox mt={3} mb={2} value="three">
                <Text style={{ fontFamily: "Quicksand_700Bold" }}>
                  Không SD kỳ
                </Text>
              </Checkbox>
            </Center>
            <Modal.Footer>
              <VStack flex="1" space={2} alignItems="center">
                <Button
                  variant={"solid"}
                  w={"90%"}
                  style={{ backgroundColor: "#0ce3bc" }}
                  leftIcon={
                    <Icon as={MaterialIcons} name="picture-as-pdf" size="sm" />
                  }
                >
                  Xuất bảng kê
                </Button>
                <Button
                  variant={"solid"}
                  w={"90%"}
                  style={{ backgroundColor: "#5d87ff" }}
                  leftIcon={
                    <Icon as={MaterialIcons} name="add-circle" size="sm" />
                  }
                  onPress={handleCreateNewSoDoc}
                >
                  Tạo sổ và tạo tiếp
                </Button>
                <Button
                  variant={"solid"}
                  w={"90%"}
                  style={{ backgroundColor: "#5d87ff" }}
                  leftIcon={
                    <Icon as={MaterialIcons} name="add-circle" size="sm" />
                  }
                >
                  Tạo sổ và đóng
                </Button>
                <Button
                  colorScheme={"solid"}
                  w={"90%"}
                  style={{ backgroundColor: "#fa896b" }}
                  leftIcon={<Icon as={MaterialIcons} name="close" size="sm" />}
                  onPress={() => {
                    setModalCreatedMuti(false);
                  }}
                >
                  Đóng
                </Button>
              </VStack>
            </Modal.Footer>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default CreateSoDocModal;
