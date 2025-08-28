
import { Text, View } from 'react-native';
import { Colors } from '../../constant/Colors';

export default function profile() {
  return (
      <View style ={{
          padding:25,
          paddingTop:55,
          backgroundColor:Colors.WHITE,
          height:'100%'
      }}>
            <Text style={{
              color:"#006A4E",
              fontFamily:'outfit-bold',
              fontSize:30
            }}>Profile</Text>
     
    </View>
  )
}