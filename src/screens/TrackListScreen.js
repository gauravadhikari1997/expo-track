import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
