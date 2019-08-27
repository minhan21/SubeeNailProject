import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { colors, sizes, fonts } from "../constants/theme";
// Import Icons
import Ionicons from "react-native-vector-icons/Ionicons";
import { icons } from "../utils/images";
import { AppText } from "./";

export default class Header extends Component {
  render() {
    const {
      rightMenu,
      headerStyle,
      backScreen,
      whiteText,
      searchIcon,
      cartIcon,
      middleTitle
    } = this.props;
    return rightMenu ? (
      <View
        style={[
          {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          },
          headerStyle
        ]}
      >
        {backScreen ? (
          <TouchableOpacity onPress={() => this.props.onClick()} style={{ width:24 }}>
            <Image
              source={whiteText ? icons.backIconWhite : icons.backIcon}
              style={{ height: 20, marginVertical: 10 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <AppText
            style={[styles.header, this.props.style]}
            i18nKey={this.props.i18nKey}
          />
        )}
        {middleTitle ? (
          <AppText
            style={[styles.header, this.props.style]}
            i18nKey={this.props.i18nKey}
          />
        ) : null}
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          {searchIcon ? (
            <TouchableOpacity
              onPress={() => this.props.onPressSearch()}
              style={{ marginRight: 20 }}
            >
              <Ionicons
                name="ios-search"
                color={whiteText ? "#fff" : "#000"}
                size={sizes.h1}
              />
            </TouchableOpacity>
          ) : null}
          {cartIcon ? (
            <TouchableOpacity onPress={() => this.props.onPressCart()}>
              <Ionicons
                name="md-basket"
                color={whiteText ? "#fff" : "#000"}
                size={sizes.h1}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    ) : (
      <AppText
        style={[styles.header, this.props.style]}
        i18nKey={this.props.i18nKey}
      />
    );
  }
}
const styles = StyleSheet.create({
  header: {
    color: colors.heading,
    fontFamily: fonts.black,
    fontSize: sizes.h1,
    marginVertical: 10,
    alignSelf: "flex-start"
  }
});
