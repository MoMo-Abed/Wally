import React, { Component } from "react";
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";

export default class AgeInfo extends Component {
  static propTypes = {
    onChangeText: PropTypes.func.isRequired
  };

  render() {
    let { AgeValue, onChangeText } = this.props;
    return (
      <Animatable.View
        animation="slideInRight"
        iterationCount={1}
        direction="normal"
        duration={2000}
        style={_Styles.Container}
      >
        <Text style={_Styles.Header}>
          Please specify how old you are (full years) so that we {"\n"} could
          match the app content to your age:
        </Text>
        <TextInput
          keyboardType="number-pad"
          placeholder="18"
          placeholderTextColor="gray"
          style={_Styles.Input}
          value={AgeValue}
          onChangeText={() => onChangeText()}
        />
      </Animatable.View>
    );
  }
}

const _Styles = StyleSheet.create({
  Container: {
    height: "100%",
    backgroundColor: "#070B16"
  },
  Header: {
    color: "gray",
    width: "95%",
    textAlign: "center"
  },
  Input: {
    borderBottomColor: "#F8DB01",
    borderBottomWidth: 3,
    alignSelf: "center",
    width: "70%",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 20,
    color: "white",
    paddingBottom: 10,
    marginTop: 60
  },
  Button: {
    position: "absolute",
    left: 0,
    bottom: 0,
    //right: 0,
    alignSelf: "flex-start",
    flex: 1,
    width: "100%",
    height: "20%",
    backgroundColor: "#F8DB01",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  BtnText: {
    textAlign: "center",
    color: "white",
    alignSelf: "center"
  },
  ErrorText: {
    color: "red",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "900",
    marginTop: 10
  }
});
