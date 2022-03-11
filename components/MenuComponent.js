import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { ListItem, Card } from 'react-native-elements'
import { MENU_ITEMS } from '../shared/menu-items'


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuItems: MENU_ITEMS
        }
    }

    static navigationOptions = {
        title: 'Menu'
    }

    render() {

        const {navigate} = this.props.navigation
        const renderMenuItem = ({ item }) => {
            return (
                <TouchableOpacity onPress={() => navigate('MenuItemCard', {menuId: item.id})}>
                    <Card
                        featuredTitle={item.name}
                        image={require('./images/steak-dinner.jpg')}>
                        <Text style={{ margin: 10 }}>{item.description}</Text>
                    </Card>
                </TouchableOpacity>
            )
        }

        // const renderMenuItem = ({item}) => {
        //     return (
        //         <ListItem
        //             title={item.name}
        //             subtitle={item.description}
        //             leftAvatar={{source: require('./images/steak-dinner.jpg')}}
        //         />
        //     )
        // }

        return (
            <FlatList
                data={this.state.menuItems}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            >
            </FlatList>
        )
    }
}

export default Menu;