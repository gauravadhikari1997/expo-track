import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title="Go to SigninScreen"
        onPress={() => navigation.navigate("Signin")}
      />
      <Button
        title="Go to mainFlow"
        onPress={() => navigation.navigate("mainFlow")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
