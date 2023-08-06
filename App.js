import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Routes from "./routes/Routes";
import { NativeBaseProvider } from "native-base";
import { SSRProvider } from "@react-aria/ssr";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
