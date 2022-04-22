import React, { Component } from 'react';
import { Text, FlatList, View, Button, StyleSheet } from 'react-native';
import {ListItem} from 'react-native-elements';
import { connect } from 'react-redux';
import { removeMenuItem } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        menuItems: state.menuItems,
        yourOrder: state.yourOrder
    }
}

const mapDispatchToProps =  {
    removeMenuItem: menuItemId => removeMenuItem(menuItemId)
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
                        style={styles.itemName}
                        title={item.name}
                        titleStyle={styles.title}
                        subtitle={`${this.props.yourOrder.order.option1} \n${this.props.yourOrder.order.option2}`}
                        subtitleStyle={styles.subtitle}
                        leftAvatar={{ 
                            source:  item.image ,
                            style: styles.avatar
                        }}
                        onPress={() => navigate('OrderForm', {menuId: item.id})}
                    />
                </View>
            )
        }
        return (
            <>
            {this.props.yourOrder.order ?
            <View animation='fadeInRightBig' duration={2000}>
                <FlatList
                    data={this.props.menuItems.filter(
                        menuItems => this.props.yourOrder.order.menuItemId === menuItems.id
                    )}
                    renderItem={renderYourOrder}
                    keyExtractor={item => item.id.toString()}
                />
                <Button color="#CF04DC" title="Remove" onPress={() => this.props.removeMenuItem(this.props.menuItems.id)}>
                    Remove
                </Button>
            </View>
            :
            <Text style={styles.elseText}>Your order will appear here once you place it!</Text>
            }
            </>
        )
    }
 }

const styles = StyleSheet.create({
    title: {
        fontSize: 35
    },
    subtitle: {
        fontSize: 18
    },
    avatar: {
        height: 125,
        width: 150,
    },
    elseText: {
        marginTop: 75,
        fontSize: 18,
        textAlign: 'center'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(YourOrder)