import React, {Component} from 'react';
import {View, Text, Animated} from 'react-native'
import {Card} from 'react-native-elements'
import { EVENT_LIST } from '../shared/event-list';




class Home extends Component {

    static navigationOptions = {
        title: 'Home',
        tabBarIcon: () => {
            <Icon
                name='house'
                type='font-awesome'
                iconStyle={{ color: white }}
            />
        }
    }

    render() {
        return(
            
            <Text>Home</Text>
        )
    }

}

export default Home