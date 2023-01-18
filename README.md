
|   |   |   | 
|---|---|---|
| <a href="https://www.npmjs.com/package/react-native-thiering">![NPM WEEKLY DOWNLOADS](https://img.shields.io/npm/dw/react-native-thiering?color=%232CA215&label=WEEKLY%20DOWNLOADS&style=for-the-badge)</a> | <a href="https://github.com/noah4ever/react-native-thiering/stargazers">![GITHUB STAR](https://img.shields.io/github/stars/noah4ever/react-native-thiering?label=Give%20Us%20A%20Star&style=for-the-badge)</a> | <a href="https://www.npmjs.com/package/react-native-thiering">![NPM LIFETIME DOWNLOADS](https://img.shields.io/npm/dt/react-native-thiering?color=%232CA215&style=for-the-badge)</a> | 


<h1 align="center"> 📦 React Native Thiering 📦</h1>
<p align="center">Bundle of useful and beautiful customizable components</p>

# 👉🏻 Dropdown
- [🔍 Preview](#-preview)
- [💾 Installation](#-installation)
- [✍ Usage](#-usage)
  * [💻 Code](#-code)
  * [📋 Types](#-types)
  * [🎯 Properties](#-properties)
  * [🪄 Style](#-style)
## 🔍 Preview
|   |   | 
|---|---|
| ![image](https://user-images.githubusercontent.com/66632359/213036808-c854f6fb-f7fb-49a4-b06f-131050c563e0.png) | ![image](https://user-images.githubusercontent.com/66632359/213036837-bb7cbefb-c99d-45c7-9f3e-de9bd945c959.png) | 
| ![image](https://user-images.githubusercontent.com/66632359/213036957-f58bbefa-b49b-429a-8d1e-a6be49c336c8.png) | ![image](https://user-images.githubusercontent.com/66632359/213037081-b5a0ec0f-05db-4679-8e1a-f2615408211d.png) | 

## 💾 Installation
```sh
npm i react-native-thiering
```
## ✍ Usage
### 💻 Code
Let's build the preview! (You can find the full code below)
#### Import the Dropdown:
```javascript
import { Dropdown } from "react-native-thiering";
```
#### Initialize state for selected item:
```javascript
const [selected, setSelected] = useState({
    label: "Germany",
    value: "germany",
});
```
#### Initialize list for dropdown:
```javascript
const list = [
  {
    label: "Germany",
    value: "germany",
  },
  {
    label: "Italy",
    value: "italy",
  },
  {
    label: "France",
    value: "france",
  },
];
```
#### Use Dropdown element:
```javascript
<Dropdown
  list={list}
  defaultValue={selected.value}
  onChange={setSelected}
/>
```
#### Make it ✨your✨ dropdown:
```javascript
 <Dropdown
   list={list}
   defaultValue={selected.value}
   onChange={setSelected}
   placeholder="Select country"
   containerStyle={{ width: 300 }}
 />
```
### Here is the full code for the preview:
```javascript
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-thiering";

export default function App() {
  const [selected, setSelected] = useState({
    label: "Germany",
    value: "germany",
  });

  const list = [
    {
      label: "Germany",
      value: "germany",
    },
    {
      label: "Italy",
      value: "italy",
    },
    {
      label: "France",
      value: "france",
    },
  ];

  return (
    <View style={styles.container}>
      <Text>Selected: {selected.label}</Text>
      
      <Dropdown
        list={list}
        defaultValue={selected.value}
        onChange={setSelected}
        placeholder="Select country"
        containerStyle={{ width: 300 }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

```

### 📋 Types
| Name | Value | Description |
|---|---|---|
| DropdownItem | `{label: string; value: string;}` | Dropdown item type |

### 🎯 Properties

| Property | Type | Default | Description |
|---|---|---|---|
| list | `DropdownItem[]` | `[]` | List that will be displayed in dropdown |
| defaultValue | `string` | - | Initial value of dropdown |
| open | `boolean` | `false` | Initial state of dropdown (opened/closed) |
| onChange | `(item: DropdownItem) => void` | - | Fires when new value is selected |
| onChangeText | `(text: string) => void` | - | Fires when search input changes |
| placeholder | `string` | `"Search..."` | Placeholder of search input |
| placeholderTextColor | `string` | `"#888"` | Placeholder text color |
| iconLeft | `JSX.Element` | `<Icon name="search-outline" size={18} color={"#888"} />` | Icon left of search input |
| iconRightClose | `JSX.Element` | `<Icon name="chevron-up" size={18} color={"#888"} />` | Icon right of search input when dropdown is open |
| iconRight | `JSX.Element` | `<Icon name="chevron-down" size={18} color={"#888"} />` | Icon right of search input when dropdown is closed |


### 🪄 Style

| Property | Type | Default | Description |
|---|---|---|---|
| containerStyle | `ViewStyle` | - | Style of view container |
| searchBarStyle | `ViewStyle` | - | Style of TouchableOpacity |
| textInputStyle | `TextStyle` | - | Style of search input |
| dropdownStyle | `ViewStyle` | - | Style of dropdown |
| dropdownItemStyle | `ViewStyle` | - | Style of dropdown item |
