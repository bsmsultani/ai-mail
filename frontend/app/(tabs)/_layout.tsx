import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({focused}) => (
          <Ionicons
            name='home'
            size={34}
            color={focused ? 'green' : 'gray'}
          />
        )
      }} />
      <Tabs.Screen name='profile'
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name='person'
              size={34}
            />
          )
        }}  
      /> 
    </Tabs>
  )
}

export default _Layout