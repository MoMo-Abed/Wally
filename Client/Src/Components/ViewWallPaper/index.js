import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ViewWallPaper from "./ViewWallPaper";
import SlideUpForInfo from "./SlideUpForInfo";
export class index extends Component {
  state = {
    isFirst: false
  };
  static propTypes = {
    prop: PropTypes
  };

  render() {
    let { isFirst } = this.state;
    return <View>{isFirst ? <SlideUpForInfo /> : <ViewWallPaper />}</View>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
