import React, { useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

function PaymentRecordListScreen({ navigation }) {
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
                                <Text style={styles.titleItem}>Hoa</Text>
                            </View>
                        </TouchableOpacity>
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