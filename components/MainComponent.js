import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Menu from './MenuComponent'
import MenuItemCard from './menuItemInfoComponent';
import Constants from 'expo-constants';

const MenuNavigator = createStackNavigator(
    {
        Menu: {screen: Menu},
        MenuItemCard: {screen: MenuItemCard}
    },
    {
        initialRouteName: "Menu",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#CF04DC'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AppNavigator = createAppContainer(MenuNavigator) 

class Main extends Component {

    render(){
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}>
                <AppNavigator />
            </View>
            )
    }
}

export default Main