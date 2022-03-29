import React, { Component } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        menuItems: state.menuItems,
        yourOrder: state.yourOrder
    }
}

class YourOrder extends Component {

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


    render() {
        const {navigate} = this.props.navigation
        return (
            <View animation='fadeInRightBig' duration={2000}>
                <FlatList
                    data={this.props.menuItems.filter(
                        menuItems => this.props.yourOrder.menuItemId.includes(menuItems.id)
                    )}
                    renderItem={renderFavoriteItem}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps)(YourOrder)