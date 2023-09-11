import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

function PaymentRecordScreen() {
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
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Ionicons name="people-outline" size={24} color="black" />
                                <Text style={styles.titleItem}>Sổ TT Tháng 07/2023 Tuyến Hoàng Đình Tuấn</Text>
                            </View>

                            <Text>Đã thanh toán: 399/498 (khách)</Text>
                            <Text>Số tiền đã thu: 37.000.000/ 47.000.000(Vnđ)</Text>
                            <Text>Ngày tạo sổ: 3/8/2023</Text>
                        </View>
                        <View
                            style={{
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Text>Logo</Text>
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