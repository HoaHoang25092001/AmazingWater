import Routes from "./routes/routes";
import { NativeBaseProvider } from "native-base";
import { SSRProvider } from "@react-aria/ssr";
import store from "./store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
