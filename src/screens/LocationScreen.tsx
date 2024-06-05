import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import * as Location from "expo-location";

const LocationScreen = () => {
  // Permissies
  const [status, requestPermission] = Location.useForegroundPermissions();
  const [geoLocation, setGeoLocation] = useState<Location.LocationObject>();

  useEffect(() => {
    requestPermission();
  }, []);

  useEffect(() => {
    let locationSubscription: Location.LocationSubscription;
    (async () => {
      try {
        // Eénmalig locatie opvragen van de gebruiker
        // const location = await Location.getCurrentPositionAsync({
        //   accuracy: Location.Accuracy.Balanced,
        // });
        //  setGeoLocation(location);

        // Inschrijven op de updates van de gebruiker zijn locatie
        locationSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
          },
          (location) => {
            setGeoLocation(location);
          }
        );
      } catch (error) {
        console.log(error);
      }
    })();
    // Cleanup callback
    return () => locationSubscription.remove();
  }, []);

  return (
    <View>
      <Text>LocationScreen</Text>
      <Text style={{ fontSize: 24 }}>{JSON.stringify(geoLocation)}</Text>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
