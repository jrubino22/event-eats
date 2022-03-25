import React, { Component } from 'react';

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
}

export default YourOrder