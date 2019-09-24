import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import HeaderItems from "./HeaderItems";
import ListItems from "./ListItems";
export class index extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <HeaderItems />
        <ListItems />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
