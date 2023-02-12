import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './login';

const MainStack = createNativeStackNavigator();

const HomeScreen = props => {
  return (
    <Login/>
  );
};

function LoginScreen() {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: '',
            headerTitleStyle: {
              color: '#B22222',
            },
            headerStyle: {
              backgroundColor: '#708090',
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}


/// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoginScreen;
