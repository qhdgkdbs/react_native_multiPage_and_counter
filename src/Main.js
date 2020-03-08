import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, Dimensions} from 'react-native';
import {
  PublisherBanner,
} from 'expo-ads-admob';

import Counter from './counter'

// import * as Haptics from 'expo-haptics';

class App extends Component {
  state = {
    isVibe: true,
    showText : false,
  }

  turnVibe = () => {
    this.setState({
      isVibe : !this.state.isVibe
    })
  }

  changeShow = () => {
    this.setState({
      showText : !this.state.showText
    })
  }

  bannerError = (e) => {
    console.log(e)
  }

  bannerAdReceived = () => {
    console.log('banner ad received')
  }

  _showText = () => {
    if(this.state.showText){
      return (
        <View style = {styles.popText}>
        <Text>
          The Count is Saved.
        </Text>
        <Text>
          You can See the Date at "LIST"
        </Text>
        </View>
      )
    }else{
      return <View>
          <Text> </Text>
          <Text> </Text>
        </View>;
    }
    
  }

  render(){


  return (
    <SafeAreaView style={styles.container}>

      <Counter isVibe = {this.state.isVibe} changeShow = {this.changeShow}/>
      
      <View style = {styles.vibeBox}>

        <TouchableOpacity onPress = {this.turnVibe} style= {styles.touchBox} >
          {this.state.isVibe ? <Text> VIBE on </Text> : <Text> VIBE off </Text>}
        </TouchableOpacity>

        <TouchableOpacity onPress = {() => this.props.navigation.navigate("List")} style= {styles.touchBox} >
          <Text> list </Text>
        </TouchableOpacity>

      </View>

  
      <View> 
        {this._showText()}
      </View>
      <View style = {styles.ad}>
        <PublisherBanner
                  bannerSize="banner"
                  adUnitID="ca-app-pub-4762525031363209/7330033136" // Test ID, Replace with your-admob-unit-id
                  onDidFailToReceiveAdWithError={this.bannerError}
                  onAdViewDidReceiveAd = {this.bannerAdReceived} 
        />
      </View>
      


      
    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
  ad : {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  popText : {
    alignItems: 'center',
    justifyContent: 'center',
  },
  vibeBox : {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : "row",
    // marginTop : 10,
  },
  header:{
    alignItems: 'center',
    justifyContent: 'center',
    height : 35,
    width : Dimensions.get("screen").width,
  },
  touchBox : {
    marginTop : 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize : 30,
    borderWidth : 3,
    height : 40,
    width : 135,
    borderColor : "black",
    borderWidth : 5,
    marginHorizontal : 10,
    borderRadius : 25,
  },
  container: {
    marginTop : 10,
    flex: 1,

  },
});

export default App;
