import React, {Component} from 'react';
import {View, Platform} from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Menu from './MenuComponent'
import Home from './HomeComponent';
import OrderForm from './OrderFormComponent';
import YourOrder from './YourOrderComponent'


const MenuNavigator = createStackNavigator(
    {
        Menu: {screen: Menu},
        OrderForm: {screen: OrderForm}
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

const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home}
    },
    {
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
)

const YourOrderNavigator = createStackNavigator(
    {
        YourOrder: {screen: YourOrder}
    },
    {
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
)


const MainNavigator = createBottomTabNavigator(
    {
        Home: {screen: HomeNavigator},
        Menu: {screen: MenuNavigator},
        YourOrder: {screen: YourOrderNavigator}
    },
    {
        drawerBackgroundColor: '#CF04DC'
    }
)

const AppNavigator = createAppContainer(MainNavigator) 

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