import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DataTable } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

function InvoiceInformationScreen({ navigation }) {
    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
            }}
        >
            <View style={{
                width: '100%',
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                position: 'relative',
                marginBottom: 4,
            }}>
                <View
                    style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 12,
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity onPress={() => navigation.goBack('PaymentRecordListScreen')}>
                        <Ionicons name="chevron-back-outline" size={26} color="black" />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Thông tin hóa đơn</Text>
                    <Text></Text>
                </View>
                <SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{
                            width: '100%',
                            backgroundColor: '#f8f6e0'
                        }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    marginTop: 10,
                                }}
                            >
                                <Text style={{
                                    marginLeft: 10
                                }}>Tên KH:</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    fontWeight: 'bold'
                                }}>Huỳnh Ngọc Hòa - Phạm Thị Dự</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                    }}
                                >
                                    <Text style={{
                                        marginLeft: 10
                                    }}>Mã KH:</Text>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontWeight: 'bold'
                                    }}>NM_HH_so1003991</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                    }}
                                >
                                    <Text style={{
                                        marginLeft: 10
                                    }}>SĐT:</Text>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontWeight: 'bold',
                                        color: 'blue',
                                        textDecorationLine: 'underline',
                                        textDecorationStyle: 'solid',
                                        textDecorationColor: 'blue'
                                    }}>0834683338</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    marginTop: 10,
                                }}
                            >
                                <Text style={{
                                    marginLeft: 10
                                }}>Địa chỉ:</Text>
                                <Text style={{
                                    marginLeft: 5,
                                    fontWeight: 'bold',
                                }}>Đồng Đanh - Nghĩa Tiến - Đông Lỗ - Hiệp Hòa - Bắc Giangggg.</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                    }}
                                >
                                    <Text style={{
                                        marginLeft: 10
                                    }}>Kỳ hóa đơn:</Text>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontWeight: 'bold'
                                    }}>7/2023</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                    }}
                                >
                                    <Text style={{
                                        marginLeft: 70
                                    }}>Tiêu thụ:</Text>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontWeight: 'bold',
                                    }}>13</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                    }}
                                >
                                    <Text style={{
                                        marginLeft: 10
                                    }}>Chỉ số cũ:</Text>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontWeight: 'bold'
                                    }}>40</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-start',
                                        marginTop: 10,
                                    }}
                                >
                                    <Text style={{
                                        marginLeft: 110
                                    }}>Chỉ số mới:</Text>
                                    <Text style={{
                                        marginLeft: 5,
                                        fontWeight: 'bold',
                                    }}>53</Text>
                                </View>
                            </View>
                        </View>
                        <DataTable>
                            <DataTable.Header style={styles.tableHeader}>
                                <DataTable.Title style={styles.tableHeaderTitle}>Số lượng</DataTable.Title>
                                <DataTable.Title>Đơn giá</DataTable.Title>
                                <DataTable.Title>Thành tiền</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell>10</DataTable.Cell>
                                <DataTable.Cell>6.571,42857</DataTable.Cell>
                                <DataTable.Cell>65.714</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Krishna</DataTable.Cell>
                                <DataTable.Cell>Uttapam</DataTable.Cell>
                                <DataTable.Cell>26</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Vanshika</DataTable.Cell>
                                <DataTable.Cell>Brownie</DataTable.Cell>
                                <DataTable.Cell>20</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Teena</DataTable.Cell>
                                <DataTable.Cell>Pizza</DataTable.Cell>
                                <DataTable.Cell>24</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
}

export default InvoiceInformationScreen

const styles = StyleSheet.create({
    tableHeader: {
      backgroundColor: '#DCDCDC',
    },
    tableHeaderTitle: {
        fontWeight: 'bold',
    }
  });