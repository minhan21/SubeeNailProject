import React, { Component } from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { Header, AppText } from "../../components";
import { services } from "../../constants/theme";
export default class ServicesDetails extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    currentSelect: 0
  };
  goBack = () => {
    this.props.navigation.goBack();
  };
  goCart = () => {
    this.props.navigation.navigate("CartScreen", {
      booking: true,
      titleHeader: "cart"
    });
  };

  changeImage = index => {
    this.setState({
      currentSelect: index
    });
  };

  renderImage() {
    const { item } = this.props.navigation.state.params;
    return item.images.map((value, index) => (
      <TouchableOpacity key={index} onPress={() => this.changeImage(index)}>
        <Image
          source={{ uri: value }}
          style={{ width: 65, height: 65, marginRight: 20 }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    ));
  }

  render() {
    const { item } = this.props.navigation.state.params;
    return (
      <SafeAreaView style={{ flex: 1, width: "100%" }}>
        <View style={{ flex: 1, width: "100%" }}>
          <View style={{ position: "absolute", zIndex: 1, width: "100%" }}>
            <Header
              i18nKey="services_nav"
              rightMenu={true}
              backScreen={true}
              whiteText={false}
              searchIcon={false}
              cartIcon={true}
              headerStyle={{ paddingHorizontal: 24 }}
              onClick={this.goBack}
              onPressCart={this.goCart}
            />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            <Image
              source={{ uri: item.images[this.state.currentSelect] }}
              style={{ height: 193, marginBottom: 15 }}
              resizeMode="cover"
            />
            <View style={services.detailsConten}>
              <Text style={services.detailsTitle}>{item.title}</Text>
              <Text style={services.detailsDescription}>
                {item.description}
              </Text>
              <Text style={services.detailsPrice}>${item.price}</Text>
              <TouchableOpacity onPress={() => alert("clicked")}>
                <AppText style={services.detailsBtnBook} i18nKey="book" />
              </TouchableOpacity>
              <Text style={services.detailsContent}>{item.content}</Text>
              <ScrollView
                horizontal
                style={services.imageGallery}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {this.renderImage()}
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
