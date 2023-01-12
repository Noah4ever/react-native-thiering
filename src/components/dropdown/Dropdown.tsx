import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export interface SidebarItem {
  label: string;
  value: string;
}

export default function Dropdown({
  list,
  defaultValue,
  open = false,
  onChange,
  containerStyle,
  searchBarStyle,
  textInputStyle,
  placeholder = "Search...",
  placeholderTextColor = "#888",
  iconLeft = <Icon name="search-outline" size={18} color={"#888"} />,
  iconRightClose = <Icon name="close-outline" size={18} color={"#888"} />,
  iconRight = <Icon name="chevron-down" size={18} color={"#888"} />,
}: {
  list: [SidebarItem];
  defaultValue?: string;
  open?: boolean;
  onChange?: any;
  containerStyle?: any;
  searchBarStyle?: any;
  textInputStyle?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  iconLeft?: any;
  iconRight?: any;
}) {
  const [dropdownVisible, setDropdowVisible] = useState(open);
  function toggleDropdown() {
    setDropdowVisible(!dropdownVisible);
  }

  return (
    <View>
      <View
        style={[
          {
            width: 200,
          },
          containerStyle,
        ]}
      >
        <View
          style={[
            {
              borderWidth: 1,
              borderColor: "#555",
              borderRadius: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 2,
              paddingHorizontal: 4,
            },
            searchBarStyle,
          ]}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            {iconLeft}
            <TextInput
              style={[
                {
                  marginLeft: 5,
                },
                textInputStyle,
              ]}
              cursorColor={"#555"}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
            />
          </View>
          <TouchableOpacity onPress={toggleDropdown}>
            {dropdownVisible ? iconRightClose : iconRight}
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ position: "absolute" }}>
        {dropdownVisible ? <Text>Open</Text> : ""}
      </View>
    </View>
  );
}
