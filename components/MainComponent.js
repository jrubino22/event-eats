import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {MENU_ITEMS} from '../shared/menu-items'
import { createStackNavigator } from 'react-navigation-stack';
import Menu from './MenuComponent'
import {Home} from './HomeComponent'



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItems: MENU_ITEMS
        }
    }
    render(){
        return <Menu menuItems={this.state.menuItems} />
    }
}

export default Main