import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "../components/Spacer";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={styles.title}>
          Sign Up for Track
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
      <Spacer>
        <Button title="Signup" />
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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
});

export default SignupScreen;
