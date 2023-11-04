import React from 'react';
import { View,Text,ScrollView } from 'react-native';
import TopMost from '../components/TopMost';
import SubTopMost from '../components/SubTopMost';
import Category from '../components/Category';
import Carousel from '../components/Carousel';
import Services from '../components/Services';
import Deals from '../components/Deals';
import Brands from '../components/Brands';



const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}>
      <TopMost />
      <SubTopMost />
      <Category/>
      <Carousel />
      <Services />
      <Deals />
      <Brands />

    </ScrollView>
  );
 
}

export default HomeScreen;

