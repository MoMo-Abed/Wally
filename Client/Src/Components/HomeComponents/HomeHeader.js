import React, { Component } from "react";
import { Text, TouchableWithoutFeedback } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Left, Body, Right, Input } from "native-base";
import { Feather } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { _Styles } from "../../Style/Home/Header";
import { DrawerAction, Search_V_Action } from "../../Redux/Action/MainActions";
export class HomeHeader extends Component {
  state = {
    isSearchOn: false,
    SearchValue: ""
  };
  static propTypes = {
    HeaderTitle: PropTypes.string.isRequired,
    DrawerAction: PropTypes.func.isRequired,
    Search_V_Action: PropTypes.func.isRequired
  };

  //Check if user on Search Mode or not if true Show Header items
  //else Show the Drawer
  OnLeftIconPressed = () => {
    let { isSearchOn } = this.state;
    if (isSearchOn) return this.OnShowItems();
    else this.onDrawerPressed();
  };

  OnShowItems() {
    let { isSearchOn } = this.state;
    this.setState({ isSearchOn: !isSearchOn });
  }
  onDrawerPressed() {
    this.props.DrawerAction();
  }

  //Check if user on Search Mode or not if true Fire SearchPressed Fun (Redux)
  //else Hide Header items
  OnRightIconPressed = () => {
    let { isSearchOn } = this.state;
    if (isSearchOn) return this.onSearchPreessed();
    else this.OnHideItems();
  };

  OnHideItems() {
    let { isSearchOn } = this.state;
    this.setState({ isSearchOn: !isSearchOn });
  }
  onSearchPreessed() {
    let { SearchValue, isSearchOn } = this.state;
    let { Search_V_Action } = this.props;
    Search_V_Action(SearchValue);
    this.setState({ isSearchOn: !isSearchOn });
  }

  render() {
    let { isSearchOn, SearchValue } = this.state;
    return (
      <Header androidStatusBarColor="#070B16" style={_Styles.Header}>
        <Left>
          <TouchableWithoutFeedback onPress={() => this.OnLeftIconPressed()}>
            <Feather
              name={isSearchOn ? "arrow-left" : "menu"}
              size={30}
              color="white"
            />
          </TouchableWithoutFeedback>
        </Left>
        {isSearchOn ? (
          <Animatable.View
            style={_Styles.AnimatView}
            animation="slideInRight"
            iterationCount={1}
            direction="normal"
          >
            <Input
              value={SearchValue}
              onChangeText={V => this.setState({ SearchValue: V })}
              placeholderTextColor="white"
              placeholder="Search"
              style={{ color: "white" }}
            />
          </Animatable.View>
        ) : (
          <Body>
            <Text style={_Styles.HeaderTitle}>{this.props.HeaderTitle}</Text>
          </Body>
        )}

        <Right>
          <TouchableWithoutFeedback onPress={() => this.OnRightIconPressed()}>
            <Feather
              name={isSearchOn ? "arrow-right" : "search"}
              size={30}
              color="white"
            />
          </TouchableWithoutFeedback>
        </Right>
      </Header>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { DrawerAction, Search_V_Action }
)(HomeHeader);
