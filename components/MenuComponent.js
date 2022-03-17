import React, { Component } from 'react';
import { Text, FlatList, TouchableOpacity } from 'react-native'
import { ListItem, Card, Icon } from 'react-native-elements'
import { MENU_ITEMS } from '../shared/menu-items'
import { connect } from 'react-redux'
import { baseUrl } from '../shared/baseUrl'

const mapStateToProps = state => {
    return {
        menuItems: state.menuItems
    }
}


class Menu extends Component {


    static navigationOptions = {
        title: 'Menu',
        tabBarIcon: () => {
            <Icon
                name='sign-in'
                type='font-awesome'
                iconStyle={{ color: white }}
            />
        }
    }

    render() {

        const {navigate} = this.props.navigation
        const renderMenuItem = ({ item }) => {
            return (
                <TouchableOpacity onPress={() => navigate('OrderForm', {menuId: item.id})}>
                    <Card
                        featuredTitle={item.name}
                        image={{uri: item.image}}
                        >
                        <Text style={{ margin: 10 }}>{item.description}</Text>
                    </Card>
                </TouchableOpacity>
            )
        }

        return (
            <FlatList
                data={this.props.menuItems}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            >
            </FlatList>
        )
    }
}

export default connect(mapStateToProps)(Menu);