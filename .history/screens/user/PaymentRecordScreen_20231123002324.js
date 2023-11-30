import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { getAllSoThanhToan } from "../../store/invoice/asyncAction";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


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
    // const getData = () => {
    //     let paymentRecordList = [];
    //     for (let index = 0; index < Items.length; index++) {
    //         // if (Items[index].category == 'product') {
    //         //     productList.push(Items[index]);
    //         // } else if (Items[index].category == 'accessory') {
    //         //     accessoryList.push(Items[index]);
    //         // }
    //         paymentRecordList.push(Items[index]);
    //     }
    //     setPaymentRecords(paymentRecordList);
    // };
    const PaymentRecordCard = ({ data }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('PaymentRecordListScreen', { paymentRecordID: data.id })}
                style={{
                    width: '90%',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    marginVertical: 5,
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 7
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
                        <Ionicons name="people-outline" size={17} color="dimgrey" />
                        <Text style={{
                            marginLeft: 5,
                            color: 'dimgrey',
                            fontFamily: "Quicksand_500Medium",
                        }}>Đã thanh toán:</Text>
                        <Text style={{
                            marginLeft: 5,
                            fontWeight: 'bold',
                            color: 'dimgrey',
                            fontFamily: "Quicksand_700Bold",
                        }}>{data.soLuongHoaDonDaTT}/{data.tongSoLuongHoaDon} (khách)</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name="cash-outline" size={20} color="dimgrey" />
                        <Text style={{
                            marginLeft: 5,
                            color: 'dimgrey',
                            fontFamily: "Quicksand_500Medium",
                        }}>Số tiền đã thu: </Text>
                        <Text style={{
                            marginLeft: 5,
                            fontWeight: 'bold',
                            color: 'dimgrey',
                            fontFamily: "Quicksand_700Bold",
                        }}>{data.tongSoTienDaThu}/{data.tongSoTienHoaDon} (vnđ)</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name="time-outline" size={20} color="dimgrey" />
                        <Text style={{
                            marginLeft: 5,
                            color: 'dimgrey',
                            fontFamily: "Quicksand_500Medium",
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
                    <TouchableOpacity 
                    onPress={() =>
                        navigation.navigate("Hóa đơn")}>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: "flex-start",
                            paddingLeft: 25,
                        }}>
                            <View style={{
                                width: '30%',
                                borderRadius: 5,
                                flexDirection: 'row',
                                backgroundColor: 'white',
                                borderWidth: 1,
                                padding: 5,
                                marginVertical: 10
                            }}>
                                <Ionicons name="return-down-back" size={20} color="black" />
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: '300',
                                    fontFamily: "Quicksand_700Bold",
                                    marginLeft: 5,
                                }}>Trở lại</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        width: '100%',
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: 'center'
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
        fontWeight: '600',
        fontSize: 17,
        fontFamily: "Quicksand_700Bold",
    }
})