import React from "react";
import { View, Text } from "react-native";

export interface SidebarItem {
  label: string,
  value: string
}

export default function Dropdown({
  list,
  defaultValue,
  onChange,
  placeholder = "Search...",
  placeholderTextColor = "#777777",
}: {
  list: [SidebarItem],
  defaultValue?: string,
  onChange?: Function,
  placeholder?: string;
  placeholderTextColor?: string;
}) {
  return <View>
    {list.map((item) => {
      return <Text key={item.value}>{item.label}</Text>
    })}
  </View>;
}
