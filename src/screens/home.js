// Home.js should be the initial screen the user sees

import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/';
import CircleButton from 'react-native-circle-button';
// Circle Button gives us an amazing way to use circle shaped buttons
// doc at https://www.npmjs.com/package/react-native-circle-button

export class Home extends Component {
    static navigationOptions = {
        title: "Guardiões da Saúde"
    }
  render() {
      const { navigate } = this.props.navigation; 
    //   This will shorten the button calls for screens 
    return (
      <View>
        <Text>This is the home screen</Text>
        <View style={styles.navButtons}>
            {/* <Button onPress={() => this.props.navigation.navigate('NewsScreen')} title="News"/>
            <Button onPress={() => this.props.navigation.navigate('AdvicesScreen')} title="Advices"/>
            <Button onPress={() => this.props.navigation.navigate('DiaryScreen')} title="Diary"/>
            <Button onPress={() => this.props.navigation.navigate('HealthMapScreen')} title="Health Map"/> */}
            <CircleButton size={55} primaryColor="#cbcbcb" secondaryColor="#dcdcdc" 
                onPressButtonTop={() => navigate('NewsScreen')}
                onPressButtonRight={() => navigate('AdvicesScreen')}
                onPressButtonBottom={() => navigate('DiaryScreen')}
                onPressButtonLeft={() => navigate('HealthMapScreen')}
            />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    navButtons: {
      flexDirection: 'row',
        
    }
});

export default Home;