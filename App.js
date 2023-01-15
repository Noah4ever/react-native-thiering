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
    {
      label: "test2",
      value: "test2",
    },
  ];
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#23272A",
        height: 891,
      }}>
      <StatusBar style="dark" />
      <Dropdown list={list} />
    </View>
  );
}
