import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Email = () => {
    const { id } = useLocalSearchParams();

    return (
        <View>
        <Text>Email {id}</Text>
        </View>
    )
}

export default Email
