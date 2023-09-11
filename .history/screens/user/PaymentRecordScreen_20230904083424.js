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
            <View>Search</View>
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                    }}>
                        <Text>Sổ TT Tháng 07/2023 Tuyến Hoàng Đình Tuấn</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default PaymentRecordScreen
