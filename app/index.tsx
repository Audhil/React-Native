//  home page / of the website
//  this layout will be available in all screens of the app, like header, footer
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Index.jsx Mohammed Audhil Jadfdck and jill</Text>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color: 'red'}}>Go to profile</Link>
    </View>
  )

}

export default RootLayout

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    flex: 1
  }
})