import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import { requestPermissionsAsync } from "expo-location";

const TrackCreateScreen = () => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    async function startWatching() {
      try {
        await requestPermissionsAsync();
      } catch (e) {
        setErr(e);
      }
    }
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location permission</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
