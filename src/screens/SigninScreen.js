import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { AsyncStorage } from "react-native";
import { NavigationEvents } from "react-navigation";

import trackerApi from "../api/tracker";
import TrackContext from "../context/TrackContext";
import Spacer from "../components/Spacer";

const SigninScreen = ({ navigation }) => {
  const appContext = useContext(TrackContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signin() {
    try {
      const response = await trackerApi.post(`/signin`, { email, password });
      await AsyncStorage.setItem("trackAppToken", response.data.token);
      appContext.dispatch({
        type: "SIGN_IN",
        payload: response.data.token,
      });
      navigation.navigate("TrackList");
    } catch (e) {
      appContext.dispatch({
        type: "ADD_ERROR",
        payload: "Something went wrong with Signin",
      });
    }
  }

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={() =>
          appContext.dispatch({
            type: "CLEAR_ERROR_MESSAGE",
          })
        }
      />
      <Spacer>
        <Text h3 style={styles.title}>
          Sign In for Track
        </Text>
      </Spacer>
      <Input
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={(newText) => setEmail(newText)}
        label="Email"
      />
      <Spacer />
      <Input
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newText) => setPassword(newText)}
        label="Password"
      />
      {appContext.state.errorMessage ? (
        <Text style={styles.error}>{appContext.state.errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title="Signin" raised onPress={signin} />
      </Spacer>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Spacer>
          <Text style={styles.link}>
            Don't have an account? Go back to Signup
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return { header: () => false };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 80,
  },
  title: {
    textAlign: "center",
    marginBottom: 20,
  },
  error: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
  link: {
    color: "#1a8cff",
  },
});

export default SigninScreen;
