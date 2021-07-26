import React, {useState} from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const CounterScreen = (props) => {
    //Don't do the following:
    //let counter = 0;
    const [counter, setCounter] = useState(0);

    return <View>
        <Button title="Increase" 
            onPress={() => {
                // Don't do the following:
                //counter++;
                setCounter(counter+1);
            }} />
        <Button title="Decrease" 
            onPress={() => {
                // Don't do the following:
                //counter--;
                setCounter(counter-1);
            }} />
    <Text>Counter value: {counter}</Text> 
    </View> 
};

const styles = StyleSheet.create({
   
});

export default CounterScreen;