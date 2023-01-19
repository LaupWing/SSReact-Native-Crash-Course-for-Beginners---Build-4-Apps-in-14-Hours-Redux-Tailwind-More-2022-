import React from "react"
import MapView, { Marker } from "react-native-maps"
import MapViewDirections from "react-native-maps-directions"
import { useSelector } from "react-redux"
import { selectDestination, selectOrigin } from "../slices/navSlice"

const Map = () => {
   const origin = useSelector(selectOrigin)
   const destination = useSelector(selectDestination)

   return (
      <MapView
         className="flex-1"
         mapType="mutedStandard"
         initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.long,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
         }}
      >
         {origin && destination && (
            <MapViewDirections
               origin={origin.description}
               destination={destination.description}
               apikey=""
               strokeWidth={3}
               strokeColor="black"
            />
         )}
         {origin?.location && (
            <Marker 
               coordinate={{
                  latitude: origin.location.lat,
                  longitude: origin.location.long,
               }}
               title="Origin"
               description={origin.description}
               identifier="origin"
            />
         )}
      </MapView>
   )
}

export default Map