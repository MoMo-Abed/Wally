import React, { Component } from "react";
import { Text, View, TouchableWithoutFeedback, StyleSheet } from "react-native";
import { Header, Left, Body, Right, Input, ActionSheet } from "native-base";
import {
  MaterialCommunityIcons,
  Feather,
  FontAwesome
} from "@expo/vector-icons";
import { Actions } from "react-native-router-flux";
import PropTypes from "prop-types";
import { Mutation } from "@apollo/react-components";
import CREATE_SAVED_IMAGE from "../../../Graphql/Mutation/CreateSaved";
export class MainHeader extends Component {
  state = {
    IsFav: false
  };

  static propTypes = {
    WallPaper: PropTypes.object
  };

  SavedPressed = async ({ CreateSaved }) => {
    const Inputs = {
      ...this.props.WallPaper
    };
    console.log(Inputs);

    const { data } = await CreateSaved({
      variables: { inputs: Inputs }
    });
  };

  render() {
    let { IsFav } = this.state;
    return (
      <Header style={_Styles.Header} androidStatusBarColor="#070B16">
        <Left>
          <TouchableWithoutFeedback onPress={() => Actions.main()}>
            <Feather name="arrow-left" size={30} color="white" />
          </TouchableWithoutFeedback>
        </Left>
        <Right>
          <TouchableWithoutFeedback>
            <MaterialCommunityIcons
              name="tooltip-edit"
              size={30}
              color="white"
              style={_Styles.FilterIcon}
            />
          </TouchableWithoutFeedback>

          <Mutation mutation={CREATE_SAVED_IMAGE}>
            {(CreateSaved, error, data) => {
              console.log("error-----------", error);
              //If there is an error throw the error
              if (error) {
                console.log("error----------", error);
              }
              if (CreateSaved) {
                //If the response has data load the response data via the createPlayer property.
                return (
                  <TouchableWithoutFeedback
                    onPress={() => {
                      this.SavedPressed({ CreateSaved }),
                        this.setState({ IsFav: true });
                    }}
                  >
                    <FontAwesome
                      name={IsFav ? "star" : "star-o"}
                      size={30}
                      color="white"
                    />
                  </TouchableWithoutFeedback>
                );
              }

              //By default it is loading the result so just return loading...
              return <Spinner color="#F8DB01" style={_Styles.Spinner} />;
            }}
          </Mutation>
        </Right>
      </Header>
    );
  }
}

const _Styles = StyleSheet.create({
  Header: {
    backgroundColor: "#070B16",
    opacity: 0.7
  },
  FilterIcon: {
    marginRight: 30
  },
  Spinner: {
    marginTop: 50,
    alignSelf: "center"
  }
});

export default MainHeader;
