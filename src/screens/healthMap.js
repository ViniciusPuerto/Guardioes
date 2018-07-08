// This is the Health Map screen

import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class HealthMap extends Component {
    static navigationOptions = {
        title: "Mapa da Saúde"
    }
  render() {
    return (
      <View>
        <Text>This is the HealthMap screen</Text>
      </View>
    )
  }
}

export default HealthMap