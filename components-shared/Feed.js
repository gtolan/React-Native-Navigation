import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const Feed = ({navigation}) => {
    return(
    <View style={styles.container}>
        <Text>Feed</Text>
        <Button title="Go to Feed Item" onPress={() => navigation.navigate('Details')} />
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

export default Feed;