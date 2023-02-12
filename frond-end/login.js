import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

class Login extends React.Component {
  state = { username: 0, password: 0, result: 0 , rememberMe:false};
  onUsernameChange = (text) => {
    this.setState({ username: text });
  };

  onPasswordChange = (text) => {
    this.setState({ password: text });
  };

  onButtonPress = () =>
    this.setState({
      result: this.state.username,
    });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Image
         style={{
          resizeMode: 'cover',
          height: 100,
          width: 200,
        }}
            source={require('./assets/logo.png')}
          />
        </View>
        <View
          style={{
            marginHorizontal: 40,
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="  E-mail"
            onChangeText={this.onUsernameChange}
          />
        </View>
        <View style={{ marginHorizontal: 40 }}>
          <TextInput
            style={styles.input}
            placeholder="   Password"
            secureTextEntry={true}
            onChangeText={this.onPasswordChange}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.onButtonPress}
          >
            <Text style={{ color: 'white' }}>Log in</Text>
          </TouchableOpacity>
         
        </View>
        <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Text
          style={[
            styles.result,
            { color: this.state.result ? 'green' : 'black' },
          ]}
        >  
          {this.state.result
            ? "Welcome "+this.state.result
            : null}
        </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 20,
    textAlign: 'left',
  },
  btn: {
    backgroundColor: '#708090',
    width: 150,
    height: 40,
    borderRadius: 10,
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  result: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,

  },
});

export default Login;
