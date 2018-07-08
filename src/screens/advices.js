// Advice screen

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class Advices extends Component {
  static navigationOptions = {
    title: "Dicas de Saúde"
}
  render() {
    return (
      <View>
        <Text>This is the Advice screen</Text>
      </View>
    )
  }
}

export default Advices;