import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { List, ListItem } from "native-base";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";
import { _Styles } from "../../../Style/Home/Drawer";
export class Pages extends Component {
  render() {
    return (
      <List>
        <ListItem onPress={() => Actions.Favourite()} style={_Styles.ListItem}>
          <AntDesign name="star" color="gray" size={20} />
          <Text style={_Styles.ListItemText}>Favourite</Text>
        </ListItem>

        <ListItem onPress={() => Actions.Settings()}>
          <MaterialIcons name="settings" color="gray" size={20} />
          <Text style={_Styles.ListItemText}>Setting</Text>
        </ListItem>
      </List>
    );
  }
}

export default Pages;
