import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
// Import StatusBar so we can get the value of the phone's statur bar
// Currently checking if this works with iOS but it seems it does.
import { StackNavigator } from 'react-navigation';
import { Home } from './src/screens/home';
import { News } from './src/screens/news';
import { Advices } from './src/screens/advices';
import { Diary } from './src/screens/diary';
import { HealthMap } from './src/screens/healthMap';

const NavigationApp = StackNavigator({
  HomeScreen: { screen: Home },
  NewsScreen: { screen: News},
  AdvicesScreen: { screen: Advices },
  DiaryScreen: { screen: Diary },
  HealthMapScreen: { screen: HealthMap }
},
{
  navigationOptions: {
    headerStyle: {
      // marginTop: StatusBar.currentHeight
    }
  }
});

export default class App extends React.Component {
  render() {
    return <NavigationApp />
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  navButtons: {
    flexDirection: 'row',
  }
});
