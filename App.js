import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import Feed from './components-shared/Feed'
import Details from './components-shared/Details'
import Screen1 from './screens/drawer/Screen1'
import Screen2 from './screens/drawer/Screen2'
import Screen3 from './screens/drawer/Screen3'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const BottomTabs = createMaterialBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();

export default function App() {


  // const createHomeStack = () => "";
  const createHomeStack = () => (
     <Stack.Navigator>
       <Stack.Screen 
       name="Feed" component={Feed} 
       options={{title:"Feed",
       headerTitleStyle: { alignSelf: 'center',textAlign:"center", 
       flex:1  },
       headerLayoutPreset: 'center',
       headerStyle:{backgroundColor:'black'},
       headerTintColor:'white',
       headerTitleAlign: 'center' //WORKED for android
       }} />
       <Stack.Screen name="Details" 
      options={{headerStyle:{backgroundColor:'black'},
      headerTintColor:'white',
      headerTitleAlign: 'center' //WORKED for android
    }}
       component={Details} />
       <Stack.Screen name="Bottom Tabs"
      options={{headerStyle:{backgroundColor:'black'},
      headerTintColor:'white',
      headerTitleAlign: 'center' //WORKED for android
    }}
       component={createBottomTabs} />
       <Stack.Screen 
       options={{
       headerTitleAlign: 'center' //WORKED for android
     }}
       name="Top Tabs" component={createTopTabs} />
     </Stack.Navigator>
  )

  const createTopTabs = () => (
    <TopTabs.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Details" component={Details} />
    </TopTabs.Navigator>
  )

  const createBottomTabs = () => {return(
    <BottomTabs.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Details" component={Details} />
    </BottomTabs.Navigator>
  )}
  //     // <Stack.Navigator>
  //     //   <Stack.Screen name="Feed" component={Feed} />
  //     //   <Stack.Screen name="Details" component={Details} />
  //     // </Stack.Navigator>
  
  console.log('start app')

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={createHomeStack}  />
        <Drawer.Screen name="Screen1" component={Screen1} />
        <Drawer.Screen name="Contacts" component={Screen2}  />
        <Drawer.Screen name="About" component={Screen3}  />
        </Drawer.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
