import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  ImageBackground
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Header, Left, Body, Right, Input, Spinner } from "native-base";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome,
  AntDesign
} from "@expo/vector-icons";
import { Send_Image_To_View } from "../../../../Redux/Action/MainActions";
import { Actions } from "react-native-router-flux";
import { Query } from "@apollo/react-components";
import USER from "../../../../Graphql/Query/user";

export class index extends PureComponent {
  static propTypes = {
    prop: PropTypes
  };
  state = {
    fav: []
  };

  renderItem(data) {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          this.props.Send_Image_To_View(data.item), Actions.ViewWallpaper();
        }}
      >
        <ImageBackground
          source={{ uri: data.item.urls.small }}
          style={_Styles.BG}
          imageStyle={_Styles.ImageBg}
        ></ImageBackground>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: "black", height: "100%" }}>
        <Header androidStatusBarColor="#070B16" style={_Styles.Header}>
          <Left>
            <TouchableWithoutFeedback onPress={() => Actions.main()}>
              <Feather name="arrow-left" size={30} color="white" />
            </TouchableWithoutFeedback>
          </Left>
          <Body>
            <Text style={_Styles.HeaderText}>Favourite</Text>
          </Body>
        </Header>

        <Query
          //variables={{ value: Categories_V_State }}
          fetchPolicy="cache-and-network"
          query={USER}
        >
          {(response, error) => {
            //If there is an error log the error to the console.
            if (error) {
              console.log("Get getImages Error------", error);
            }
            //Empty array to valid the List
            let Wallpapers = [];

            //If the response has data.
            if (response.data && response.data.user) {
              //Update the Array with The response
              this.setState({ fav: response.data.user.savedImages });
              console.log(this.state.fav);
              return (
                <FlatList
                  scrollEnabled
                  data={this.state.fav}
                  //  ItemSeparatorComponent={this.FlatListItemSeparator}
                  renderItem={item => this.renderItem(item)}
                  keyExtractor={item => item.id.toString()}
                  extraData={this.state}
                  ListFooterComponent={<View style={{ width: 15 }}></View>}
                  contentContainerStyle={{ paddingBottom: 250 }}
                />
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
  Header: {
    backgroundColor: "black",
    borderBottomColor: "white",
    borderBottomWidth: 1
  },
  HeaderText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  BG: {
    width: "98%",
    height: 70,
    marginLeft: 5,
    borderRadius: 10,
    marginTop: 10,
    borderColor: "yellow"
  },
  ImageBg: {
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  { Send_Image_To_View }
)(index);
