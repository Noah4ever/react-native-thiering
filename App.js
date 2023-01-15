import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Dropdown from "./src/components/dropdown/Dropdown";

export default function App() {
  const list = [
    {
      label: "Leg raises",
      value: "leg raises",
    },
    {
      label: "Pullups",
      value: "pullups",
    },
    {
      label: "Pushups",
      value: "pushups",
    },
  ];

  const [selected, setSelected] = useState("pullups");

  function updateSelected(item) {
    console.log("updateSelected: ", item);
    setSelected(item);
  }

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#23272A",
        height: 891,
      }}>
      <StatusBar style="dark" />
      <Dropdown list={list} defaultValue={selected} onChange={updateSelected} />
    </View>
  );
}
