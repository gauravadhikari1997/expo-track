import React, { useState, useContext } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem, Text } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import tracker from "../api/tracker";
import TrackContext from "../context/TrackContext";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
  const appContext = useContext(TrackContext);
  const [tracks, setTracks] = useState([]);
  async function fetchTracks() {
    const response = await tracker.get("tracks");
    setTracks(response.data);
    appContext.dispatch({ type: "ADD_TRACKS", payload: response.data });
  }

  return (
    <>
      <NavigationEvents onWillFocus={fetchTracks} />

      {tracks.length > 0 ? (
        <FlatList
          data={tracks}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackDetail", { _id: item._id })
                }
              >
                <ListItem chevron title={item.name} />
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <Spacer>
          <Text h5>Oops! No track found</Text>
        </Spacer>
      )}
    </>
  );
};

TrackListScreen.navigationOptions = () => {
  return { title: "Tracks" };
};

const styles = StyleSheet.create({});

export default TrackListScreen;
