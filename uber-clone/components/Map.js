import React, { useEffect, useRef } from "react"
import MapView, { Marker } from "react-native-maps"
import MapViewDirections from "react-native-maps-directions"
import { useDispatch, useSelector } from "react-redux"
import { selectDestination, selectOrigin, setTravelTimeInformation } from "../slices/navSlice"

const Map = () => {
   const origin = useSelector(selectOrigin)
   const destination = useSelector(selectDestination)
   const dispatch = useDispatch()
   const mapRef = useRef(null)

   useEffect(() => {
      if(!origin || !destination){
         return
      }
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
         edgePadding: {
            top: 50,
            left: 50,
            right: 50,
            bottom: 50,
         }
      })
   }, [origin, destination])

   useEffect(() => {
      if(!origin || !destination){
         return
      }

      const getTravelTime = async () => {
         const URL = fetch(`test.com`)
            .then(res => res.json())
            .then(data => {
               dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
            })
      }

      getTravelTime()
   }, [origin, destination, "API"])

   return (
      <MapView
         ref={mapRef}
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
         {origin?.destination && (
            <Marker 
               coordinate={{
                  latitude: destination.location.lat,
                  longitude: destination.location.long,
               }}
               title="Destination"
               description={destination.description}
               identifier="destination"
            />
         )}
      </MapView>
   )
}

export default Map