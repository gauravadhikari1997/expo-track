// import "../_mocklocation";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Map from "../components/Map";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { Text, Input, Button } from "react-native-elements";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import Spacer from "../components/Spacer";

const TrackCreateScreen = ({ isFocused }) => {
  const [err, setErr] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [recording, setRecording] = useState(false);
  const [locations, setLocations] = useState([]);
  const [name, setName] = useState("");
  const [sub, setSub] = useState(null);

  useEffect(() => {
    async function startWatching() {
      await requestPermissionsAsync();
      const subscriber = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10,
        },
        (location) => {
          setCurrentLocation(location);
          if (recording) {
            setLocations((locations) => [...locations, location]);
          }
        }
      );
      setSub(subscriber);
    }

    if (isFocused || recording) {
      startWatching();
    } else {
      sub.remove();
    }
  }, [isFocused, recording]);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h3>Create a Track</Text>
      </Spacer>
      <Map locations={locations} currentLocation={currentLocation} />
      {err ? <Text>Please enable location permission</Text> : null}
      <Spacer>
        <Input
          value={name}
          onChangeText={(newText) => setName(newText)}
          placeholder="Enter track name"
        />
        {recording ? (
          <Button title="Stop" onPress={() => setRecording(false)} />
        ) : (
          <Button title="Record" onPress={() => setRecording(true)} />
        )}
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
