import React from 'react';
import { View ,Text, Image, ScrollView,StyleSheet} from 'react-native';
import {Categories} from '../data/Categories';


const Category = () => {
  return (
    <ScrollView 
     showsHorizontalScrollIndicator = {false}
     horizantal
     style={styles.container}>
     {Categories.map(item => (
       <View key = {item.id} style={styles.category}>
          <Image source={item.image} style={styles.imgStyle} />
          <Text style={styles.title}>{item.title}</Text>
       </View>
     ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
   container: {
     backgroundColor: '#FFFFFFFF',
     padding: 10,

   },
   imgStyle: {
    height: 50,
    width: 50,
   },
   title: {
    fontSize: 10,
    color: '#2c4341',
   },
   category: {
    paddingHorizontal: 8,
    alignItems: 'center',

   },
})

export default Category;
