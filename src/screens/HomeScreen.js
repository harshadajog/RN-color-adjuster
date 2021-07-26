import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
   <Text style={styles.text}>Hi there!</Text>
   
    <TouchableOpacity onPress  ={() => navigation.navigate('Square')}>
      <Text>Go to Square Screen</Text>
    </TouchableOpacity>

  </View>
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
