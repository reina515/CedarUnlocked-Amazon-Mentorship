
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { Text, View } from 'react-native';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { Colors } from '../../constant/Colors';

export default function MyTrip() {

  const [userTrips,setUserTrips]=useState([]);
  return (
    <View style ={{
        padding:25,
        paddingTop:55,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
      <View style={{
        display :'flex',
        flexDirection:'row',
        alignItems:"flex-end",  
        justifyContent:'space-between'

      }}>
      <Text style={{
        color:"#006A4E",
        fontFamily:'outfit-bold',
        fontSize:29
      }}>My Trips</Text>
      <Ionicons name="add-circle-outline" size={30} color="black" />
      </View>
      {userTrips?.length==0? <StartNewTripCard/>:null}
    </View>
  )
}