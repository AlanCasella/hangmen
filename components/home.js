import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import photo from "../assets/hangmen.png";
import { db } from "./firebase";

export default function Home() {

  async function handlePressStart() {
    await db.collection("Users").doc().set({Name: "Prueba", GamesPlayed: 1, Password: "123456"})
  }

  async function handlePressStats() {
    var usuario = await getData()
    usuario.forEach(user => {

      console.log(user.data(), "SOYT LA DATA");
    })
  }

  async function getData() {
    const users = await db.collection("Users").get()
    return users.docs
  }

  function handlePress() {
    console.log("Todavia nada")
  }

  return (
    <View style={styles.container}>
      {/* <ImageBackground source={photo} style={styles.image}> */}
      <TouchableOpacity onPress={handlePressStart} style={styles.divs}>
        <Text style={styles.button}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress} style={styles.divs}>
        <Text style={styles.button}>Options</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePressStats} style={styles.divs}>
        <Text style={styles.button}>Stats</Text>
      </TouchableOpacity>
      {/* </ImageBackground> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderStyle: "dashed",
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 8,
    width: "60%",
    backgroundColor: "azure",
  },
  divs: {
    padding: 30,
    margin: 5,
  },
  button: {
    borderStyle: "solid",
    borderWidth: 5,
    borderColor: "red",
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "coral",
    color: "grey",
  },
  image: {
    width: "100%",
    height: "90%",
  },
});
