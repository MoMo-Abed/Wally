import React, { Component } from "react";
import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { connect } from "react-redux";
import { Header, Left, Body } from "native-base";
import { Actions } from "react-native-router-flux";
import { Feather } from "@expo/vector-icons";

import { _Styles } from "../../../../Style/Settings/index";
export class HeaderItems extends Component {
  render() {
    return (
      <Header style={_Styles.Header} androidStatusBarColor="#070B16">
        <Left>
          <TouchableWithoutFeedback onPress={() => Actions.Home()}>
            <Feather name="arrow-left" size={30} color="white" />
          </TouchableWithoutFeedback>
        </Left>
        <Body>
          <Text style={_Styles.HeaderTitle}>Settings</Text>
        </Body>
      </Header>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderItems);
