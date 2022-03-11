import React, {Component} from 'react';
import {Text, FlatList} from 'react-native'
import {ListItem, Card} from 'react-native-elements'
import { MENU_ITEMS } from '../shared/menu-items'

const RenderMenuItem = ({menuItem}) => {
    return (
        <Card
            featuredTitle={menuItem.name}               
            image={require('./images/steak-dinner.jpg')}>
            <Text style={{margin:10}}>{menuItem.description}</Text>
        </Card>           
    )
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
        const menuItemId = this.props.navigation.getParam('menuItemId')
        const menuItem = this.state.menuItems.filter(menuItem => menuItem.id === menuItemId)
        return <RenderMenuItem menuItem={menuItem} />
    }
}

export default MenuItemCard