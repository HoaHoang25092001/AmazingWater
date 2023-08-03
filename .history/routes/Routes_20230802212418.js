import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SelectFactoryScreen from "../screens/auth/SelectFactoryScreen";
import LoginScreen from "../screens/auth/LoginScreen";


const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="selectfactory"
                screenOptions={{ headerShown: false }}
            >
            <Stack.Screen name="selectfactory" component={SelectFactoryScreen} />
            <Stack.Screen name="login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;