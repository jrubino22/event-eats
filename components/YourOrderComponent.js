import React, { Component } from 'react';
import { Text, FlatList, View, TouchableOpacity } from 'react-native';
import {ListItem} from 'react-native-elements';
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
        const renderYourOrder = ({item}) => {
            return(
                <View>
                    <ListItem
                        title={item.name}
                        subtitle={`${this.props.yourOrder.order.option1} \n${this.props.yourOrder.order.option2}`}
                        onPress={() => navigate('OrderForm', {menuId: item.id})}
                    />
                </View>
            )
        }
        return (
            <>
            {this.props.yourOrder.order.menuItemId ?
            <View animation='fadeInRightBig' duration={2000}>
                <FlatList
                    data={this.props.menuItems.filter(
                        menuItems => this.props.yourOrder.order.menuItemId === menuItems.id
                    )}
                    renderItem={renderYourOrder}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
            :
            <Text>Your orders will appear here once you place one!</Text>
            }
            </>
        )
    }
 }

export default connect(mapStateToProps)(YourOrder)