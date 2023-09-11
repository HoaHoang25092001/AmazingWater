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
                            <DataTable.Header>
                                <DataTable.Title>Name</DataTable.Title>
                                <DataTable.Title>Email</DataTable.Title>
                                <DataTable.Title numeric>Age</DataTable.Title>
                            </DataTable.Header>

                            <DataTable.Row>
                                <DataTable.Cell>John</DataTable.Cell>
                                <DataTable.Cell>john@kindacode.com</DataTable.Cell>
                                <DataTable.Cell numeric>33</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Bob</DataTable.Cell>
                                <DataTable.Cell>test@test.com</DataTable.Cell>
                                <DataTable.Cell numeric>105</DataTable.Cell>
                            </DataTable.Row>

                            <DataTable.Row>
                                <DataTable.Cell>Mei</DataTable.Cell>
                                <DataTable.Cell>mei@kindacode.com</DataTable.Cell>
                                <DataTable.Cell numeric>23</DataTable.Cell>
                            </DataTable.Row>

                        </DataTable>
                    </ScrollView>
                </SafeAreaView>
            </View>
        </View>
    )
}

export default InvoiceInformationScreen