import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/Home'
import BookScreen from '../Screens/Book';
import SingScreen from '../Screens/Singup'
import SplashScreen from '../Screens/Splash'
import ClinicVisits from '../Screens/ClinicVisits'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const TabNavigator = () => {
  return (

      <Tab.Navigator

        screenOptions=
        {({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home'
            } else if (route.name === 'Book') {
              iconName = 'ios-add-circle-outline'
            }
            return <Icon name={iconName} size={size} color={'#636D75'} />;
          }
        })}
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#636D75',
          style: { backgroundColor: '#29A8B8' }
        }} >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Book" component={BookScreen} />
      </Tab.Navigator>
  );
}


const MainStackNavigator = (props) => {
  return (
    <NavigationContainer>
    <Stack.Navigator headerMode="none">
     <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="Signup" component={SingScreen} />
      <Stack.Screen name="ClinicVisits" component={ClinicVisits} />
      <Stack.Screen name={'AppTabs'} component={TabNavigator} />
    </Stack.Navigator>
    </NavigationContainer>
  )

}

export default MainStackNavigator