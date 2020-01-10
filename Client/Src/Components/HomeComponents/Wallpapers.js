import React, { Component } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Spinner, Content } from "native-base";
import { Query } from "@apollo/react-components";
import GETIMAGES from "../../Graphql/Query/getImages";
import { Send_Image_To_View } from "../../Redux/Action/MainActions";
import { Actions } from "react-native-router-flux";
import FastImage from "react-native-fast-image";

export class Wallpapers extends Component {
  static propTypes = {
    Categories_V_State: PropTypes.string.isRequired,
    Send_Image_To_View: PropTypes.func.isRequired
  };

  RenderWallPapers(WallPapers) {
    let { Send_Image_To_View } = this.props;
    return WallPapers.map(wallpaper => (
      <TouchableHighlight
        onPress={() => {
          Send_Image_To_View(wallpaper), Actions.ViewWallpaper();
        }}
        key={wallpaper.id}
      >
        <Image
          key={wallpaper.id}
          style={_Styles.Image}
          source={{ uri: wallpaper.urls.small }}
        />
      </TouchableHighlight>
    ));
  }

  render() {
    let { Categories_V_State } = this.props;
    return (
      <View style={_Styles.Container}>
        <Query
          variables={{ value: Categories_V_State }}
          fetchPolicy="cache-and-network"
          query={GETIMAGES}
        >
          {(response, error) => {
            //If there is an error log the error to the console.
            if (error) {
              console.log("Get getImages Error------", error);
            }
            //Empty array to valid the List
            let Wallpapers = [];

            //If the response has data.
            if (response.data && response.data.getImages) {
              //Update the Array with The response
              Wallpapers = response.data.getImages;
              return (
                <Content
                  contentContainerStyle={{ paddingBottom: 110 }}
                  scrollEnabled
                >
                  <View style={_Styles.ViewFunc}>
                    {this.RenderWallPapers(Wallpapers)}
                  </View>
                </Content>
              );
            }
            //Return the loading Items if there is no data.
            return <Spinner color="#F8DB01" style={_Styles.Spinner} />;
          }}
        </Query>
      </View>
    );
  }
}

const _Styles = StyleSheet.create({
  Container: {
    height: "100%",
    backgroundColor: "#070B16"
  },
  ViewFunc: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  },
  Image: {
    height: 300,
    width: 130
  },
  Spinner: {
    marginTop: 50,
    alignSelf: "center"
  }
});

const mapStateToProps = state => ({
  Categories_V_State: state.Wally.Categories_V_State
});

export default connect(
  mapStateToProps,
  { Send_Image_To_View }
)(Wallpapers);
