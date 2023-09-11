import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
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
                            width: '100%',
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="timer" size={20} color="black" />
                                <Text style={{
                                    marginLeft: 5
                                }}>Chỉ số: 28</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="cash-outline" size={20} color="black" />
                                <Text style={{
                                    marginLeft: 5
                                }}>Tổng tiền: 55.200</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="checkbox-outline" size={20} color="green" />
                                <Text style={{
                                    marginLeft: 5,
                                    color: 'green'
                                }}>Đã thanh toán</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="person" size={20} color="green" />
                                <Text style={{
                                    marginLeft: 5,
                                    fontWeight: 'bold',
                                    color: 'green'
                                }}>Trần Văn Huệ</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="cart" size={20} color="black" />
                                <Text style={{
                                    marginLeft: 5,
                                }}>Sản lượng: 8</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="calendar-outline" size={20} color="black" />
                                <Text style={{
                                    marginLeft: 5,
                                }}>Kỳ HĐ: 07/2023</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="time-outline" size={20} color="green" />
                                <Text style={{
                                    marginLeft: 5,
                                    color: 'green'
                                }}>15/08/2023 15:26</Text>
                            </View>
                            <Text>.</Text>
                        </View>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <FontAwesome name="map-marker" size={26} color="green" />
                        </View>
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
                    <Text style={{ fontSize: 18 }}>{paymentRecord.title}</Text>
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
        marginBottom: 5,
        color: 'green'
    }
})