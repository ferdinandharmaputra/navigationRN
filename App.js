import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import BottomNavigation, { Tab, NavigationComponent } from 'react-native-material-bottom-navigation';

//screens import
import HomeScreen from './Home';
import ProfileScreen from './Profile';

export const homeNav = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions : ({ navigation }) => ({
            title: 'Home',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#cc0000',
                borderBottomColor: 'white',
                borderBottomWidth: 0,
            },
            headerTitleStyle: {
                fontSize: 18,
                color: 'white'
            },
            tabBarLabel: 'Home',
            // tabBarIcon: () => (
            //     <Image
            //         style={{width: 24, height: 24}}
            //         source={require('./../assets/images/icon-calendar.png')}
            //     />
            // )
        })
    }
})


export const profileNav = StackNavigator({
  Profile: {
      screen: ProfileScreen,
      navigationOptions : ({ navigation }) => ({
          title: 'Profile',
          headerTintColor: 'white',
          headerStyle: {
              backgroundColor: '#cc0000',
              borderBottomColor: 'white',
              borderBottomWidth: 0,
          },
          headerTitleStyle: {
              fontSize: 18,
              color: 'white'
          },
          tabBarLabel: 'Profile',
          // tabBarIcon: () => (
          //     <Image
          //         style={{width: 24, height: 24}}
          //         source={require('./../assets/images/icon-calendar.png')}
          //     />
          // )
      })
  }
})


export const Tabs = TabNavigator({
    Home: { screen: homeNav },
    Profile: { screen: profileNav }
}, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        bottomNavigationOptions: {
            labelColor: 'white',
            rippleColor: 'white',
            tabs: {
                Home: {
                    barBackgroundColor: '#cc0000'
                },
                Profile: {
                    barBackgroundColor: '#b20000'
                }
            }
        }
    }
})

export default class App extends React.Component {
    render() {
        return (
            <Tabs screenProps={{rootNavigation: this.props.screenProps.rootNavigation}}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
