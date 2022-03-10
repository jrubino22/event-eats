import React from 'react';
import {Text, FlatList} from 'react-native'
import {ListItem} from 'react-native-elements'


function Menu(props) {

    const renderMenuItem = ({item}) => {
        return (
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{source: require('./images/steak-dinner.jpg')}}
            />
        )
    }

    return (
        <FlatList
            data={props.menuItems}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id.toString()}
        >
        </FlatList>
    )
}

export default Menu;