import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {Formik} from 'formik'

import axios from 'axios';


const Login = ({navigation}) => {
  
  
  const handleLogin = (credentials)  => {
    const url = 'http://192.168.0.5:3000/users/signin';

    
  axios
    .post(url, credentials)
    .then((response) => {
      const result = response.data;
      const {status, data} = result;
      
      if (status !== 'SUCCESS') {
        status
      } else {
        navigation.navigate('Main', {...data[0] })
      }
    })
    .catch(error => {
      console.log(error.JSON());
    })
  };

    return (
      <View style={styles.view}>
        <View style={styles.innerView}>
          <Text style={styles.title}>Event Eats</Text>
          <Text style={styles.subtitle}>User Login</Text>

          <Formik
            initialValues={{username: '', password: ''}}
            onSubmit={(values) => {
              console.log(values);
              handleLogin(values)
            }}
          >
            {({handleChange, handleBlur, handleSubmit, values}) => <View style={styles.formArea}>
                <CustomTextInput
                  label="Username"
                  placeholder="example"
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                />
                <CustomTextInput
                  label="Password"
                  placeholder=" * * * * * *"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}
                  onPress={handleSubmit}
                >
                  <Text>Login</Text>
                </TouchableOpacity>
              </View>}
          </Formik>
        </View>
      </View>
    );

}

const CustomTextInput = ({label, icon, ...props}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput style={styles.inputFields} {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 25,
    paddingTop: 20
  },
  innerView: {
    flex: 1,
    width: 400,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5
  },
  subtitle: {
    fontSize: 17,
    marginBottom: 20,
    letterSpacing: 1,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  formArea: {
    width: '90%'
  },
  inputFields: {
    backgroundColor: '#C6D3D2',
    padding: 15,
    paddingLeft: 35,
    paddingRight: 55,
    height: 65,
    marginBottom: 10,
  },
  button: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60
  },
  error: {
    textAlign: 'center',
    fontSize: 14
  }
})

export default Login

