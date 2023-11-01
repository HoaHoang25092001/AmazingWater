import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

const Items = [
    {
        id: 1,
        title: 'Sổ TT Tháng 07/2023 Tuyến 8 Hoàng Đình Tuấn',
        paid: '399/498 (khách)',
        moneyReceived: '37.000.000/ 47.000.000(Vnđ)',
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
        moneyReceived: '37.000.000/ 47.000.000(Vnđ)',
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
        moneyReceived: '37.000.000/ 47.000.000(Vnđ)',
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
        moneyReceived: '37.000.000/ 47.000.000(Vnđ)',
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
        moneyReceived: '37.000.000/ 47.000.000(Vnđ)',
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
        moneyReceived: '37.000.000/ 47.000.000(Vnđ)',
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
        moneyReceived: '37.000.000/ 47.000.000(Vnđ)',
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
function PaymentRecordListScreen({ route, navigation }) {
    const { paymentRecordID } = route.params;

    const [paymentRecord, setPaymentRecord] = useState({});

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });

        return unsubscribe;
    }, [navigation]);

    const getDataFromDB = async () => {
        for (let index = 0; index < Items.length; index++) {
            if (Items[index].id == paymentRecordID) {
                await setPaymentRecord(Items[index]);
                return;
            }
        }
    };

    const PaymentRecordListCard = ({ data }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('PaymentRecordListScreen', { paymentRecordID: data.id })}
                style={{
                    width: '100%',
                    padding: 10,
                }}
            >
                <View
                    style={{
                        width: '100%',
                    }}
                >
                    <Text style={styles.titleItem}>{data.title}</Text>
                    <View
                        style={{
                            width: '80%',
                            flexDirection: 'row',
                        }}
                    >
                        <View>
                            <Text>Chỉ số:</Text>
                            <Text>Tổng tiền:</Text>
                            <Text>Đã thanh toán</Text>
                            <Text>Trần Văn Huệ</Text>
                        </View>
                        <View>
                            <Text>Sản lượng:</Text>
                            <Text>Kỳ HĐ: </Text>
                            <Text>15/08/2023 15:26</Text>
                        </View>

                    </View>
                    <View
                        style={{
                            width: '80%',
                        }}
                    >
                    <Text>map</Text>
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
                position: 'relative',
            }}
        >
            <StatusBar backgroundColor='#F0F0F3' barStyle='dark-content' />
            <View style={{
                width: '100%',
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 4,
            }}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingTop: 16,
                        paddingLeft: 16,
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack('PaymentRecordScreen')}>
                        <Ionicons name="chevron-back-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18 }}>Details Information</Text>
                    <View></View>
                </View>
            </View>
            <View>
                <Text>Search</Text>
            </View>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'column'
                    }}>
                        {paymentRecord.list?.map(item => (
                            <PaymentRecordListCard data={item} key={item.id} />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default PaymentRecordListScreen

const styles = StyleSheet.create({
    titleItem: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})