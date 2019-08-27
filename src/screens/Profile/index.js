import React, { Component } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  View,
  Switch,
  ScrollView,
  TouchableOpacity
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Header } from "../../components";
import { profile } from "../../constants/theme";
export default class ProfileScreen extends Component {
  static navigationOptions = {
    header: null
  };

  onLogout = () => {
    alert("Logout");
  };
  state = {
    colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1, paddingHorizontal: 24 }}>
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Header i18nKey="profile_nav" />
          <View style={profile.PersonInfo}>
            <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1505136022555-39704db312fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              }}
              style={profile.avatar}
            />
            <Text style={profile.fullname}>Els Fattah</Text>
            <Text style={profile.email}>example@subee.dev</Text>
          </View>
          <View style={profile.PointInfo}>
            <View style={profile.point}>
              <Text style={profile.content}>3</Text>
              <Text style={profile.Infotitle}>Point</Text>
            </View>
            <View style={profile.booked}>
              <Text style={profile.content}>30</Text>
              <Text style={profile.Infotitle}>Booked</Text>
            </View>
          </View>
          <View style={profile.subFunction}>
            <Text style={profile.functionTitle}>Settings</Text>
            <View style={profile.functionTools}>
              <Text style={profile.toggleTitle}>Toggle</Text>
              <Switch
                onValueChange={value =>
                  this.setState({ colorFalseSwitchIsOn: value })
                }
                style={{ marginBottom: 10, height: 40, alignItems: "flex-end" }}
                thumbColor="#FF00A9"
                trackColor="#CCC"
                value={this.state.colorFalseSwitchIsOn}
              />
            </View>
          </View>
          <TouchableOpacity
            style={profile.touchlogin}
            onPress={() => this.onLogout()}
          >
            <LinearGradient
              colors={["#BCA5AF", "#BCA5AF"]}
              style={profile.linearGradient}
            >
              <Text style={profile.logginText}>LOGOUT</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
