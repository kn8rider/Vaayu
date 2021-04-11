import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Login from './Login';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      textUser: '',
      textEmail: '',
      textPass: '',
    };
  }
  render() {
    return (
      <View style={styles.mainCointainer}>
        <Icon style={styles.icon} name="account-plus" size={70} color="blue" />
        <Text style={styles.textHeader}>Please Register here</Text>
        <TextInput
          style={styles.inputContainer}
          label="Username"
          mode="outlined"
          color="#000"
          value={this.state.textUser}
          onChangeText={val => this.setState({textUser: val})}
        />
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
          onPress={() => console.log('pressed')}>
          sign up using email
        </Button>
        <Text style={styles.textOr}>or </Text>

        <Button
          style={styles.btnLogin}
          mode="outlined"
          color="#000"
          uppercase={false}
          onPress={() => console.log('pressed')}>
          Existing User ?
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
    marginVertical: 10,
  },
  textOr: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  btnSignup: {
    marginTop: 30,
    borderRadius: 15,
  },
  btnLogin: {
    marginVertical: 20,
    borderTopLeftRadius: 15,
    borderColor: '#000',
    borderWidth: 2,
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

export default Register;
