import React, { Component } from "react";
import { View, Text, Dimensions, PixelRatio, StyleSheet } from "react-native";
import Constants from "expo-constants";
import PropTypes from "prop-types";
import * as Animatable from "react-native-animatable";
export default class DeviceInfo extends Component {
  GetInfo() {
    let { height, width } = Dimensions.get("screen");
    let DeviceName = Constants.deviceName;
    let Width = PixelRatio.getPixelSizeForLayoutSize(width);
    let Height = PixelRatio.getPixelSizeForLayoutSize(height);
    return (
      <View style={_Styles.DeviceInfoContainer}>
        <Text style={_Styles.DeviceName}>{DeviceName}</Text>
        <Text style={_Styles.Pixels}>{`${Width}x${Height}`}</Text>
      </View>
    );
  }
  render() {
    return (
      <Animatable.View
        animation="slideInLeft"
        iterationCount={1}
        direction="normal"
        style={_Styles.Container}
      >
        <View style={_Styles.InfoContainer}>
          <Text style={_Styles.SubText}>Your device</Text>
          {this.GetInfo()}
        </View>
        <View style={_Styles.InfoContainer}>
          <Text style={_Styles.adaptedText}>
            All wallpapers{"\n"} are adapted to your screen{" "}
          </Text>
          <Text style={_Styles.adaptedText}>
            Running the application {"\n"} I agree to the terms of the user
            agreement
          </Text>
        </View>
      </Animatable.View>
    );
  }
}

const _Styles = StyleSheet.create({
  Container: {
    backgroundColor: "#070B16",
    height: "75%"
  },
  InfoContainer: {
    marginTop: 30,
    alignItems: "center"
  },
  SubText: {
    color: "gray",
    fontSize: 15
  },
  DeviceInfoContainer: {
    alignItems: "center",
    marginTop: 10
  },
  DeviceName: {
    fontSize: 20,
    color: "white",
    fontWeight: "900",
    marginTop: 10
  },
  Pixels: {
    fontSize: 20,
    color: "white",
    fontWeight: "900",
    marginTop: 5
  },
  adaptedText: {
    color: "gray",
    textAlign: "center",
    marginTop: 120
  }
});
