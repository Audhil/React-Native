//  home page / of the website
//  this layout will be available in all screens of the app, like header, footer
import React from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '@/components/CustomButton';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

const RootLayout = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center h-full items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Jack and jill went{'\n'} up the hill to fetch pail of water! with{' '}
              <Text className="text-secondary-200">Aora!</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 right-8"
              resizeMode="contain"
            />
          </View>
          <Text
            className={`text-sm font-pregular text-gray-100 mt-7 text-center`}
          >
            Where creativity meets innovations! embark on dsfklsndfksb
            qejhrb3eqjbrqw
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push('/sign-in');
            }}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default RootLayout;
