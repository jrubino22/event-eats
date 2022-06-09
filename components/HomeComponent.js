import React, { Component } from 'react';
import { ScrollView, Text, Image } from 'react-native'
import { Card, Icon, Button } from 'react-native-elements'
import { EVENT_LIST } from '../shared/event-list';

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            eventList: EVENT_LIST
        }
    }

    static navigationOptions = {
        title: 'Home',
        tabBarIcon: () => (
            <Icon
                name="home"              
                color="black"
            />
        )
    }

    render() {
        const {navigate} = this.props.navigation
        const specificEvent = this.state.eventList.filter(x => x.id === 0)[0]
        return (
            <ScrollView>
                <Card
                    title={`Welcome to the \n${specificEvent.name2} & ${specificEvent.name1} ${specificEvent.type}!`}
                    image={specificEvent.image}
                    imageStyle={{height: 445}}>
                    <Text style={{ marginBottom: 10 }}>
                        {`${specificEvent.date} \n${specificEvent.time} \n${specificEvent.address}`} 
                    </Text>
                    <Button
                        // icon={<Icon name='fa-utensils' type='font-awesome' color='#ffffff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: "#CF04DC" }}
                        title='View Dinner Menu' 
                        onPress={() => navigate('Menu')}/>
                    
                </Card>
            </ScrollView>
        )
    }
}

export default Home