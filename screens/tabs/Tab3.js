import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Tab3 = props => {
    return(
    <View style={styles.container}>
        <Text>Tab 3</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
});

export default Tab3;