import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import * as actions from './redux/actions/index';

class AuthLoading extends Component {
  async componentDidMount() {
    try {
      const value = await this.getData();
      if (value !== null) {
        this.setLanguage(value);
      }
    } catch (e) {
      // error reading value
    }
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@language_key');
      if (value !== null) {
        return value;
      }
    } catch (e) {
      // error reading value
    }
  };
  setLanguage = language => {
    this.setState({language});
    this.props.setLanguage(language);
  };
  render() {
    return (
      <SafeAreaView>
        <Text> Welcome </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={{backgroundColor: '#f26f21'}}>
          <Text style={{padding: 25, color: '#fff'}}> Home </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state.languageReducer.language,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLanguage: language => {
      dispatch(actions.changeLanguage(language));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthLoading);
