import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { AsyncStorage } from "react-native";
import { SafeAreaView } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

import TrackContext from "../context/TrackContext";
import Spacer from "../components/Spacer";

const AccountScreen = ({ navigation }) => {
  const appContext = useContext(TrackContext);
  async function handleSignOut() {
    await AsyncStorage.removeItem("trackAppToken");
    appContext.dispatch({
      type: "SIGN_OUT",
    });
    navigation.navigate("Signin");
  }
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text style={styles.heading} h3>
          My Account
        </Text>
      </Spacer>
      <Spacer>
        <Button
          title="My Tracks"
          onPress={() => navigation.navigate("TrackList")}
        />
      </Spacer>
      <Spacer>
        <Button title="Sign Out" onPress={handleSignOut}></Button>
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    title: "Account",
    tabBarIcon: <MaterialIcons name="settings" size={24} color="black" />,
  };
};

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
  },
});

export default AccountScreen;
