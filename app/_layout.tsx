//  this layout will be available in all screens of the app, like header, footer
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

// const RootLayout = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Mohammed Audhil Jack and jill jbjb,</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container:{
//     display: 'flex',
//     alignItems:'center',
//     justifyContent: 'center',
//     flex: 1
//   }
// })

//  implementing navigations
// //  1. to render index.tsx in home screen
// const RootLayout = () => {
//   return <Slot />
// }

// //  2. to render header & footer with slot
// const RootLayout = () => {
//   return (
//   <>
//   <Text >This is Header</Text>
//   <Slot />
//   <Text >This is Footer</Text>
//   </>
//   )
// }

//  3. to use stack - alternative approachl than using Slot
const RootLayout = () => {
  return (
  <Stack>
    <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
  </Stack>
  )
}


export default RootLayout