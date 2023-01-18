import React from "react";
import { TextInput, TextStyle, ViewStyle } from "react-native";

export interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
  list: DropdownItem[];
  defaultValue?: string;
  open?: boolean;
  onChange?: (item: DropdownItem) => void;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  iconLeft?: JSX.Element;
  iconRightClose?: JSX.Element;
  iconRight?: JSX.Element;
  containerStyle?: ViewStyle;
  searchBarStyle?: ViewStyle;
  textInputStyle?: TextStyle;
  dropdownStyle?: ViewStyle;
  dropdownItemStyle?: ViewStyle;
}

declare class Dropdown extends React.Component<DropdownProps> {}

export { Dropdown };
