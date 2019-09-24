import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import icon from "../../../../assets/icon.png";
import Pages from "./Pages";
import Categories from "./Categories";
import { Container, Content } from "native-base";
import { _Styles } from "../../../Style/Home/Drawer";
export class index extends Component {
  render() {
    return (
      <Container style={_Styles.Container}>
        <Content>
          <Image source={icon} style={_Styles.LogoDrawer} />
          <Pages />
          <Categories />
        </Content>
      </Container>
    );
  }
}

export default index;
