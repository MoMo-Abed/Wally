import React, { Component } from "react";
import { View, Text, Switch } from "react-native";
import { connect } from "react-redux";
import { List, ListItem } from "native-base";
import { _Styles } from "../../../../Style/Settings/index";
export class ListItems extends Component {
  state = {
    Wifi_Download: false,
    Wally_Installer: true,
    Notifications: true
  };

  render() {
    let { Wifi_Download, Wally_Installer, Notifications } = this.state;
    return (
      <List>
        <ListItem itemHeader first>
          <Text style={_Styles.ItemHeader}>Data usage</Text>
        </ListItem>
        <ListItem style={_Styles.ListItem}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={_Styles.ListItemHeader}>
                Download wallpapers only over Wi-fi
              </Text>
              <Text style={_Styles.ListItemSubHeader}>
                Data transferring will be paused when Wi-fi{"\n"} connection is
                not available
              </Text>
            </View>
            <Switch
              value={Wifi_Download}
              onValueChange={() =>
                this.setState({ Wifi_Download: !Wifi_Download })
              }
              tintColor={Wifi_Download ? "#F8DB01" : "gray"}
              thumbColor={Wifi_Download ? "#F8DB01" : "gray"}
              style={{ marginLeft: 20 }}
            />
          </View>
        </ListItem>

        <ListItem style={_Styles.ListItem} itemHeader>
          <Text style={_Styles.ItemHeader}>Setting wallpaper</Text>
        </ListItem>
        <ListItem style={_Styles.ListItem}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={_Styles.ListItemHeader}>Wally Installer</Text>
              <Text style={_Styles.ListItemSubHeader}>
                Use Wally Installer by default
              </Text>
            </View>
            <Switch
              value={Wally_Installer}
              onValueChange={() =>
                this.setState({ Wally_Installer: !Wally_Installer })
              }
              tintColor={Wally_Installer ? "#F8DB01" : "gray"}
              thumbColor={Wally_Installer ? "#F8DB01" : "gray"}
              style={{ marginLeft: 100 }}
            />
          </View>
        </ListItem>

        <ListItem style={_Styles.ListItem} itemHeader>
          <Text style={_Styles.ItemHeader}>Notifications</Text>
        </ListItem>
        <ListItem style={_Styles.ListItem}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text style={_Styles.ListItemHeader}>Push_notifications</Text>
            </View>
            <Switch
              value={Notifications}
              onValueChange={() =>
                this.setState({ Notifications: !Notifications })
              }
              tintColor={Notifications ? "#F8DB01" : "gray"}
              thumbColor={Notifications ? "#F8DB01" : "gray"}
              style={{ marginLeft: 140 }}
            />
          </View>
        </ListItem>
      </List>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItems);
