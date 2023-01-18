import { View, Text } from "react-native"
import React from "react"
import MapView from "react-native-maps"

const Map = () => {
   return (
      <MapView
         className="flex-1"
         initialRegion={{
            latitude: 1,
            longitude: 1,
            latitudeDelta: 1,
            longitudeDelta: 1
         }}
      />
   )
}

export default Map