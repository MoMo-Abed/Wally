import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { Actions } from "react-native-router-flux";

import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";
import { Button } from "native-base";
import { Mutation } from "@apollo/react-components";
import CREATETOKEN from "../../Graphql/Mutation/CreateToken";
import DeviceInfo from "./DeviceInfo";
import icon from "../../../assets/icon.png";
import AgeInfo from "./AgeInfo";
import { CreateToken as Token } from "../../Utils/Auth";
export class index extends Component {
  state = {
    onContinuePressed: false,
    AgeValue: null
  };

  //Check if user on Continue Btn Pressed or not if true Fire the Graphql Server
  //else Show the Ages Page
  OnBtnPressed = ({ CreateToken }) => {
    let { onContinuePressed } = this.state;
    if (onContinuePressed) return this.onGetStarted({ CreateToken });
    else this.OnContinueBtn();
  };

  OnContinueBtn() {
    this.setState({ onContinuePressed: true });
  }

  onGetStarted = async ({ CreateToken }) => {
    let PhoneId = Constants.deviceId;
    let deviceName = Constants.deviceName;
    const Inputs = {
      PhoneId,
      deviceName
    };
    console.log(Inputs);

    const { data } = await CreateToken({
      variables: { inputs: Inputs }
    });

    try {
      await Token(data.CreateToken.token);
      Actions.main();
    } catch (error) {
      throw error;
    }
  };

  render() {
    let { onContinuePressed, AgeValue } = this.state;
    return (
      <View style={_Styles.Container}>
        <Animatable.Image
          animation="fadeIn"
          iterationCount={1}
          direction="normal"
          duration={2000}
          source={icon}
          style={_Styles.Logo}
        />
        {onContinuePressed ? (
          <AgeInfo
            onChangeText={v => this.setState({ AgeValue: v })}
            AgeValue={AgeValue}
          />
        ) : (
          <DeviceInfo />
        )}
        <Mutation mutation={CREATETOKEN}>
          {(CreateToken, error, data) => {
            console.log("error-----------", error);
            //If there is an error throw the error
            if (error) {
              console.log("error----------", error);
            }
            if (CreateToken) {
              //If the response has data load the response data via the createPlayer property.
              return (
                <Button
                  onPress={() => this.OnBtnPressed({ CreateToken })}
                  style={[_Styles.Button]}
                >
                  <Text style={_Styles.BtnText}>
                    {onContinuePressed ? "GET STARTED" : "CONTINUE"}
                  </Text>
                </Button>
              );
            }

            //By default it is loading the result so just return loading...
            return <Text>Loading...</Text>;
          }}
        </Mutation>
      </View>
    );
  }
}

const _Styles = StyleSheet.create({
  Container: {
    backgroundColor: "#070B16",
    height: "100%"
  },

  Logo: {
    width: 150,
    height: 150,
    marginTop: 30,
    alignSelf: "center"
  },
  Button: {
    position: "absolute",
    left: 0,
    bottom: 0,
    alignSelf: "flex-start",
    flex: 1,
    width: "100%",
    backgroundColor: "#F8DB01",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  BtnText: {
    textAlign: "center",
    color: "white",
    alignSelf: "center"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
