// Diary screen

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Diary extends Component {
  static navigationOptions = {
    title: "Meu Diário"
}
  render() {
    return (
      <View>
        <Text>This is the Diary screen</Text>
      </View>
    )
  }
}

export default Diary;