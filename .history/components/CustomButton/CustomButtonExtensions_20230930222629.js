import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button, Menu, Popover } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants";

const CustomButtonExtensions = ({ text, onPress, icon, color, textColor }) => {
    return (
        <>
            <Popover trigger={triggerProps => {
                return (
                    <Menu.Item
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            paddingVertical: 8,
                            paddingHorizontal: 8,
                            width: "90%",
                            marginBottom: 5,
                            alignItems: "center",
                            borderRadius: 10,
                            backgroundColor: color,
                            marginLeft: 10,
                            marginRight: 10,
                            borderWidth: 1,
                            borderColor: textColor
                        }}
                        {...triggerProps}
                    >
                        <Ionicons
                            name={icon}
                            size={24}
                            color={textColor}
                            style={styles.icon}
                        />
                        <Text style={{
                            fontWeight: "500",
                            color: textColor,
                            fontSize: 14,
                            fontFamily: "Quicksand_700Bold",
                            maxWidth: "80%",
                        }}>{text}</Text>
                    </Menu.Item>
                )
            }}>
                <Popover.Content accessibilityLabel="Delete Customerd" w="56">
                    <Popover.Arrow />
                    <Popover.CloseButton />
                    <Popover.Header>Delete Customer</Popover.Header>
                    <Popover.Body>
                        This will remove all data relating to Alex. This action cannot be
                        reversed. Deleted data can not be recovered.
                    </Popover.Body>
                    <Popover.Footer justifyContent="flex-end">
                        <Button.Group space={2}>
                            <Button colorScheme="coolGray" variant="ghost">
                                Cancel
                            </Button>
                            <Button colorScheme="danger">Delete</Button>
                        </Button.Group>
                    </Popover.Footer>
                </Popover.Content>
            </Popover>
        </>
    );
};

export default CustomButtonExtensions;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 10,
        width: "100%",
        marginBottom: 15,
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: colors.danger,
    },
    buttonTextContainer: {
        marginLeft: 10,
    },
    buttonText: {
        fontWeight: "500",
        color: colors.danger,
        fontSize: 16,
        fontFamily: "Quicksand_700Bold",
    },
});
