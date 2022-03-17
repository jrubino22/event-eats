import React, {Component} from 'react';
import {Text, View} from 'react-native'
import {ListItem, Card} from 'react-native-elements'
import { MENU_ITEMS } from '../shared/menu-items'
import { baseUrl } from '../shared/baseUrl';

function RenderItem({menuItem}) {
    if (menuItem) {
        return (
            <Card
                featuredTitle={menuItem.name}               
                image={{uri: menuItem.image}}>
                <Text style={{margin:10}}>{menuItem.description}</Text>
            </Card>           
        )
    }
    return <View/>
}


class MenuItemCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: MENU_ITEMS
        }
    }

    static navigationOptions = {
        title: 'Place Order'
    }

    render(){
        const menuItemId = this.props.navigation.getParam('menuId')
        const menuItem = this.state.menuItems.filter(menuItem => menuItem.id === menuItemId)[0]
        return (
            <>
                <RenderItem menuItem={menuItem} />
                <ScrollView>

                </ScrollView>
            </>
        )

    }
}

export default MenuItemCard