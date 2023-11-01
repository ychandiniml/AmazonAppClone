import React from 'react';
import { View,Text } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';
import TopMost from '../components/TopMost';
import SubTopMost from '../components/SubTopMost';



const HomeScreen = () => {
  return (
    <View>
      <TopMost />
      <SubTopMost />
    </View>
  );
 
}

export default HomeScreen;

