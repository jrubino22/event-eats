import React from 'react';
import {ActivityIndicator, View, Text} from 'react-native'

function Loading() {
    return(
        <View>
            <ActivityIndicator size='large' color='#5637DD' />
            <Text>Loading</Text>
        </View>
    )
}

export default Loading