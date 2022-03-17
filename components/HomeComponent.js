import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import EVENT_LIST from '../shared/event-list';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventList: EVENT_LIST
        }
    }

    static navigationOptions = {
        title: 'Home',
        tabBarIcon: () => {
            <Icon
                name='house'
                type='font-awesome'
                iconStyle={{ color: white }}
            />
        }
    }

    render() {
        return (
            <View>
                <Card>
                    <Card.Title>{this.state.eventList.name1}
                    </Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{uri: this.state.event.image}}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component
                        structure than actual design.
                    </Text>
                    <Button
                        icon={
                            <Icon
                                name="code"
                                color="#ffffff"
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                        }}
                        title="VIEW NOW"
                    />
                </Card>
            </View>
        )
    }

}

export default Home