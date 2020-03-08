import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, AsyncStorage,SafeAreaView, View, Dimensions} from 'react-native';
import Card from './card';
import {
  PublisherBanner,
} from 'expo-ads-admob';
// import * as Haptics from 'expo-haptics';

class App extends Component {
  state = {
    data: "",
    key : [],
    num : []
  }

  bannerError = () => {
    console.log('banner ad not loading')
  }

  bannerAdReceived = () => {
    console.log('banner ad received')
  }

  componentDidMount = ()=> {
    AsyncStorage.getAllKeys((err, keys)=> {
      if(!err){
        for (var i in keys){
          var keyJoined = this.state.key.concat(keys[i]);
          this.setState({ key: keyJoined })
          AsyncStorage.getItem(keys[i], (err, value )=>{
            var numJoined = this.state.num.concat(value);
            this.setState({ num: numJoined })
          })
        }
      }else{
      console.log("err")
    }
  })
    

  //   AsyncStorage.getItem("제목", (err, value )=>{
  //     if (err == null){
  //       this.setState({
  //         data : JSON.parse(value)
  //       }) 
  //     }else{
  //       console.log(err)
  //     }
  //   }
  // )
  }
  _allList = () => {
    var items = []
    for (var i in this.state.key){
      items.push(<Card kei = {this.state.key[i]} num = { this.state.num[i]}/>)
    }
    return items
  }

  resetGo =() => {
    AsyncStorage.clear() 
    this.props.navigation.navigate("Main")
  }
    
  render(){


  return (
    <View style = {{ flex: 1,}}>
      {this._allList()}
      <TouchableOpacity style = {styles.card} onPress = {this.resetGo}>
          {this.state.key[0] ? <Text style = {styles.text}>Reset</Text> : <Text style = {styles.noText}>We Don't Have Any Data!</Text>}
      </TouchableOpacity>

      <View style = {styles.ad}>
        <PublisherBanner
                  bannerSize="banner"
                  adUnitID="ca-app-pub-4762525031363209/3582886473" // Test ID, Replace with your-admob-unit-id
                  onDidFailToReceiveAdWithError={this.bannerError}
                  onAdViewDidReceiveAd = {this.bannerAdReceived} 
        />
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  ad : {
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10
    
  },
  noText : {
    fontSize : 20,
    color : 'gray'
  },
  card : {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 10,
    marginHorizontal : 10,
    borderColor : 'gray',
    borderWidth : 3,
    borderRadius : 10,
  },
  text : {
    fontSize : 20,
    color : 'red'
  }

});

export default App;
