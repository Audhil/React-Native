//  home page / of the website
//  this layout will be available in all screens of the app, like header, footer
import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Index.jsx Mohammed Audhil checking
      </Text>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color: 'red'}}>Go to profile</Link>
    </View>
  )

}

export default RootLayout