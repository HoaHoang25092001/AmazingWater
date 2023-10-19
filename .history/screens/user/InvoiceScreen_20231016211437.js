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
import { EditInvoiceModel } from "../../components/CustomModel";
import CustomButtonExtensions from "../../components/CustomButton/CustomButtonExtensions";
import StateModel from "../../components/CustomModel/StateModel";
import { getAllReadingRoutes } from "../../store/readingRoute/asyncAction"
import { useDispatch, useSelector } from "react-redux";
import * as apis from "../../api"

const InvoiceScreen = () => {
    return (
        <View>
        <Text>Hoa</Text>
        </View>
    )
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