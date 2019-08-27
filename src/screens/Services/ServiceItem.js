import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { AppText } from "../../components";
import { services } from "../../constants/theme";
import { storeCart, getCart } from "../../utils/global";
export default class ServiceItem extends Component {
  state = {
    itemSelected: false
  };

  addCart = async item => {
    this.setState({ itemSelected: !this.state.itemSelected });
    // await storeCart(item.name);
    // var data = await getCart();
    // console.log(JSON.parse(data));
  };
  
  render() {
    const { itemSelected } = this.state;
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={() => this.props.onClick(this.props.item)}>
        <View style={services.listItem}>
          <View
            style={[
              services.column,
              {
                flexDirection: "row",
                flex: 2,
                marginRight: 20
              }
            ]}
          >
            <Image
              style={{
                width: 44,
                height: 44,
                marginRight: 10,
                alignItems: "center",
                borderRadius: 22
              }}
              resizeMode="contain"
              source={{ uri: item.images[0] }}
            />
            <View style={services.titleBG}>
              <Text style={services.title}>{item.title}</Text>
              <Text style={services.description}>
                {item.description.length > 50
                  ? item.description.substring(0, 50) + "..."
                  : item.description}
              </Text>
            </View>
          </View>
          <View
            style={[services.column, { justifyContent: "flex-end", flex: 1 }]}
          >
            <Text
              style={[services.title, { marginBottom: 30, textAlign: "right" }]}
            >
              ${item.price}
            </Text>
            <TouchableOpacity
              onPress={() => this.addCart(item)}
              style={[
                services.btnBook,
                itemSelected ? services.btnBookSelected : null
              ]}
            >
              <AppText
                i18nKey="book"
                style={[
                  services.btnBookText,
                  itemSelected ? services.btnTextSelected : null
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
