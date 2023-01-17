import React from "react";

export interface DropdownItem {
  label: string;
  value: string;
}

export interface DropdownProps {
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
}

declare class Dropdown extends React.Component<DropdownProps> {}

export { Dropdown };
