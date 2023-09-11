import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectFactoryScreen from "../screens/auth/SelectFactoryScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BookIndexScreen from "../screens/user/BookIndexScreen";
import InputIndexScreen from "../screens/auth/InputIndexScreen";
import PaymentRecordScreen from "../screens/user/PaymentRecordScreen";
import PaymentRecordListScreen from "../screens/user/PaymentRecordListScreen";
import InvoiceInformationScreen from "../screens/user/InvoiceInformationScreen";
import WriteIndex from "../screens/user/WriteIndex";
import WriteIndexDetail from "../screens/user/WriteIndexDetail";
import store from "../store";
import { Provider, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Text, View } from "native-base";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const token = useSelector((state) => state.auth.token);
  console.log("Token herer", token);
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Sổ đọc chỉ số">
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
      <Stack.Screen
        name="WriteIndex"
        component={WriteIndex}
        options={{ drawerLabel: "Ghi Chỉ Số" }}
      />

      <Drawer.Screen
        name="WriteIndexDetail"
        component={WriteIndexDetail}
        options={{ drawerLabel: "Ghi Chỉ Số Chi Tiết" }}
      />
      <Drawer.Screen
        name="Sổ thanh toán"
        component={PaymentRecordScreen}
        options={{ drawerLabel: "Sổ thanh toán" }}
      />
      <Drawer.Screen
        name="Đăng xuất"
        component={LoginScreen}
        options={{ drawerLabel: "Đăng xuất" }}
      />
    </Drawer.Navigator>
  );
};
const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="selectfactory"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="selectfactory" component={SelectFactoryScreen} />
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="mydrawer" component={MyDrawer} />
      <Stack.Screen
        name="PaymentRecordListScreen"
        component={PaymentRecordListScreen}
      />
      <Stack.Screen
        name="PaymentRecordScreen"
        component={PaymentRecordScreen}
      />
      <Stack.Screen
        name="InvoiceInformationScreen"
        component={InvoiceInformationScreen}
      />
    </Stack.Navigator>
  );
};

const Routes = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};
export default Routes;
