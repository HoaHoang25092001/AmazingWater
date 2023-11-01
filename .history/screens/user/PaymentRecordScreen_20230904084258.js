import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'

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
                        flexDirection: 'row',
                    }}>
                        <Text>Sổ TT Tháng 07/2023 Tuyến Hoàng Đình Tuấn</Text>
                        <Text>Đã thanh toán: 399/498 (khách)</Text>
                        <Text>Số tiền đã thu: 37.000.000/ 47.000.000(Vnđ)</Text>
                        <Text>Ngày tạo sổ: 3/8/2023</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default PaymentRecordScreen

const styles = StyleSheet.create({

})