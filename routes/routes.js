import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BookIndexScreen from "../screens/auth/BookIndexScreen";
import InputIndexScreen from "../screens/auth/InputIndexScreen";
import LoginScreen from "../screens/auth/LoginScreen";

// Stack Navigator cho mục Home (Feed) và các màn hình con mới

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Feed">
      <Drawer.Screen
        name="Sổ đọc chỉ số"
        component={BookIndexScreen}
        options={{ drawerLabel: "Sổ đọc chỉ số" }}
      />
      <Drawer.Screen
        name="Nhập chỉ số"
        component={InputIndexScreen}
        options={{ drawerLabel: "Nhập chỉ số" }}
      />
      <Drawer.Screen
        name="Đăng xuất"
        component={LoginScreen}
        options={{ drawerLabel: "Đăng xuất" }}
      />
    </Drawer.Navigator>
  );
}
const Routes = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default Routes;
