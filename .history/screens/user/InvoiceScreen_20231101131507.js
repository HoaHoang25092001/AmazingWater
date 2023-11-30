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
import { AddInvoiceModel, BillPaymentModel, EditInvoiceModel } from "../../components/CustomModel";
import CustomButtonExtensions from "../../components/CustomButton/CustomButtonExtensions";
import StateModel from "../../components/CustomModel/StateModel";
import { getAllReadingRoutes } from "../../store/readingRoute/asyncAction"
import { useDispatch, useSelector } from "react-redux";
import * as apis from "../../api"
import { getAllInvoices } from "../../store/invoice/asyncAction";

const InvoiceScreen = () => {
    const [showBillPaymentModel, setShowBillPaymentModel] = useState(false);
    const [showInstallmentPaymentModel, setShowInstallmentPaymentModel] = useState(false);
    const [showAddInvoiceModel, setShowAddInvoiceModel] = useState(false);
    const [showEditInvoiceModel, setShowEditInvoiceModel] = useState(false);
    const [showViewInvoiceModel, setShowViewInvoiceModel] = useState(false);
    const [showSendEmailModel, setShowSendEmailModel] = useState(false);
    const [showSendSmsModel, setShowSendSmsModel] = useState(false);
    const [showState, setShowStateModel] = useState(false);
    const [PageNumber, setPageNumber] = useState(1);
    const [PageSize, setPageSize] = useState(10);

    
    // const fetchReadingRoutes = async () => {
    //     const response = await apis.apiGetReadingRoutes()
    //     console.log(response)
    // }

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllInvoices(1, 10))
    }, [])

    const { invoices } = useSelector(state => state.invoice)
    console.log(invoices)

    const data = [
        {
            id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
            tuyen: "df05bf34-adb5-4feb-b16e-16627613de1b",
            canbo: "3490ef69-e394-4035-bda1-a592a4dea025",
            tenso: "bc7538bb-d873-4a44-b2b5-8b5b21f63f4f",
            chuaghi: "Nguyễn Văn Sơn - Hiền",
            chotso: "Thôn Chùa - Lương Phong - Hiệp Hòa - Bắc Giang",
            trangthai: "288",
            ngaychot: "288",
            hoadon: "0",
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
                <VStack space={4}>
                    <TableList title={title} data={data} renderItem={renderItem} />
                </VStack>
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
                <EditInvoiceModel visible={showEditInvoiceModel} onClose={() => setShowEditInvoiceModel(false)} />
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