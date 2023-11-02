import React from 'react';
import { View,Text } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import TopMost from '../components/TopMost';
import SubTopMost from '../components/SubTopMost';
import Category from '../components/Category';



const HomeScreen = () => {
  return (
    <View>
      <TopMost />
      <SubTopMost />
      <Category/>
    </View>
  );
 
}

export default HomeScreen;

