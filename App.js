/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';

 
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentWillMount(){

    var config = {
      apiKey: "AIzaSyAwr-VeJVOlw4OfuQrK9JO5pyUWWxKM3vs",
      authDomain: "awesomeproject-27a2b.firebaseapp.com",
      databaseURL: "https://awesomeproject-27a2b.firebaseio.com",
      projectId: "awesomeproject-27a2b",
      storageBucket: "awesomeproject-27a2b.appspot.com",
      messagingSenderId: "315623273717"
    };
    firebase.initializeApp(config);
    firebase.database().ref("users/001").set(
      {
        name: "Imran",     
        age: "23" 
      }       
    ).then(()=> {
      console.log("inserted");
     }).catch((error)=>{
       console.log("error");  
    });      
    firebase.database().ref('users').once('value', (data)=>{
    console.log(data.toJSON());
  })
  
    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
