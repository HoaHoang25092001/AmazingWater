import React, { useState } from 'react';
import DatePicker from 'react-native-modern-datepicker';
import { getFormatedDate } from 'react-native-modern-datepicker';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Box, CheckIcon, Select, Modal, FormControl, VStack, } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../constants';

const BillPaymentModel = ({ visible, onClose }) => {
    const [service, setService] = useState("");

    return (
        <Modal
            isOpen={visible}
            onClose={onClose}
            avoidKeyboard
            justifyContent="center"
            bottom="4"
            size="xl"
            closeOnOverlayClick={true}
        >
            <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>Tính tiền hóa đơn</Modal.Header>
                <Modal.Body>
                    <Box alignItems="center" w="100%">
                        <Box w="90%" maxW="400">
                            <VStack space="md">
                                <Text fontFamily="Quicksand_500Medium">Cán bộ đọc:</Text>
                                <Box maxW="100%">
                                    <Select
                                        fontFamily="Quicksand_500Medium"
                                        selectedValue=""
                                        minWidth="150"
                                        accessibilityLabel="Chọn cán bộ đọc"
                                        placeholder="Chọn cán bộ đọc"
                                        _selectedItem={{
                                            bg: "teal.600",
                                            endIcon: <CheckIcon size="5" />,
                                        }}
                                        mt={0}
                                        pt={0}
                                        onValueChange={(itemValue) => setService(itemValue)}
                                    >
                                        <Select.Item
                                            fontFamily="Quicksand_500Medium"
                                            label="Hoàng Văn Nam"
                                            value="ux"
                                        />
                                    </Select>
                                </Box>
                            </VStack>
                        </Box>
                    </Box>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}

export default BillPaymentModel;