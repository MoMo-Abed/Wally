import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { Drawer } from "native-base";
import { connect } from "react-redux";
import DrawerItems from "../Components/HomeComponents/Drawer";
import HomeHeader from "./HomeComponents/HomeHeader";
import Wallpapers from "./HomeComponents/Wallpapers";
export class HomeMain extends Component {
  render() {
    let { DrawerState, Categories_V_State } = this.props;
    return (
      <Drawer content={<DrawerItems />} open={DrawerState}>
        <View>
          <StatusBar backgroundColor="#070B16" />
          <HomeHeader HeaderTitle={Categories_V_State} />
          <Wallpapers />
        </View>
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  DrawerState: state.Wally.DrawerState,
  Categories_V_State: state.Wally.Categories_V_State
});

export default connect(
  mapStateToProps,
  null
)(HomeMain);
