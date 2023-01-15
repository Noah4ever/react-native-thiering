import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackBase,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export interface DropdownItem {
  label: string;
  value: string;
}

/**
 * Clean up code
 * Use StyleSheet instead of inline
 *
 */

export default function Dropdown({
  list,
  defaultValue,
  open = false,
  onChange,
  onChangeText,
  containerStyle,
  searchBarStyle,
  textInputStyle,
  placeholder = "Search...",
  placeholderTextColor = "#888",
  iconLeft = <Icon name="search-outline" size={18} color={"#888"} />,
  iconRightClose = <Icon name="close-outline" size={18} color={"#888"} />,
  iconRight = <Icon name="chevron-down" size={18} color={"#888"} />,
}: {
  list: DropdownItem[];
  defaultValue?: string;
  open?: boolean;
  onChange?: any;
  onChangeText?: any;
  containerStyle?: any;
  searchBarStyle?: any;
  textInputStyle?: any;
  placeholder?: string;
  placeholderTextColor?: string;
  iconLeft?: any;
  iconRightClose?: any;
  iconRight?: any;
}) {
  const [dropdownVisible, setDropdowVisible] = useState(open);
  function toggleDropdown() {
    setDropdowVisible(!dropdownVisible);
  }
  const [selected, setSelected] = useState(defaultValue);
  const textInput = useRef<TextInput>(null);
  const [displayList, setDisplayList] = useState(list);

  // Default behavior when use clicks on item in dropdown
  function selectItemDefault(item: DropdownItem) {
    // set selected state to new selected value
    setSelected(item.value);

    // Set text of searchbar to selected value
    textInput.current?.setNativeProps({ text: item.value });

    // Toggle dropdown
    toggleDropdown();
  }

  // Default behavior when text changes in searchbar
  function onChangeTextDefault(text: string) {
    if (onChangeText) {
      onChangeText(text);
    }

    // If dropdown is not visible:
    if (!dropdownVisible) {
      // open dropdown
      setDropdowVisible(true);
    }

    // If searchbar text is empty:
    if (text === "") {
      // show full list
      setDisplayList(list);
      return;
    }

    // Filter display list on searchbar text input
    setDisplayList(() => {
      // filter on whole list
      let filteredList = list;
      return filteredList.filter((item) => {
        // If label includes text
        return item.label.toLowerCase().includes(text.trim().toLowerCase());
      });
    });
  }
  return (
    <View>
      <View
        style={[
          {
            width: 200,
          },
          containerStyle,
        ]}>
        <TouchableOpacity
          onPress={toggleDropdown}
          style={[
            {
              borderWidth: 1,
              borderColor: "#555",
              borderRadius: 8,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 5,
              paddingHorizontal: 8,
              elevation: 4,
            },
            searchBarStyle,
          ]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flex: 1,
              }}>
              {iconLeft}
              <TextInput
                ref={textInput}
                defaultValue={defaultValue}
                style={[
                  {
                    marginLeft: 5,
                  },
                  textInputStyle,
                ]}
                cursorColor={"#555"}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeTextDefault}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                textInput.current?.blur();
                textInput.current?.setNativeProps({ text: selected });
                toggleDropdown();
              }}>
              {dropdownVisible ? iconRightClose : iconRight}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ position: "relative" }}>
        {dropdownVisible ? (
          <View
            style={{
              borderWidth: 1,
              borderColor: "#555",
              borderRadius: 8,
              backgroundColor: "white",
              position: "absolute",
              width: "100%",
              marginTop: 3,
              paddingVertical: 5,
              paddingHorizontal: 8,
              elevation: 4,
            }}>
            {displayList.length > 0 ? (
              displayList.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.value}
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                    onPress={() => {
                      selectItemDefault(item);
                    }}>
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                );
              })
            ) : (
              <Text
                style={{
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                }}>
                Nothing found
              </Text>
            )}
          </View>
        ) : (
          ""
        )}
      </View>
    </View>
  );
}
