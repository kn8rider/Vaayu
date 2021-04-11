import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      textEmail: '',
      textPass: '',
    };
  }
  render() {
    return (
      <View style={styles.mainCointainer}>
        <Icon style={styles.icon} name="login" size={70} color="blue" />
        <Text style={styles.textHeader}>Please Login</Text>
        <TextInput
          style={styles.inputContainer}
          label="Email"
          mode="outlined"
          value={this.state.textEmail}
          onChangeText={val => this.setState({textEmail: val})}
        />
        <TextInput
          style={styles.inputContainer}
          label="Password"
          mode="outlined"
          value={this.state.textPass}
          onChangeText={val => this.setState({textPass: val})}
        />
        <Button
          style={styles.btnSignup}
          mode="contained"
          color="#000"
          uppercase={false}
          onPress={() => console.log('Pressed')}>
          login
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainCointainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: '10%',
  },
  inputContainer: {
    marginVertical: 20,
    borderRadius: 15,
  },
  textOr: {
    fontSize: 20,
    color: 'black',
    marginVertical: 20,
    alignSelf: 'center',
  },
  btnSignup: {
    marginVertical: 20,
    borderRadius: 15,
  },
  btnLogin: {
    marginVertical: 20,
    borderTopLeftRadius: 15,
  },
  textHeader: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  icon: {
    alignSelf: 'center',
  },
});

export default Login;
