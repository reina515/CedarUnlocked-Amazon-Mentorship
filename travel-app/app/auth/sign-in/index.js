import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../constant/Colors';
import { auth } from './../../../configs/FirebaseConfig';

export default function SignIn() {
    const router =useRouter();
    const navigation=useNavigation();

    const [email,setEmail]= useState();
    const [password,setPassword] = useState();
 
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })

    },[])
    const onSignIn=()=>{

        if (!email||!password){
            ToastAndroid.show=('Please Enter Email & Password',ToastAndroid.SHORT)
            return;
        }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
     const user = userCredential.user;
     router.replace('/mytrip');
      console.log(user);
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
     console.log(errorMessage,errorCode);
     if (errorCode=='auth/invalid-credential'){
        ToastAndroid.show("Invalid Credentials",ToastAndroid.SHORT)
     }
  });
    }
  
    return (
    <View style={{
        padding:25,
        paddingTop:50,
        backgroundColor:Colors.WHITE,
        height:'100%',
        marginTop:60
    }}> <TouchableOpacity onPress={()=>
        router.back()}>
        <Ionicons name="chevron-back" size={24} color="black" />
    </TouchableOpacity>
    
      <Text style={{
        marginTop:30,
        fontFamily:'outfit-bold',
        fontSize:30
      }}>Let's Sign You In</Text>
        <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:20
      }}>Welcome Back</Text>
        <Text style={{
        fontFamily:'outfit',
        fontSize:30,
        color:Colors.GRAY,
        marginTop:10
      }}>You've been missed !</Text>
    
    <View style= {{
        marginTop:50
    }}>
        <Text style={{
            fontFamily:'outfit'
        }}>Email:</Text>
            <TextInput
             style={styles.input} 
             onChangeText={(value)=>setEmail(value)} 
             placeholder='Enter Your Email'/>  
            
    </View>  


    <View style= {{
        marginTop:20
    }}>
        <Text style={{
            fontFamily:'outfit'
        }}>Password:</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input} 
        onChangeText={(value)=>setPassword(value)} 
        placeholder='Enter Your Password'/>    

    </View>  
<TouchableOpacity onPress={onSignIn}
  style={{
    padding: 20,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    marginTop: 40,
  }}
>
  <Text style={{ color: Colors.WHITE, textAlign: 'center' }}>Sign In</Text>
</TouchableOpacity>

       <TouchableOpacity  onPress ={()=>router.replace('auth/sign-up')}
       style={{
        padding:20,
        backgroundColor:Colors.WHITE,
        borderRadius:15,
        marginTop:20,
        borderWidth:1
    }}>
        <Text style={{
            color:Colors.PRIMARY,
            textAlign:'center'
        }}> Sign Up</Text>
    </TouchableOpacity>

    </View>
  )
}
const styles=StyleSheet.create({
        input:{
            padding:15,
            borderWidth:1,
            borderRadius:15,
            borderColor:Colors.GRAY,
            fontFamily:'outfit'
        }
})