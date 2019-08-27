import React, { Component } from "react";

import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { home } from "../../constants/theme";

import { Header, AppText } from "../../components";
import { RankData, ServicesData } from "../../constants/sampleData";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  // Render Hot Services
  renderHotItems(item) {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("ServicesDetails", { item: item })
        }
      >
        <View style={home.hotItem}>
          <Image
            style={{
              width: "100%",
              height: "100%"
            }}
            source={{ uri: item.images[0] }}
          />
          <View style={home.hotTitleBG}>
            <Text style={home.hotTitle}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  // Render Hot Ranking
  renderRanking() {
    const data = RankData.splice(0, 9).map((item, index) => (
      <View key={index} style={home.rankingItem}>
        <Text style={home.rankNo}>{index + 1}</Text>
        <View style={home.rankInfo}>
          <Image
            style={{ width: 46, height: 46, marginRight: 15, borderRadius: 10 }}
            source={{ uri: item.avatar }}
          />
          <Text style={home.rankUserName}>{item.name}</Text>
        </View>
        <Text style={home.rankPoint}>
          {item.point} <AppText i18nKey="point_text" />
        </Text>
      </View>
    ));
    return data;
  }

  render() {
    return (
      <SafeAreaView style={home.container}>
        <Header i18nKey="home_nav" style={{ paddingHorizontal: 24 }} />
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <LinearGradient style={home.userInfo} colors={["#FF00A9", "#FF3D81"]}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text style={home.userName}>
                  <AppText i18nKey="hi" />
                  {", "}Jane Doe
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={home.userPoint}>
                  1000 <AppText style={home.userPoint} i18nKey="point_text" />
                </Text>
              </View>
            </View>
            <Image
              style={{ maxHeight: 48, maxWidth: 48 }}
              resizeMode="contain"
              source={require("../../assets/images/iv_avatar.png")}
            />
          </LinearGradient>
          <View style={home.hotServices}>
            <AppText style={home.title} i18nKey="hot_services" />
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ServicesScreen')}
            >
              <Text>
                <AppText style={home.watchMore} i18nKey="watch_more" /> >
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={ServicesData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => this.renderHotItems(item)}
          />
          <View style={home.rankingContainer}>
            <AppText
              style={[home.title, { marginBottom: 10 }]}
              i18nKey="ranking_member"
            />
            {this.renderRanking()}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
