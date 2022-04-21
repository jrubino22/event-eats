import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native'

function Loading() {
    return(
        <View>
            <ActivityIndicator size='large' color='#5637DD' />
            <Text>Loading</Text>
        </View>
    )
}

export default Loading