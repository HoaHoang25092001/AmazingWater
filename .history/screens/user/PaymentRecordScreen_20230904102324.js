import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Items = [
    {
        id: 1,
        title: 'Sổ TT Tháng 07/2023 Tuyến Hoàng Đình Tuấn',
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
function PaymentRecordScreen() {
    //get called on screen loads
    useEffect(() => {
        getData()
    }, []);

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
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <View>
                <Text>Search</Text>
            </View>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row'
                    }}>
                        <View
                            style={{
                                width: '80%',
                                padding: 10
                            }}
                        >
                            <Text style={styles.titleItem}>Sổ TT Tháng 07/2023 Tuyến Hoàng Đình Tuấn</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="people" size={20} color="black" />
                                <Text style={{
                                    marginLeft: 5
                                }}>Đã thanh toán: 399/498 (khách)</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="cash-outline" size={20} color="black" />
                                <Text style={{
                                    marginLeft: 5
                                }}>Số tiền đã thu: 37.000.000/ 47.000.000(Vnđ)</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <Ionicons name="time-outline" size={20} color="black" />
                                <Text style={{
                                    marginLeft: 5
                                }}>Ngày tạo sổ: 3/8/2023</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons name="timer-sharp" size={35} color="green" />
                        </View>
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