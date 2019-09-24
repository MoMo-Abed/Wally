import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions
} from "react-native";
import SwipeUpDown from "react-native-swipe-up-down";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MainHeader from "./ViewWallComponents/MainHeader";
import BtnMini from "./ViewWallComponents/BtnMini";
import FullItem from "./ViewWallComponents/FullItem";

const WidthImage = Dimensions.get("window").width;
export class ViewWallPaper extends Component {
  state = {
    myText: "I'm ready to get swiped!",
    gestureName: "none",
    backgroundColor: "#fff"
  };
  static propTypes = {
    ImageView: PropTypes.object.isRequired
  };

  render() {
    let { ImageView } = this.props;

    return (
      <View>
        <ImageBackground
          key={ImageView.id}
          source={{ uri: ImageView.urls.full }}
          style={_Styles.BG}
          resizeMode="cover"
        >
          <MainHeader WallPaper={ImageView} />
          <SwipeUpDown
            itemMini={<BtnMini />} // Pass props component when collapsed
            itemFull={<FullItem />} // Pass props component when show full
            onShowMini={() => console.log("mini")}
            onShowFull={() => console.log("full")}
            onMoveDown={() => console.log("down")}
            onMoveUp={() => console.log("up")}
            disablePressToShow={false} // Press item mini to show full
            style={{
              backgroundColor: "black",
              marginTop: 50,
              borderRadius: 10
            }}
          />
        </ImageBackground>
      </View>
    );
  }
}

const _Styles = StyleSheet.create({
  BG: {
    height: "100%",
    width: WidthImage,
    resizeMode: "cover"
  }
});

const mapStateToProps = state => ({
  ImageView: state.Wally.ImageView
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewWallPaper);
