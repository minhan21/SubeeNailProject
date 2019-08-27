import React, { Component } from "react";
import { View, TouchableOpacity, TextInput } from "react-native";

//Import Style
import theme from "../../constants/theme";

//Import Sign In & Sign Up Form
import { login } from "../../constants/theme";
import { icons } from "../../utils/images";
import { ButtonGradient, AppText, ButtonWithIcon } from "../../components";

export default class LoginScreen extends Component {
  state = {
    status: true,
    active: 1
  };

  changeStatus = (value, value2) => {
    this.setState({
      status: value,
      active: value2
    });
  };

  accountLogin = () => {
    this.props.navigation.navigate("Home");
  };

  googleLogin = () => {
    this.props.navigation.navigate("Home");
  };

  accountSignUp = () => {
    this.props.navigation.navigate("Home");
  };

  googleSignUp = () => {
    this.props.navigation.navigate("Home");
  };

  renderSignIn() {
    return (
      <React.Fragment>
        <AppText style={login.formTitle} i18nKey="email" />
        <TextInput style={login.textInput} placeholder="email@example.com" />
        <AppText style={login.formTitle} i18nKey="password" />
        <TextInput
          style={login.textInput}
          secureTextEntry={true}
          placeholder="password"
        />
        <ButtonGradient
          onClick={this.accountLogin}
          fcolor="#FF00A9"
          scolor="#FF3D81"
          i18nKey="login"
        />
        <ButtonWithIcon
          icon={icons.googleIcon}
          i18nKey="google_loggin"
          onClick={this.googleLogin}
          buttonStyle={{
            backgroundColor: "#FFF",
            elevation: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2
          }}
        />
      </React.Fragment>
    );
  }

  renderSignUp() {
    return (
      <React.Fragment>
        <ButtonWithIcon
          icon={icons.googleIcon}
          i18nKey="google_loggin"
          onClick={this.googleSignUp}
          buttonStyle={{
            backgroundColor: "#FFF",
            elevation: 1,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2
          }}
        />
        <AppText style={login.chooseText} i18nKey="or" />
        <View style={login.fullname}>
          <View style={[login.childName, { marginRight: 20 }]}>
            <AppText style={login.formTitle} i18nKey="firstname" />
            <TextInput style={login.textInput} placeholder="Jane" />
          </View>
          <View style={[login.childName, { marginLeft: 20 }]}>
            <AppText style={login.formTitle} i18nKey="lastname" />
            <TextInput
              style={login.textInput}
              secureTextEntry={true}
              placeholder="Doe"
            />
          </View>
        </View>
        <AppText style={login.formTitle} i18nKey="email" />
        <TextInput style={login.textInput} placeholder="email@example.com" />
        <AppText style={login.formTitle} i18nKey="password" />
        <TextInput
          style={login.textInput}
          secureTextEntry={true}
          placeholder="password"
        />

        <ButtonGradient
          onClick={this.accountSignUp}
          fcolor="#FF00A9"
          scolor="#FF3D81"
          i18nKey="signup_title"
        />
      </React.Fragment>
    );
  }

  render() {
    return (
      <View style={theme.login.container}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={[
              theme.login.tabLayout,
              this.state.active === 1 ? theme.login.tabLayoutActive : null
            ]}
            onPress={() => this.changeStatus(true, 1)}
          >
            <AppText
              style={[
                theme.login.tabText,
                this.state.active === 1 ? theme.login.tabTextActive : null
              ]}
              i18nKey="signin_title"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              theme.login.tabLayout,
              this.state.active === 2 ? theme.login.tabLayoutActive : null
            ]}
            onPress={() => this.changeStatus(false, 2)}
          >
            <AppText
              style={[
                theme.login.tabText,
                this.state.active === 2 ? theme.login.tabTextActive : null
              ]}
              i18nKey="signup_title"
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 24 }}>
          {this.state.status ? this.renderSignIn() : this.renderSignUp()}
        </View>
      </View>
    );
  }
}
