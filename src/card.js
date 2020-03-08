import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

// import * as Haptics from 'expo-haptics';

class Card extends Component {
    
  render(){
  return (
    <View style = {styles.card}>
      <Text style={styles.keyText}> {this.props.kei} </Text>
      <Text style={styles.numText}> {">>>   " + this.props.num + "   <<<"}   </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
    card : {
        marginTop : 10,
        marginHorizontal : 10,
        borderColor : 'black',
        borderWidth : 3,
        borderRadius : 10,
    },
    keyText: {
        fontSize : 30,
        marginBottom : 5,
    },
    numText : {
        fontSize : 20,
        marginBottom : 5,
        color : 'gray'

    }

});

export default Card;
