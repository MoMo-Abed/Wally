import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { Query } from "@apollo/react-components";
import { Spinner, Content } from "native-base";
import { Actions } from "react-native-router-flux";

import { Send_Image_To_View } from "../../../Redux/Action/MainActions";

import GETIMAGES from "../../../Graphql/Query/getImages";

const ScreenWidth = Dimensions.get("window").width;

export class FullItem extends Component {
  static propTypes = {
    Send_Image_To_View: PropTypes.func.isRequired,
    ImageView: PropTypes.object
  };
  RenderTags(Tags) {
    return Tags.map(tag => (
      <Text key={tag} style={_Styles.TagsTitle}>
        {tag.title},
      </Text>
    ));
  }

  RenderInfo(Info) {
    return (
      <View>
        <View style={_Styles.InfoContainer}>
          <Text style={_Styles.InfoHeader}> User Information</Text>
          <Text style={_Styles.InfoText}>Author: {Info.user.name}</Text>
          <Text style={_Styles.InfoText}>UserName: {Info.user.username}</Text>
          <Text style={[_Styles.InfoText, { fontSize: 15 }]}>
            Source: {Info.user.links.html}
          </Text>
          <Text style={_Styles.InfoText}>Downloads: 19213</Text>
          <Text style={[_Styles.InfoText, { fontSize: 15 }]}>
            Portfolio Url: {Info.user.portfolio_url}
          </Text>
        </View>

        <View style={_Styles.ImageInfoContainer}>
          <Text style={_Styles.InfoHeader}>Image Information</Text>
          <Text style={_Styles.InfoText}>License: Unsplash License</Text>
          <Text style={_Styles.InfoText}>
            Size: {Info.width}x{Info.height}
          </Text>
          <Text style={_Styles.InfoText}>Likes: {Info.likes}</Text>
        </View>
      </View>
    );
  }

  RenderImages(WallPapers) {
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
    let { ImageView } = this.props;
    return (
      <Content scrollEnabled style={_Styles.Container}>
        <View style={_Styles.TagsContainer}>
          <AntDesign size={25} color="white" name="tags" />
          {this.RenderTags(ImageView.tags)}
        </View>

        {this.RenderInfo(ImageView)}

        <View style={_Styles.Sim_Wall_Cont}>
          <Text style={_Styles.InfoHeader}>Similar Wallpapers</Text>
          <Query
            variables={{ value: ImageView.tags[0].title }}
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
                  <View style={_Styles.ViewFunc}>
                    {this.RenderImages(Wallpapers)}
                  </View>
                );
              }
              //Return the loading Items if there is no data.
              return <Spinner color="#F8DB01" style={_Styles.Spinner} />;
            }}
          </Query>
        </View>
      </Content>
    );
  }
}
const _Styles = StyleSheet.create({
  Container: {
    height: "100%",
    width: "100%",
    marginTop: 10
  },
  TagsContainer: {
    flexDirection: "row",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 50
  },
  TagsTitle: {
    color: "white",
    fontSize: 18,
    marginLeft: 10,
    fontWeight: "200"
  },
  InfoContainer: {
    marginTop: 20,
    paddingBottom: 50
  },
  InfoHeader: {
    color: "gray"
  },
  InfoText: {
    color: "white",
    fontSize: 18,
    marginTop: 15,
    fontWeight: "300"
  },
  ImageInfoContainer: {
    paddingTop: 20,
    borderTopColor: "gray",
    borderTopWidth: 1,
    paddingBottom: 50,
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  },
  Sim_Wall_Cont: {
    marginTop: 20
  },
  ViewFunc: {
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    marginTop: 20
  },
  Image: {
    height: 300,
    width: 120
  },
  Spinner: {
    marginTop: 50,
    alignSelf: "center"
  }
});

const mapStateToProps = state => ({
  ImageView: state.Wally.ImageView
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { Send_Image_To_View }
)(FullItem);
