import React, { Component } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { ServicesData } from "../../constants/sampleData";
import { Header } from "../../components";
import { services } from "../../constants/theme";
import ServiceItem from "./ServiceItem";

export default class ServicesScreen extends Component {
  static navigationOptions = {
    header: null
  };

  goCart = () => {
    this.props.navigation.navigate("CartScreen", {
      booking: true,
      titleHeader: "cart"
    });
  };

  changeStatusSearch = () => {
    alert("Clicked");
  };

  goDetails = item => {
    this.props.navigation.navigate("ServicesDetails", {
      item: item
    });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={services.container}>
          <Header
            i18nKey="services_nav"
            rightMenu={true}
            searchIcon={true}
            onPressCart={this.goCart}
            cartIcon={true}
            onPressSearch={this.changeStatusSearch}
          />
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={ServicesData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ServiceItem item={item} onClick={this.goDetails} />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}
