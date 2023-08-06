import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectFactoryScreen from "../screens/auth/SelectFactoryScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BookIndexScreen from "../screens/user/BookIndexScreen";
import InputIndexScreen from "../screens/auth/InputIndexScreen";

const Stack = createNativeStackNavigator();
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
