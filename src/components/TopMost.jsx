import React from 'react';
import { View ,Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


// import { Container } from './styles';

const TopMost = () => {
  return 
  <View>
     <LinearGradient 
        start={{x:0, y:0}} 
        end={{x:1,y:0}}
        colors={['#88dae0', '#98e1d6', '#9ee4d4']}>
        <Text>TopMost</Text>
   
    </LinearGradient>
</View>;
}

export default TopMost;