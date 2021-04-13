import axios from 'axios';
import React, {Component} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {TextInput, Button, Snackbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {loginAction} from './Redux/index';
class Login extends Component {
  constructor() {
    super();
    this.state = {
      textEmail: '',
      textPass: '',
      secureTextEntry: true,
      iconName: 'eye',
      isLoading: false,
      visibleSnackbar: false,
    };
  }
  onIconPress = () => {
    if (this.state.secureTextEntry) {
      this.setState({secureTextEntry: false, iconName: 'eye-off'});
    } else {
      this.setState({secureTextEntry: true, iconName: 'eye'});
    }
  };

  onToggleSnackBar = () => {
    this.setState({visibleSnackbar: true});
  };

  onDismissSnackBar = () => {
    this.setState({visibleSnackbar: false});
  };

  loginFunction = () => {
    var myemail = this.state.textEmail.trim();
    var mypassword = this.state.textPass.trim();

    if (myemail.length > 0 && mypassword.length > 0) {
      this.setState({isLoading: true});
      axios
        .post('https://calm-garden-34154.herokuapp.com/api/login', {
          email: myemail,
          password: mypassword,
        })
        .then(res => {
          this.props.loginAction(res.data.userData, mypassword);
          this.props.navigation.navigate('Graph');
        })
        .catch(e => {
          this.onToggleSnackBar();
        })
        .then(() => {
          this.setState({isLoading: false});
        });
    }
  };

  render() {
    return (
      <View style={styles.mainCointainer}>
        <Icon
          style={styles.icon}
          name="account-lock"
          size={70}
          color="#00BFFF"
        />
        <Text style={styles.textHeader}> sign in</Text>
        <Text style={styles.textWlcm}>WELCOME !</Text>
        <Text style={styles.textDesc}>sign in to your account</Text>
        <TextInput
          style={styles.inputContainer}
          label="Enter your email"
          mode="outlined"
          theme={{
            colors: {
              primary: '#00BFFF',
              underlineColor: 'transparent',
            },
          }}
          value={this.state.textEmail}
          onChangeText={val => this.setState({textEmail: val})}
          right={
            <TextInput.Icon
              name="email-check"
              size={26}
              onPress={() => {
                this.onIconPress();
              }}
            />
          }
        />
        <TextInput
          style={styles.inputContainer}
          label="Enter your password"
          mode="outlined"
          secureTextEntry={this.state.secureTextEntry}
          theme={{
            colors: {
              primary: '#00BFFF',
              underlineColor: 'transparent',
            },
          }}
          value={this.state.textPass}
          onChangeText={val => this.setState({textPass: val})}
          right={
            <TextInput.Icon
              name={this.state.iconName}
              size={26}
              onPress={() => {
                this.onIconPress();
              }}
            />
          }
        />
        <ActivityIndicator
          size="large"
          color="#00BFFF"
          style={styles.activityindicator}
          animating={this.state.isLoading}
        />
        <Button
          style={styles.btnLogin}
          mode="contained"
          color="#00B2FF"
          uppercase={false}
          labelStyle={{color: 'white', fontSize: 18}}
          onPress={() => this.loginFunction()}>
          sign in
        </Button>
        <Text style={styles.textOr}>or </Text>
        <Button
          style={styles.registerbtn}
          mode="outlined"
          color="black"
          uppercase={false}
          labelStyle={{color: 'black', fontSize: 15}}
          onPress={() => this.props.navigation.navigate('Register')}>
          Don't have account? Create
        </Button>
        <Snackbar
          visible={this.state.visibleSnackbar}
          onDismiss={() => {
            this.onDismissSnackBar();
          }}>
          Something Went Wrong !
        </Snackbar>
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
    marginTop: 20,
    borderRadius: 15,
  },
  btnLogin: {
    marginTop: 40,
    borderRadius: 15,
  },
  password: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textOr: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  textHeader: {
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    fontWeight: '800',
  },
  textWlcm: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: '900',
    alignSelf: 'flex-start',
    fontFamily: 'verdana',
  },
  textDesc: {
    alignSelf: 'flex-start',
    fontWeight: '400',
  },
  icon: {
    alignSelf: 'center',
  },
  registerbtn: {
    marginVertical: 20,
    borderTopLeftRadius: 15,
    borderColor: '#00BFFF',
    borderWidth: 2,
  },
  activityindicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapDispatchToProps = dispatch => {
  return {
    loginAction: (param1, param2) => {
      dispatch(loginAction(param1, param2));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
