import React, { Component } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Header } from "../../components";
import { booked } from "../../constants/theme";
import { BookedListData } from "../../constants/sampleData";

export default class BookedScreen extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    bookingData: true
  };
  goDetails = item => {
    this.props.navigation.navigate("BookedDetails", {
      booking: false,
      titleHeader: "details"
    });
  };
  renderItem(item) {
    return (
      <TouchableOpacity onPress={() => this.goDetails(item)}>
        <View style={booked.itemContainer}>
          <View style={booked.datetimeContainers}>
            <Text style={booked.date}>{item.date}</Text>
            <Text style={booked.time}>
              {item.beginAt} - {item.endAt}
            </Text>
          </View>
          <Text style={booked.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    const { bookingData } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {bookingData ? (
          <View style={booked.header}>
            <Header
              i18nKey="booked_nav"
              style={{ color: "#fff", paddingLeft: 24 }}
            />
            <View style={booked.notification}>
              <View style={booked.datetime}>
                <Text style={booked.notifyTime}>10:00 - 12:00</Text>
                <Text style={booked.notifyDate}>Tuesday, August 20, 2019</Text>
              </View>
              <Text style={booked.bookingText}>Booking</Text>
            </View>
          </View>
        ) : (
          <Header
            i18nKey="booked_nav"
            style={{ paddingLeft: 24 }}
          />
        )}
        <View style={booked.container}>
          <Text style={booked.title}>Histories</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            data={BookedListData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => this.renderItem(item)}
          />
        </View>
      </SafeAreaView>
    );
  }
}
