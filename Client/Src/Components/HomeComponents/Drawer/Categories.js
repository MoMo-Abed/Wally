import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { List, ListItem } from "native-base";
import { connect } from "react-redux";
import CategoriesArr from "./CategoriesArr.json";
import { Categories_Value } from "../../../Redux/Action/MainActions";
import { _Styles } from "../../../Style/Home/Drawer";

export class Categories extends Component {
  static propTypes = {
    Categories_Value: PropTypes.func.isRequired
  };

  RenderCategories() {
    let { Categories_Value } = this.props;
    return CategoriesArr.map(item => (
      <ListItem
        key={item}
        onPress={() => Categories_Value(item)}
        style={_Styles.ListItem}
      >
        <Text style={_Styles.ListItemText}>{item}</Text>
      </ListItem>
    ));
  }

  render() {
    return <List>{this.RenderCategories()}</List>;
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { Categories_Value }
)(Categories);
