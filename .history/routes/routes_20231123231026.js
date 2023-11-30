import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectFactoryScreen from "../screens/auth/SelectFactoryScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import BookIndexScreen from "../screens/user/BookIndexScreen";
import InputIndexScreen from "../screens/auth/InputIndexScreen";
import PaymentRecordScreen from "../screens/user/PaymentRecordScreen";
import PaymentRecordListScreen from "../screens/user/PaymentRecordListScreen";
import InvoiceInformationScreen from "../screens/user/InvoiceInformationScreen";
import WriteIndex from "../screens/user/WriteIndex";
import WriteIndexDetail from "../screens/user/WriteIndexDetail";
import PaymentScreen from "../screens/user/PaymentScreen";
import TestTable from "../screens/user/TestTable";
import { Provider, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import {
  Button,
  Center,
  CheckIcon,
  Image,
  Select,
  Text,
  View,
} from "native-base";
import store from "../store/store";
import { logoutUser } from "../store/asyncAction";
import Toast from "react-native-toast-message";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { List } from "react-native-paper";
import * as React from "react";
import { ServiceProvider, useService } from "../ServiceContext";
import InvoiceScreen from "../screens/user/InvoiceScreen";
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import { ApolloClient, ApolloProvider } from "@apollo/client";
import client from "../config/apolloClient";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const name = useSelector((state) => state.auth.name);
  const notification = useSelector((state) => state.auth.noti);
  const nhaMays = useSelector((state) => state.auth.nhaMays);
  const route = useRoute();
  const receivedData = route.params?.dataService;
  const { service, setService } = useService();
  console.log("name here", name);
  console.log("tenNhaMay here", nhaMays);
  console.log("Value", service);

  const navigation = useNavigation();

  const CustomDrawerContent = (props) => {
    const dispatch = useDispatch();
    const handleLogout = () => {
      // Gọi action logout để đăng xuất

      console.log("notification here", notification);
      dispatch(logoutUser());
      navigation.navigate("login");
    };
    const handleServiceChange = (itemValue) => {
      setService(itemValue);
    };

    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <Center borderBottomWidth={1} borderBottomColor="#ccc">
            <Image
              source={{
                uri: "https://www.seekpng.com/png/detail/73-730482_existing-user-default-avatar.png",
              }}
              alt="Alternate Text"
              borderRadius={100}
              size="xl"
            />
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginBottom: 10,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              {name}
            </Text>
            <Select
              mb={5}
              fontFamily="Quicksand_700Bold"
              defaultValue={service}
              selectedValue={service}
              minWidth="200"
              minHeight="45"
              bg="steal.600"
              placeholder={receivedData}
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />,
              }}
              _light={{
                bg: "coolGray.100",
                _hover: {
                  bg: "coolGray.200",
                },
                _focus: {
                  bg: "coolGray.200:alpha.70",
                },
              }}
              _dark={{
                bg: "coolGray.800",
                _hover: {
                  bg: "coolGray.900",
                },
                _focus: {
                  bg: "coolGray.900:alpha.70",
                },
              }}
              mt={1}
              onValueChange={handleServiceChange}
            >
              {nhaMays?.map((item) => (
                <Select.Item
                  key={item.nhaMayId}
                  label={item.tenNhaMay}
                  value={item.nhaMayId}
                  color="green.500"
                />
              ))}
              <Select.Item
                key="Tất cả"
                label="Tất cả"
                value="123456"
                color="green.500"
              />
            </Select>
          </Center>
          <List.Accordion
            fontFamily="Quicksand_500Medium"
            title="Ghi chỉ số & hóa đơn"
            left={(props) => (
              <List.Icon {...props} color="black" icon="pencil" />
            )}
            titleStyle={{ color: "black" }}
          >
            <DrawerItem
              label="Sổ đọc chỉ số"
              fontFamily="Quicksand_500Medium"
              onPress={
                () =>
                  navigation.navigate("Sổ đọc chỉ số", { serviceData: service }) // Truyền giá trị "service" vào params
              }
            />
            <DrawerItem
              label="Hóa đơn"
              fontFamily="Quicksand_500Medium"
              onPress={
                () =>
                  navigation.navigate("Hóa đơn") // Truyền giá trị "service" vào params
              }
            />
          </List.Accordion>
          <List.Accordion
            fontFamily="Quicksand_500Medium"
            title="Thu tiền"
            left={(props) => <List.Icon {...props} color="black" icon="cash" />}
            titleStyle={{ color: "black", paddingTop: 10 }}
          >
            <DrawerItem
              label="Thanh toán"
              fontFamily="Quicksand_500Medium"
              onPress={() => navigation.navigate("Thanh toán")}
            />
          </List.Accordion>

          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View
          style={{ padding: 15, borderTopWidth: 1, borderTopColor: "#ccc" }}
        >
          <TouchableOpacity
            onPress={handleLogout}
            style={{ paddingVertical: 10 }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  marginLeft: 5,
                  fontFamily: "Quicksand_700Bold",
                }}
              >
                Đăng xuất
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <Drawer.Navigator
      initialRouteName="Sổ đọc chỉ số"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
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
        name="Sổ thanh toán"
        component={PaymentRecordScreen}
        options={{ drawerLabel: "Sổ thanh toán" }}
      />
      <Drawer.Screen
        name="Danh sách sổ thanh toán"
        component={PaymentRecordListScreen}
        options={{ drawerLabel: "Danh sách sổ thanh toán" }}
      />
      <Drawer.Screen
        name="Thanh toán"
        component={PaymentScreen}
        options={{ drawerLabel: "Thanh toán" }}
      />
      <Drawer.Screen
        name="Hóa đơn"
        component={InvoiceScreen}
        options={{ drawerLabel: "Hóa đơn" }}
      />
      <Drawer.Screen
        name="TestTable"
        component={TestTable}
        options={{ drawerLabel: "TestTable" }}
      />
    </Drawer.Navigator>
  );
};
const RootNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="login"
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
          <Stack.Screen name="WriteIndex" component={WriteIndex} />
          <Stack.Screen name="WriteIndexDetail" component={WriteIndexDetail} />
          <Stack.Screen
            name="InvoiceInformationScreen"
            component={InvoiceInformationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </>
  );
};

const Routes = () => {
  const [fontsLoaded] = useFonts({
    Quicksand_700Bold,
    Quicksand_500Medium,
  });
  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <ServiceProvider>
          <ApolloProvider client={client}>
            <AutocompleteDropdownContextProvider>
              <RootNavigation />
            </AutocompleteDropdownContextProvider>
          </ApolloProvider>
        </ServiceProvider>
      </Provider>
    );
  }
};
export default Routes;
