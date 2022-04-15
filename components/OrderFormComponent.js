import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, Picker, Button, Alert} from 'react-native'
import { ListItem, Card } from 'react-native-elements'
import { MENU_ITEMS } from '../shared/menu-items'
import { connect } from 'react-redux';
import { addMenuItem } from '../redux/ActionCreators'

const mapStateToProps = state => {
    return {
        menuItems: state.menuItems,
        addMenuItem: state.addMenuItem
    }
}

const mapDispatchToProps = {
    addMenuItem: (menuItemId, option1, option2) => (addMenuItem(menuItemId, option1, option2))
}

function RenderItem({ menuItem }) {
    if (menuItem) {
        return (
            <Card
                featuredTitle={menuItem.name}
                image={ menuItem.image }>
                <Text style={{ margin: 10 }}>{menuItem.description}</Text>
            </Card>
        )
    }
    return <View />
}

class OrderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: MENU_ITEMS,
            option1: "",
            option2: ""
        }
    }

    handleSubmit(menuItemId) {
        Alert.alert("Your order has been placed!")
        this.props.addMenuItem(menuItemId, this.state.option1, this.state.option2)
        console.log(this.props.option1)
    }

    setStateFromChild = (itemValue) => {
        this.setState({ option2: itemValue })
    }

    static navigationOptions = {
        title: 'Place Order'
    }

    render() {


        const menuItemId = this.props.navigation.getParam('menuId')
        const menuItem = this.state.menuItems.filter(menuItem => menuItem.id === menuItemId)[0]
        return (
            <>
                <RenderItem menuItem={menuItem} />
                <ScrollView>
                    <View>
                        <Text>{menuItem.options.option1.question}</Text>
                        <Picker
                            selectedValue={this.state.option1}
                            onValueChange={itemValue => this.setState({ option1: itemValue })}
                        >
                            <Picker.Item label={menuItem.options.option1.choices.choice1} value={menuItem.options.option1.choices.choice1} />
                            <Picker.Item label={menuItem.options.option1.choices.choice2} value={menuItem.options.option1.choices.choice2} />
                            <Picker.Item label={menuItem.options.option1.choices.choice3} value={menuItem.options.option1.choices.choice3} />
                            <Picker.Item label={menuItem.options.option1.choices.choice4} value={menuItem.options.option1.choices.choice4} />
                        </Picker>
                        {menuItem.options.option2 &&
                            <>
                                <Text>{menuItem.options.option2.question}</Text>
                                <Picker
                                    selectedValue={this.state.option2}
                                    onValueChange={itemValue => this.setState({ option2: itemValue })}
                                >
                                    <Picker.Item label={menuItem.options.option2.choices.choice1} value={menuItem.options.option2.choices.choice1} />
                                    <Picker.Item label={menuItem.options.option2.choices.choice2} value={menuItem.options.option2.choices.choice2} />
                                    <Picker.Item label={menuItem.options.option2.choices.choice3} value={menuItem.options.option2.choices.choice3} />
                                </Picker>
                            </>
                        }
                    </View>
                    <View>
                        <Button
                            title="Place Order"
                            buttonStyle={{ marginRight: 4, backgroundColor: "#CF04DC" }}
                            onPress={() => this.handleSubmit(menuItem.id)}
                        />
                    </View>
                </ScrollView>
            </>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);