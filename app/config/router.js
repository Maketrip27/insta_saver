import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Home from '../screens/home.js';
import Fav from '../screens/fav.js';
import Search from '../screens/search.js';
import Profile from '../screens/profile.js';
import Post from '../screens/post.js';

import {
Image
} from 'react-native';

export const UserStack = StackNavigator({
  Fav: {
    screen: Fav,
    navigationOptions: {
      title: 'Favourite',
      headerTitleStyle: {alignSelf: 'center',textAlign: 'center'},
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.toUpperCase()} ${navigation.state.params.name.toUpperCase()}`,
      headerTitleStyle: {alignSelf: 'center',textAlign: 'center'},
    }),
  },
});

export const Tabs = TabNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='ios-home' style={[{color: tintColor}]}/>
        )
      }
    },
    Post: {
      screen: Post,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='logo-instagram' style={[{color: tintColor}]}/>
        )
      }
    },    
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='ios-search' style={[{color: tintColor}]}/>
        )
      }
    },
    Fav: {
      screen: UserStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (<Icon name='ios-heart' style={[{color: tintColor}]}/>),
        headerTitleStyle: {alignSelf: 'center',textAlign: 'center'},
      }
    },
  },{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    activeTintColor: 'black',
    activeBackgroundColor: 'white',
    inactiveBackgroundColor: 'grey',
    style:{backgroundColor: '#F5F5F5'},
    inactiveTintColor: 'grey',
    indicatorStyle: {backgroundColor: 'white'},
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