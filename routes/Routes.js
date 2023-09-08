import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectFactoryScreen from "../screens/auth/SelectFactoryScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BookIndexScreen from "../screens/user/BookIndexScreen";
import InputIndexScreen from "../screens/auth/InputIndexScreen";
import MyComponent from "../screens/user/TestTable";
import WriteIndex from "../screens/user/WriteIndex";
import WriteIndexDetail from "../screens/user/WriteIndexDetail";
import Test from "../screens/user/Test";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
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
      <Stack.Navigator
        initialRouteName="selectfactory"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="selectfactory" component={SelectFactoryScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="mydrawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
