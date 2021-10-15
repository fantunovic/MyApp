import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Alert, Button, TouchableOpacity, Linking } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerWrapper}>
        <Text style={styles.headerTitle}>
          MOJA APLIKACIJA
        </Text>
      </View>

      <View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("./assets/1.jpg")}/>
        </View>
        <View style={styles.rightContainer}>
        <Image style={styles.image} source={require("./assets/2.jpg")}/>
        </View>
      </View>

      <View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
          <Button color="#6a994e" title="Livada" onPress={() => Alert.alert("Ovo je livada")}/>
        </View>
        <View style={styles.rightContainer}>
          <Button color="#6a994e" title="Šuma" onPress={() => Alert.alert("Ovo je šuma")}/>
        </View>
      </View>

      <View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
        <Image style={styles.image} source={require("./assets/3.jpg")}/>
        </View>
        <View style={styles.rightContainer}>
        <Image style={styles.image} source={require("./assets/4.jpg")}/>
        </View>
      </View>

      <View style={styles.jumbotron}>
        <View style={styles.leftContainer}>
          <Button color="#6a994e" title="Jezero" onPress={() => Alert.alert("Ovo je jezero")}/>
        </View>
        <View style={styles.rightContainer}>
          <Button color="#6a994e" title="Rijeka" onPress={() => Alert.alert("Ovo je rijeka")}/>
          

        </View>
      </View>

    

      

     

      <TouchableOpacity style={styles.touchableCountainer} onPress={() => Alert.alert("Valjda je to sve")}>
      <Text style={styles.textStyle}>KRAJ APLIKACIJE</Text>
      </TouchableOpacity>

    </View>




  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7c957',


  },

  headerWrapper: {
    padding: 10,
    margin: 30,
    borderBottomWidth: 5,
    borderBottomColor: "white"
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 35,
    color: "white",
   
  },

  jumbotron: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10
  },

  leftContainer: {
 
    

  },

  rightContainer: {
 
    

  },

  rightContainer: {
 
    

  },

  leftText: {
    color: "white",
    fontSize: 25,
    

  },

  rightText: {
    fontSize: 25,
    color: "white",

  },

  image: {
    width: 175,
    height:175

  },

  touchableCountainer: {
    margin: 20,
    backgroundColor: "#6a994e",
    padding: 20
  },

  textStyle: {
    fontSize: 20,
    color: "white",
    textAlign: "center"
  },


});
