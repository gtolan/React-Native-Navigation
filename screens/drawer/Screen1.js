import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {styles} from '../../styles/tabsStyles.js';

console.log(styles, "style")
const Screen1 = props => {
    return( <View style={styles.container}>
        <Text>Screen 1</Text>
    </View>
    )
}


export default Screen1;