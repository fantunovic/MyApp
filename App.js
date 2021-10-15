import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>
          Test app header fdfdfdf
        </Text>
      </View>

      <View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
          <Text style={styles.leftText}>LEFT</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.rightText}>RIGHT</Text>
        </View>
      </View>

      <Image style={styles.image} source={{uri:"https://pbs.twimg.com/profile_images/1222824625903558657/NCjFSJkL_400x400.jpg"}}/>

      

      <View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("./assets/favicon.png")}/>
        </View>
        <View style={styles.rightContainer}>
        <Image style={styles.image} source={require("./assets/test.jpg")}/>
        </View>
      </View>

      <Button title="Naslov buttona" onPress={() => Alert.alert("Button pressed")}/>

      <TouchableOpacity style={styles.touchableCountainer} onPress={() => Alert.alert("Touchable opacity pressed")}>
      <Text style={styles.textStyle}>Touchable opacity</Text>
      </TouchableOpacity>

    </View>




  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8B4A5',


  },

  headerWrapper: {
    padding: 10,
    borderBottomWidth: 2
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 30
  },

  jumbotron: {
    flexDirection: "row",
    justifyContent: "space-between",
    

  },

  leftContainer: {
 
    backgroundColor: 'grey',

  },

  rightContainer: {
 
    backgroundColor: 'white',

  },

  rightContainer: {
 
    backgroundColor: 'white',

  },

  leftText: {
    color: "red",
    fontSize: 30

  },

  rightText: {
 

  },

  image: {
    width: 100,
    height:100

  },

  touchableCountainer: {
    margin: 20,
    backgroundColor: "white",
    padding: 20
  },

  textStyle: {
    fontSize: 20
  }

});
