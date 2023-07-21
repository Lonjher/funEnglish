import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Modules from './screens/Modules';
import SplashScreen from './screens/SplashScreen';
import Course from './screens/Course';
import Tutor from './screens/Tutor';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Course') {
          iconName = focused ? 'book' : 'book-outline';
        } else if (route.name === 'Modules') {
          iconName = focused ? 'albums' : 'albums-outline'
        } else if (route.name === "Tutor") {
          iconName = focused ? 'person' : 'person-outline'
        } // add if needed
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'green',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name='Home' options={{ title: 'Home Screen' }} screenOptions={{headerShown: false}} component={Home} />
      <Tab.Screen name='Course'  screenOptions={{headerShown: false}} component={Course}/>
      <Tab.Screen name='Modules' component={Modules} />
      <Tab.Screen name='Tutor' component={Tutor}/>
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='SplashScreen'
        screenOptions={{headerShown: false}}>
          <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen name='Utama' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

