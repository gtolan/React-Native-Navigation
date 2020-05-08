import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, PanResponder} from 'react-native';




const Details = ({navigation}) => {

    const [movement, setMovement] = useState('');


    const panResponder = PanResponder.create({
        // Ask to be the responder:
      
       onStartShouldSetPanResponder: (evt, gestureState) => true,
       onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
       onMoveShouldSetPanResponder: (evt, gestureState) => true,
       onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    
       onPanResponderGrant: (evt, gestureState) => {
         // The gesture has started. Show visual feedback so the user knows
         // what is happening!
         // gestureState.d{x,y} will be set to zero now
         console.log('ggrabt')
         setMovement('start');
       },
       onPanResponderMove: (evt, gestureState) => {
         // The most recent move distance is gestureState.move{X,Y}
         // The accumulated gesture distance since becoming responder is
         // gestureState.d{x,y}
         console.log('move');
         setMovement('move');
       },
       onPanResponderTerminationRequest: (evt, gestureState) => true,
       onPanResponderRelease: (evt, gestureState) => {
         // The user has released all touches while this view is the
         // responder. This typically means a gesture has succeeded
         console.log('release');
         setMovement('release');
       },
       onPanResponderTerminate: (evt, gestureState) => {
         // Another component has become the responder, so this gesture
         // should be cancelled
         console.log('term');
         setMovement('finished');
       },
       onShouldBlockNativeResponder: (evt, gestureState) => {
         // Returns whether this component should block native components from becoming the JS
         // responder. Returns true by default. Is currently only supported on android.
         return true;
       },
       });
    


    return(
       
        <View style={styles.container} {...panResponder.panHandlers}>
            <View style={styles.containerRow}>
    <Text style={styles.text}>Pan: {movement}</Text>
        </View>
        </View>
    // <View style={styles.container}>
        
    //     {/* <Text>Details</Text>
    //     <Button title="View Bottom Tabs" onPress={() => navigation.navigate('Bottom Tabs')} />
    //     <Button title="View Top Tabs" onPress={() => navigation.navigate('Top Tabs')} /> */}
    // </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'grey',
        height:'100%'
    },
    containerRow:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        height:'100%'
    },
    text:{
        backgroundColor:'red',
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        flex:1,
        width:'100%',
        height:'100%'
    }
});

export default Details;