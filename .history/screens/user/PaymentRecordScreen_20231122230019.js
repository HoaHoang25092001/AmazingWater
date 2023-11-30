import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { getAllSoThanhToan } from "../../store/invoice/asyncAction";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Items = [
    {
        id: 1,
        title: 'Sổ TT Tháng 07/2023 Tuyến 8 Hoàng Đình Tuấn',
        paid: '399/498 (khách)',
        moneyReceived: '37.000.000/ 47.000.000(vnđ)',
        dateCreate: '3/8/2023',
        list: [
            {
                id: 1,
                title: '177, NM_HH_so1004003, Phạm Văn Nhuận - Chu Thị Nga, Đồng Đanh - Nghĩa Tiến - Đông Lỗ - Hiệp Hòa - Bắc Giang',
                index: 1210,
                totalCost: 207000,
                quantity: 25,

            }
        ]
    },
    {
        id: 2,
        title: 'Sổ TT Tháng 07/2023 Tuyến 9 Hoàng Đình Tuấn',
        paid: '399/498 (khách)',
        moneyReceived: '37.000.000/ 47.000.000(vnđ)',
        dateCreate: '3/8/2023',
        list: [
            {
                id: 1,
                title: '57, NM-HH',
                index: 1210,
                totalCost: 207000,
                quantity: 25,

            }
        ]
    },
    {
        id: 3,
        title: 'Sổ TT Tháng 07/2023 Tuyến 8 Đoan Bái - Thôn Tân Sơn Nguyễn văn Huấn',
        paid: '399/498 (khách)',
        moneyReceived: '37.000.000/ 47.000.000(vnđ)',
        dateCreate: '3/8/2023',
        list: [
            {
                id: 1,
                title: '57, NM-HH',
                index: 1210,
                totalCost: 207000,
                quantity: 25,

            }
        ]
    },
    {
        id: 4,
        title: 'Sổ TT Tháng 07/2023 Tuyến 11 Nguyễn văn Huấn',
        paid: '399/498 (khách)',
        moneyReceived: '37.000.000/ 47.000.000(vnđ)',
        dateCreate: '3/8/2023',
        list: [
            {
                id: 1,
                title: '57, NM-HH',
                index: 1210,
                totalCost: 207000,
                quantity: 25,

            }
        ]
    },
    {
        id: 5,
        title: 'Sổ TT Tháng 07/2023 Tuyến 12 Nguyễn văn Huấn',
        paid: '399/498 (khách)',
        moneyReceived: '37.000.000/ 47.000.000(vnđ)',
        dateCreate: '3/8/2023',
        list: [
            {
                id: 1,
                title: '57, NM-HH',
                index: 1210,
                totalCost: 207000,
                quantity: 25,

            }
        ]
    },
    {
        id: 6,
        title: 'Sổ TT Tháng 07/2023 Tuyến 4 DL - Phố Tràng Nguyễn văn Huệ',
        paid: '399/498 (khách)',
        moneyReceived: '37.000.000/ 47.000.000(vnđ)',
        dateCreate: '3/8/2023',
        list: [
            {
                id: 1,
                title: '57, NM-HH',
                index: 1210,
                totalCost: 207000,
                quantity: 25,

            }
        ]
    },
    {
        id: 7,
        title: 'Sổ TT Tháng 07/2023 Tuyến Khu Dân Cư Mới Hà Thị Đảm',
        paid: '399/498 (khách)',
        moneyReceived: '37.000.000/ 47.000.000(vnđ)',
        dateCreate: '3/8/2023',
        list: [
            {
                id: 1,
                title: '57, NM-HH',
                index: 1210,
                totalCost: 207000,
                quantity: 25,

            }
        ]
    }
]
function PaymentRecordScreen({ navigation }) {
    const [paymentRecords, setPaymentRecords] = useState([])

    const dispatch = useDispatch()
    const { soThanhToan } = useSelector(state => state.invoice)

    useEffect(() => {
        dispatch(getAllSoThanhToan())
        // dispatch(getAllReadingRoutes())
    }, [])
    //get called on screen loads
    // useEffect(() => {
    //     getData()
    // }, []);

    //get data from DB
    const getData = () => {
        let paymentRecordList = [];
        for (let index = 0; index < Items.length; index++) {
            // if (Items[index].category == 'product') {
            //     productList.push(Items[index]);
            // } else if (Items[index].category == 'accessory') {
            //     accessoryList.push(Items[index]);
            // }
            paymentRecordList.push(Items[index]);
        }
        setPaymentRecords(paymentRecordList);
    };
    const PaymentRecordCard = ({ data }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('PaymentRecordListScreen', { paymentRecordID: data.id })}
                style={{
                    width: '100%',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    marginVertical: 5,
                    paddingHorizontal: 10,
                    marginHorizontal: 5
                }}
            >
                <View
                    style={{
                        width: '80%',
                    }}
                >
                    <Text style={styles.titleItem}>{data.tenSo}</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name="people" size={20} color="dimgrey" />
                        <Text style={{
                            marginLeft: 5,
                            color: 'dimgrey'
                        }}>Đã thanh toán:</Text>
                        <Text style={{
                            marginLeft: 5,
                            fontWeight: 'bold',
                            color: 'dimgrey'
                        }}>{data.soLuongHoaDonDaTT}/{data.tongSoLuongHoaDon}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name="cash-outline" size={20} color="dimgrey" />
                        <Text style={{
                            marginLeft: 5,
                            color: 'dimgrey',
                        }}>Số tiền đã thu: </Text>
                        <Text style={{
                            marginLeft: 5,
                            fontWeight: 'bold',
                            color: 'dimgrey',
                        }}>{data.tongSoTienDaThu}/{data.tongSoTienHoaDon}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name="time-outline" size={20} color="dimgrey" />
                        <Text style={{
                            marginLeft: 5,
                            color: 'dimgrey',
                        }}>Ngày tạo sổ: </Text>
                    </View>
                </View>
                <View
                    style={{
                        width: '20%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                <View
                style={{
                    padding: 10,
                    backgroundColor: 'lightcyan',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                >
                
                <FontAwesome name="dashboard" size={24} color="darkcyan" />
                </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            {/*<View style={{
                width: '100%',
                flexDirection: 'row',
                padding: 8,
                alignItems: 'center',
                backgroundColor: 'white',
            }}>
                <Ionicons name="search" size={25} color="black" />
                <Text style={{
                    marginLeft: 8,
                    color: 'gray',
                }}>Tìm kiếm khách hàng</Text>
            </View>*/}
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'column'
                    }}>
                        {soThanhToan?.map(item => (
                            <PaymentRecordCard data={item} key={item.id} />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default PaymentRecordScreen

const styles = StyleSheet.create({
    titleItem: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})