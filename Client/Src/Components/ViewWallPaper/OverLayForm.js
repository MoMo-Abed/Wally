import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class OverLayForm extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    let { IsOpen, FormSty, Style, OnOverLayPressed } = this.props;
    return (
      <View style={[_styles.Container, Style]}>
        {IsOpen ? (
          <View style={_styles.Container}>
            <TouchableWithoutFeedback onPress={OnOverLayPressed}>
              <View style={_styles.overlay} />
            </TouchableWithoutFeedback>
            <View style={[_styles.FormSty, FormSty]}>
              {this.props.children}
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const _styles = StyleSheet.create({
  Container: {
    position: "absolute",
    alignSelf: "center",
    width: "100%",
    height: "100%"
  },
  overlay: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: "black",
    width: "100%",
    height: "100%"
  },
  FormSty: {
    width: 300,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    paddingBottom: 10
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OverLayForm);
