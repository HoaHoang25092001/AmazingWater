import Routes from "./routes/routes";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
