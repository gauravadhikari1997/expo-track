import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-elements";
import TrackContext from "../context/TrackContext";
import { AsyncStorage } from "react-native";
import { SafeAreaView } from "react-navigation";

const AccountScreen = ({ navigation }) => {
  const appContext = useContext(TrackContext);
  async function handleSignOut() {
    await AsyncStorage.removeItem("token");
    appContext.dispatch({
      type: "SIGN_OUT",
    });
    navigation.navigate("Signin");
  }
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text>AccountScreen</Text>
      <Button title="Sign Out" onPress={handleSignOut}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
