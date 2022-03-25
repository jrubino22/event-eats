import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native'

class YourOrder extends Component{

    static navigationOptions = {
        title: 'Your Order',
        tabBarIcon: () => {
            <Icon
                name='sign-in'
                type='font-awesome'
                iconStyle={{ color: white }}
            />
        }
    }


    render(){return(<><Text>Nothing Yet!</Text></>)}
}

export default YourOrder