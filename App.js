import React from "react";
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
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 600,
      }}>
      <StatusBar style="dark" />
      <Dropdown list={list} />
    </View>
  );
}
