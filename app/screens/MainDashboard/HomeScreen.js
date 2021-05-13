import React from "react";
import { StyleSheet, Text, View, Button, ScrollView, FlatList, TouchableOpacity, Image, ImageBackground } from "react-native";

import firebase from "firebase/app";
import "firebase/auth";

import {  icons,Data } from '../../config';
import {COLORS,FONTS,SIZES} from '../../config/theme'
import images from "../../config/images";
import { shadow } from "react-native-paper";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import dummyData from "../../config/data";


const HomeScreen = () => {
  //   firebase gettoken function
  const getToken = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.getIdToken().then((data) => {
          console.log(data);
        });
      }
    });
  };

  // currencies data baad me api se lena hai
   // build a usestate 
  const [trending, setTrending] = React.useState(dummyData.trendingCurrencies)
  //  dummyData.trendingCurrencies is dummy data of currencies

  // header function
  function header() {

    //this is my flatlist's render function
    const renderItem =({item,index})=>{
      <TouchableOpacity
        style={{
          width :180,
          paddingVertical:27,
          paddingHorizontal:27,
           backgroundColor:COLORS.white,
           marginLeft:index==0?27:0,
           marginRight:10,
           borderRadius:10,
          
        }}
      >

      <View>
           <View>
                {/* <Image
                  source={item.image}
                  resizeMode='cover'
                  style={{
                     width :25,
                     height:25,
                  }}
                />      */}
                 <Text>{item.id}</Text>
           </View>
      </View>
      </TouchableOpacity>
    }

    //end of renderItem
    return (
      <View
        style={
          {
            width: '100%',
            height: 200,
          }
        }
      >

        <ImageBackground
          source={images.ban}
          resizeMode='cover'
          style={
            {
              flex: 1,
              alignItems: 'center'

            }
          }
        >
        {/* header balance niche */}
              <View
                style={{ alignItems: 'center', justifyContent: 'center', backgroundColor:'transparent' ,width:'75%' ,height:100,marginVertical:33,}}
              >
                <Text style={{color:COLORS.white}}>Your Current Balance</Text>
                <Text style={{color:COLORS.white , fontSize:22.5,}}>RS {dummyData.portfolio.balance}</Text>
                <Text style={{fontWeight:'bold'}}>{dummyData.portfolio.changes} Last 24 hours</Text>
              </View> 

              {/* // bichhh vale.....dabbe */}
              <View>
              <Text >Boxes</Text>
              <FlatList
                data = {trending}
                renderItem={renderItem}
                keyExtractor={item =>item.id }
                horizontal
                showsHorizontalScrollIndicator={false}
              />
              </View>

        </ImageBackground>

      </View>
    )
  }

  const coinbox = () => {
    return (
      <View
        style={styles.coinbox}
      >
    
      </View>
    )
  }
  const coinbox2 = () => {
    return (
      <View
        style={styles.coinbox2}
      >
    
      </View>
    )
  }
  const messagebox = () => {
    return (
      <View
        style={styles.messagebox}
      >
    
      </View>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>

        {header()}
        {coinbox()}
        {coinbox2()}
        {coinbox()}
        {coinbox2()}
        {coinbox()}
        {coinbox2()}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    // alignItems: "center",
    // justifyContent: "center",
    paddingBottom: 130,

  },
  coinbox: {
    width: '90%',
    height: 100,
    backgroundColor: COLORS.primary,
    marginVertical: 10,
    marginHorizontal: 20,
    opacity:0.72,
    borderRadius:SIZES.radius,
  },
  coinbox2: {
    width: '90%',
    height: 100,
    backgroundColor: COLORS.primary,
    marginVertical: 10,
    marginHorizontal: 20,
    opacity:0.9,
    borderRadius:SIZES.radius,
  },
  messagebox: {
    width: '90%',
    height: 100,
    backgroundColor: COLORS.primary,
    marginVertical: 10,
    marginHorizontal: 20,
    opacity:0.9,
    borderRadius:SIZES.radius,
  },
});





















{/* <Button onPress={() => getToken()} title="Get Token" />   
      
                        */}