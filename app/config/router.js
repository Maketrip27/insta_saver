import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Home from '../screens/home.js';
import Fav from '../screens/fav.js';
import Search from '../screens/search.js';
import Profile from '../screens/profile.js';
import {
Image
} from 'react-native';

export const UserStack = StackNavigator({
  Fav: {
    screen: Fav,
    navigationOptions: {
      title: 'Favourite',
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()} ${navigation.state.params.name.toUpperCase()}`,
    }),
  },
});

export const Tabs = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='home' style={[{color: tintColor}]}/>
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='search' style={[{color: tintColor}]}/>
        )
      }
    },
    Fav: {
      screen: UserStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='people' style={[{color: tintColor}]}/>
        )
      }
    },
  },{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'black',
    activeBackgroundColor: 'white',
    inactiveBackgroundColor: 'white',
    style:{backgroundColor: 'grey'},
    indicatorStyle: {backgroundColor: 'grey'},
    showLabel: false,
    showIcon:true,
  },
});
// export const Root = StackNavigator({
//   Tabs: {
//     screen: Tabs,
//   },
//   Settings: {
//     screen: Settings,
//   },
// }, {
//   mode: 'modal',
//   headerMode: 'none',
// });
export default Tabs;