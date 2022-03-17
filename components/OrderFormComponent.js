import React, {Component} from 'react';
import {Text, View, ScrollView, StyleSheet, Picker, Button} from 'react-native'
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

function SecondPicker(props){
    const menuItem = props.menuItem
    const option2 = props.option2
    
    if(menuItem.options.option2) {
        return (
        <>
        <Text>{menuItem.options.option2.question}</Text>
        <Picker
            selectedValue={option2}
            onValueChange={(selectedValue) => props.setStateFromChild(selectedValue)}
        >
            <Picker.item label={menuItem.options.option2.choices.choice1} value={menuItem.options.option2.choices.choice1}/>
            <Picker.item label={menuItem.options.option2.choices.choice2} value={menuItem.options.option2.choices.choice2}/>
            <Picker.item label={menuItem.options.option2.choices.choice3} value={menuItem.options.option2.choices.choice3}/>
        </Picker>
        </>
        )
    } else return null
}


class OrderForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuItems: MENU_ITEMS,
            option1: null,
            option2: null
        }
    }

    

    setStateFromChild = (itemValue) => {
       this.setState({option2: itemValue})
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
                    <View>
                        <Text>{menuItem.options.option1.question}</Text>
                        <Picker
                            selectedValue={this.state.option1}
                            onValueChange={itemValue => this.setState({option1: itemValue})}
                        >
                            <Picker.item label={menuItem.options.option1.choices.choice1} value={menuItem.options.option1.choices.choice1}/>
                            <Picker.item label={menuItem.options.option1.choices.choice2} value={menuItem.options.option1.choices.choice2}/>
                            <Picker.item label={menuItem.options.option1.choices.choice3} value={menuItem.options.option1.choices.choice3}/>
                            <Picker.item label={menuItem.options.option1.choices.choice4} value={menuItem.options.option1.choices.choice4}/>
                        </Picker>
                            <SecondPicker menuItem={menuItem} option2={this.state.option2} setStateFromChild={this.setStateFromChild}/>
                    </View>
                    <View>
                        <Button
                            title="Place Order"
                        />
                    </View>
                </ScrollView>
            </>
        )
    }
}

export default OrderForm