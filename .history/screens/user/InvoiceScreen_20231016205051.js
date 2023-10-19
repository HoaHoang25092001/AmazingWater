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
    Popover,
    Button,
    Menu,
    Modal,
    Select,
} from "native-base";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import Pagination from "../../components/Pagination/Pagination";
import AccordionCustom from "../../components/AcordionCustom/AcordionCustom"
import { Ionicons } from '@expo/vector-icons';
import { colors } from "../../constants";
import TableList from "../../components/TableList/TableList";
import CustomButtonInvoice from "../../components/CustomButton/CustomButtonInvoice";
import BillPaymentModel from "../../components/CustomModel/BillPaymentModel";
import AddInvoiceModel from "../../components/CustomModel/AddInvoiceModel";
import CustomButtonExtensions from "../../components/CustomButton/CustomButtonExtensions";
import StateModel from "../../components/CustomModel/StateModel";
import { EditInvoiceModel } from "../../components/CustomModel";
import { getAllReadingRoutes } from "../../store/readingRoute/asyncAction"
import { useDispatch, useSelector } from "react-redux";
import * as apis from "../../api"

const InvoiceScreen = () => {
    const [showBillPaymentModel, setShowBillPaymentModel] = useState(false);
    const [showInstallmentPaymentModel, setShowInstallmentPaymentModel] = useState(false);
    const [showAddInvoiceModel, setShowAddInvoiceModel] = useState(false);
    const [showEditInvoiceModel, setShowEditInvoiceModel] = useState(false);
    const [showViewInvoiceModel, setShowViewInvoiceModel] = useState(false);
    const [showSendEmailModel, setShowSendEmailModel] = useState(false);
    const [showSendSmsModel, setShowSendSmsModel] = useState(false);
    const [showState, setShowStateModel] = useState(false);

    
    // const fetchReadingRoutes = async () => {
    //     const response = await apis.apiGetReadingRoutes()
    //     console.log(response)
    // }


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
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2911232",
            tuyen: "Tuyến 11",
            canbo: "Cán bộ 1",
            tenso: "Tên sổ 1",
            chuaghi: "Chưa ghi 1",
            chotso: "Chốt sổ 1",
            trangthai: "Trạng thái 1",
            ngaychot: "Ngày chốt 1",
            hoadon: "Hóa đơn 1",
        },
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb2211212",
            tuyen: "Tuyến 12",
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
            id: "2",
            name: "Số hợp đồng",
        },
        {
            id: "3",
            name: "Mã ĐH",
        },
        {
            id: "4",
            name: "Tuyến đọc",
        },
        {
            id: "5",
            name: "Tên KH",
        },
        {
            id: "6",
            name: "Địa chỉ",
        },
        {
            id: "7",
            name: "Chỉ số cũ",
        },
        {
            id: "8",
            name: "Chỉ số mới",
        },
        {
            id: "9",
            name: "Tiêu thụ",
        },
        {
            id: "10",
            name: "Mã ĐT giá",
        }
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

    const closePopover = () => {
        setPopoverOpen(false);
    };

    const [fontsLoaded] = useFonts({
        Quicksand_700Bold,
        Quicksand_500Medium,
    });
    if (fontsLoaded) {
        return (
            <View style={styles.container}>

                <Box w="95%" h="70%" alignItems="center">
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
                                        boxShadow: "0px 0px 10px 2px rgba(0, 128, 255, 0.7)", // Sử dụng màu xanh trong boxShadow
                                        backgroundColor: "red",
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
                        <CustomButtonInvoice text={"Tính tiền"} color={colors.white} icon="calculator-outline" onPress={() => { setShowBillPaymentModel(true) }} textColor={colors.orange_400} />
                        <CustomButtonInvoice text={"Tính tiền trả góp"} color={colors.dark} icon="calculator-outline" onPress={() => { setShowAdvanceSearchModel(true) }} textColor={colors.white} />
                        <CustomButtonInvoice text={"Thêm hóa đơn"} color={colors.blue_400} icon="add-circle-outline" onPress={() => { setShowAddInvoiceModel(true) }} textColor={colors.white} />
                        <CustomButtonInvoice text={"Sửa hóa đơn"} color={colors.white} icon="add-circle-outline" onPress={() => { setShowEditInvoiceModel(true) }} textColor={colors.orange_400} />
                        <CustomButtonInvoice text={"Hóa đơn điện tử"} color={colors.white} icon="document-outline" onPress={() => { setShowAdvanceSearchModel(true) }} textColor={colors.lightBlue_300} />
                        <CustomButtonInvoice text={"Xem hóa đơn"} color={colors.white} icon="document-outline" onPress={() => { setShowAdvanceSearchModel(true) }} textColor={colors.orange_400} />
                        <CustomButtonInvoice text={"Gửi tin"} color={colors.blue_700} icon="mail-outline" onPress={() => { setShowAdvanceSearchModel(true) }} textColor={colors.white} />
                        <CustomButtonInvoice text={"Xem TH SD"} color={colors.blue_400} icon="menu-outline" onPress={() => { setShowAdvanceSearchModel(true) }} textColor={colors.white} />
                        <CustomButtonExtensions text={"Tiện ích"} color={colors.blue_700} icon="settings-outline" onPress={() => { setShowAdvanceSearchModel(true) }} textColor={colors.white} />
                        <CustomButtonInvoice text={"Chỉ số"} color={colors.orange_400} icon="bar-chart-outline" onPress={() => { setShowStateModel(true) }} textColor={colors.white} />
                    </Menu>
                </Box>
                {/* Models */}
                <BillPaymentModel visible={showBillPaymentModel} onClose={() => setShowBillPaymentModel(false)} />
                <AddInvoiceModel visible={showAddInvoiceModel} onClose={() => setShowAddInvoiceModel(false)} />
                
                <StateModel visible={showState} onClose={() => setShowStateModel(false)} />
            </View>
        )
    }
}

export default InvoiceScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxContent: {
        width: 120,
        borderBottomWidth: 1,
        backgroundColor: "white",
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
})