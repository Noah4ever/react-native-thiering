import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
  FlatList,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { DropdownProps, DropdownItem } from "../../";

/**
 * Clean up code
 * on textinput submit: search for text value in displaylist and change selected
 */

const Dropdown: React.FC<DropdownProps> = ({
  list = [],
  defaultValue,
  open = false,
  onChange,
  onChangeText,
  containerStyle,
  searchBarStyle,
  textInputStyle,
  dropdownStyle,
  dropdownItemStyle,
  placeholder = "Search...",
  placeholderTextColor = "#888",
  iconLeft = <Icon name="search-outline" size={18} color={"#888"} />,
  iconRightClose = <Icon name="chevron-up" size={18} color={"#888"} />,
  iconRight = <Icon name="chevron-down" size={18} color={"#888"} />,
}) => {
  const [dropdownVisible, setDropdowVisible] = useState(open);
  function toggleDropdown() {
    setDropdowVisible(!dropdownVisible);
  }

  const selected = useRef<DropdownItem>({
    label: list?.find((i) => i.value === defaultValue)?.label ?? "", // find label with defaultValue in list
    value: defaultValue ?? "",
  });
  if (defaultValue) {
    onChange(selected);
  }
  const textInput = useRef<TextInput>(null);
  const [displayList, setDisplayList] = useState(list);

  // Default behavior when use clicks on item in dropdown
  function selectItemDefault(item: DropdownItem) {
    if (onChange) {
      onChange(item);
    }
    // set selected state to new selected value
    selected.current = item;
    // Set text of searchbar to selected value
    textInput.current?.setNativeProps({ text: item.label });
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
          activeOpacity={0.8}
          onPress={toggleDropdown}
          style={[styles.searchBarContainerDefault, searchBarStyle]}>
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
                defaultValue={selected.current.label ?? ""}
                style={[styles.searchBarInputDefault, textInputStyle]}
                cursorColor={"#555"}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeTextDefault}
              />
            </View>
            <TouchableOpacity
              onPress={() => {
                textInput.current?.blur();
                setDisplayList(list);
                toggleDropdown();
              }}>
              {dropdownVisible ? iconRightClose : iconRight}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ position: "relative" }}>
        {dropdownVisible ? (
          <View style={[styles.dropdownContainerDefault, dropdownStyle]}>
            {displayList?.length > 0 ? (
              <FlatList
                data={displayList}
                renderItem={({ item }) => (
                  <TouchableHighlight
                    underlayColor={"#e1e1e1"}
                    key={item.value}
                    style={[
                      styles.dropdownItemDefault,
                      {
                        backgroundColor:
                          item.value === selected.current.value
                            ? "#e1e1e1"
                            : "white",
                      },
                      dropdownItemStyle,
                    ]}
                    onPress={() => {
                      selectItemDefault(item);
                    }}>
                    <Text>{item.label}</Text>
                  </TouchableHighlight>
                )}
                keyExtractor={(item) => item.value}
              />
            ) : (
              <Text style={[styles.dropdownItemDefault]}>Nothing found</Text>
            )}
          </View>
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  searchBarContainerDefault: {
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
  },

  searchBarInputDefault: {
    marginLeft: 5,
  },

  dropdownContainerDefault: {
    zIndex: 1001,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 8,
    backgroundColor: "white",
    position: "absolute",
    width: "100%",
    maxHeight: 200,
    marginTop: 3,
    paddingVertical: 5,
    elevation: 4,
  },

  dropdownItemDefault: {
    paddingHorizontal: 13,
    paddingVertical: 5,
  },
});
