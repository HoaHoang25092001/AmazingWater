import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const AdvanceSearchModel = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View>
        <Text>Modal 2</Text>
        <TouchableOpacity onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default AdvanceSearchModel;