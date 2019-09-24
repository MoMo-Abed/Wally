import React, { Component } from "react";
import { Scene, Router, Stack, Actions } from "react-native-router-flux";
import FirstUse from "../Components/FirstUse";
import HomeMain from "../Components/HomeMain";
import Fav from "../Components/HomeComponents/Drawer/Favourite";
import History from "../Components/HomeComponents/Drawer/History";
import Settings from "../Components/HomeComponents/Drawer/Settings";
import ViewWallPaper from "../Components/ViewWallPaper";
import { getToken } from "../Utils/Auth";

export class index extends Component {
  componentDidMount() {
    let token = getToken();
    console.log(token);
    if (token !== null) {
      return Actions.main();
    } else {
      return Actions.FirstUse();
    }
  }

  render() {
    return (
      <Router>
        <Stack>
          <Scene key="FirstUse" hideNavBar>
            <Scene key="FirstUse" hideNavBar component={FirstUse} />
          </Scene>
          <Scene key="main" hideNavBar>
            <Scene key="Home" hideNavBar component={HomeMain} />
            <Scene key="Favourite" hideNavBar component={Fav} />
            <Scene key="History" hideNavBar component={History} />
            <Scene key="Settings" hideNavBar component={Settings} />
            <Scene key="ViewWallpaper" hideNavBar component={ViewWallPaper} />
          </Scene>
        </Stack>
      </Router>
    );
  }
}

export default index;
