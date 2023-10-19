import React, { useState, useEffect } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, CheckIcon, Select, Modal, FormControl, VStack, HStack, Button, Icon, Text, Input, TextArea, } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { getAllReadingRoutes } from '../../store/readingRoute/asyncAction'
import { getAllInvoiceSerialNumberList } from '../../store/invoiceSerialNumberList/asyncAction'
import { colors } from '../../constants';

const BillPaymentModel = ({ visible, onClose }) => {
    return (
        <View>
        <Text>Hoa</Text>
        </View>
    )
}

export default BillPaymentModel;