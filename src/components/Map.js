import React from "react";
import { StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 28.676181929411236,
        longitude: 77.47988276634659,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      style={styles.map}
    >
      <Polyline
        coordinates={[
          {
            latitude: 28.676181929411236,
            longitude: 77.47988276634659,
          },
          {
            latitude: 28.677181929411236,
            longitude: 77.48988276634659,
          },
          {
            latitude: 28.678181929411236,
            longitude: 77.49988276634659,
          },
          {
            latitude: 28.679181929411236,
            longitude: 77.57988276634659,
          },
          {
            latitude: 28.679981929411236,
            longitude: 77.59988276634659,
          },
        ]}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
