// News.js

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class News extends Component {
  static navigationOptions = {
    title: "Notícias"
}
  render() {
    return (
      <View>
        <Text>This is the News screen</Text>
      </View>
    )
  }
}

export default News