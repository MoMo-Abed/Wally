import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "native-base";
import PropTypes from "prop-types";
import { AntDesign } from "@expo/vector-icons";
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
          <AntDesign
            style={{ marginRight: 10 }}
            name="download"
            color="white"
            size={20}
          />
          <Text style={_Styles.Text}>Download</Text>
        </Button>
      </View>
    );
  }
}

const _Styles = StyleSheet.create({
  Container: {
    width: "100%",
    marginTop: -40
  },
  BtnCont: {
    width: "70%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    borderRightWidth: 2,
    alignSelf: "center",
    flexDirection: "row"
  },
  Text: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
    alignSelf: "center"
  }
});

export default BtnMini;
