import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "native-base";
import PropTypes from "prop-types";

export class BtnMini extends Component {
  static propTypes = {
    OnSetPressed: PropTypes.func,
    OnDownloadPressed: PropTypes.func
  };
  render() {
    let { OnSetPressed, OnDownloadPressed } = this.props;
    return (
      <View style={_Styles.Container}>
        <Button onPress={() => OnDownloadPressed()} style={_Styles.BtnCont}>
          <Text style={_Styles.Text}>Download</Text>
        </Button>
        <Button onPress={() => OnSetPressed()} style={_Styles.BtnCont}>
          <Text style={_Styles.Text}>Set</Text>
        </Button>
      </View>
    );
  }
}

const _Styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    width: "100%",
    marginTop: -40
  },
  BtnCont: {
    width: "50%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#070B16",
    justifyContent: "center",
    borderRightColor: "gray",
    borderRightWidth: 2,
    borderColor: "#F8DB01"
  },
  Text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    alignSelf: "center"
  }
});

export default BtnMini;
