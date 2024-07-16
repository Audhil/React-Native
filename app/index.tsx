//  home page / of the website
//  this layout will be available in all screens of the app, like header, footer
import { Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-pblack'>Aora!
      </Text>
      <StatusBar style='auto'/>
      <Link href="/home" style={{color: 'red'}}>Go to Home</Link>
    </View>
  )

}

export default RootLayout