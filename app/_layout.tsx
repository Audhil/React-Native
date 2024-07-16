//  this layout will be available in all screens of the app, like header, footer
import React, { useEffect } from 'react'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font';

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
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },[fontsLoaded, error]);

  if(!fontsLoaded && !error) return null;

  return (
  <Stack>
    <Stack.Screen name="index" options={{headerShown: false}} />
  </Stack>
  )
}

//  it'll prevent splash screen to get hide before assets are loaded
SplashScreen.preventAutoHideAsync();

export default RootLayout