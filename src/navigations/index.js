import React from "react";
import { Image } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";

// Import Language
import I18n from "../utils/i18n";

// Import Style
import theme from "../constants/theme";

//Import Images
import { icons } from "../utils/images";
import LoginScreen from "../screens/Welcome/Login";
import ServicesDetails from "../screens/Services/ServicesDetails";

//Import Screen
import HomeScreen from "../screens/Home";
import ServicesScreen from "../screens/Services";
import BookedScreen from "../screens/Booked";
import ProfileScreen from "../screens/Profile";
import WelcomeScreen from "../screens/Welcome";
import BookedDetails from "../screens/Booked/BookedDetails";
import CartScreen from "../screens/Cart";

//Welcome - Login Navigation
const WelcomeStack = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen
  },
  LoginScreen: {
    screen: LoginScreen
  }
});

//Home Navigation
const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  }
});

//Services Navigation
const ServicesStack = createStackNavigator({
  ServicesScreen: {
    screen: ServicesScreen
  },
  ServicesDetails: {
    screen: ServicesDetails
  },
  CartScreen: {
    screen: CartScreen
  }
});

//Booked Navigation
const BookedStack = createStackNavigator({
  BookedScreen: {
    screen: BookedScreen
  },
  BookedDetails: {
    screen: CartScreen
  }
});

//Profile Navigation
const ProfileStack = createStackNavigator({
  ProfileScreen: {
    screen: ProfileScreen
  }
});

//Bottom Navigation
const BottomNav = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t("home_nav")
      })
    },
    Services: {
      screen: ServicesStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t("services_nav")
      })
    },
    Booked: {
      screen: BookedStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t("booked_nav")
      })
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: () => ({
        tabBarLabel: I18n.t("profile_nav")
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconImage;
        if (routeName === "Home") {
          iconImage = focused ? icons.home_focused : icons.home;
        } else if (routeName === "Services") {
          iconImage = focused ? icons.services_focused : icons.services;
        } else if (routeName === "Booked") {
          iconImage = focused ? icons.booked_focused : icons.booked;
        } else if (routeName === "Profile") {
          iconImage = focused ? icons.profile_focused : icons.profile;
        }
        return <Image source={iconImage} style={{ height: 20, width: 20 }} />;
      }
    }),
    tabBarOptions: {
      initialRouteName: "Home",
      activeTintColor: theme.colors.hover,
      inactiveTintColor: theme.colors.secondary_text
    }
  }
);

//Switch Screen
const SwitchNav = createSwitchNavigator({
  Welcome: WelcomeStack,
  Home: BottomNav
});

const AppContainer = createAppContainer(SwitchNav);

export default AppContainer;
