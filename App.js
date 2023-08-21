import Routes from "./routes/routes";
import { NativeBaseProvider } from "native-base";
import { SSRProvider } from "@react-aria/ssr";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
