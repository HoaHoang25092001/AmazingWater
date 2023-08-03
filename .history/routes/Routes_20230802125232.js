import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SelectFactoryScreen from "../screens/auth/SelectFactoryScreen";


const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="selectfactory"
                screenOptions={{ headerShown: false }}
            >
            <Stack.Screen name="selectfactory" component={SelectFactoryScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes;