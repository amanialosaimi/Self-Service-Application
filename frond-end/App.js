import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LoginScreen from './LoginScreen';

class App extends React.Component {

  
  render() {
      return (
        <LoginScreen/>
     
      )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});

export default App;
