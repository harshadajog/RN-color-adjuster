import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
   <Text style={styles.text}>Hi there!</Text>
   <Button 
    onPress  ={() => navigation.navigate('Components')}
    title="Go to components Demo" />

    <TouchableOpacity onPress  ={() => navigation.navigate('List')}>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress  ={() => navigation.navigate('Image')}>
      <Text>Go to Image Screen</Text>
    </TouchableOpacity>
  </View>
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
