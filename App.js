import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Dropdown from "./src/components/dropdown/Dropdown";

export default function App() {
  const list = [
    {
      label: "test",
      value: "test",
    },
  ];
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <StatusBar style="auto" />
      <Dropdown list={list} />
    </View>
  );
}
