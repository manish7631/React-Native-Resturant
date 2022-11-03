import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}> 
    <View style={{marginTop:10, padding:15, backgroundColor:"white"}}>
      <ResturantImage/>
      <RestaurantInfo/>
    </View>
    </TouchableOpacity>
  )
}

const ResturantImage = () => (
    <>
    
     
    <Image source={{
        uri:"https://c.ndtvimg.com/2020-08/gl1sqn7_restaurant_625x300_12_August_20.jpg"
    }} 
    style={{width:"100%", height:180}}
    />
     <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
    </>
)


const RestaurantInfo = () => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Resturant Manish Karan's</Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text> 4.9</Text>
      </View>
    </View>
  );