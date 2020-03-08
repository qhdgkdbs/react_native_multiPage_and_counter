import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Vibration, SafeAreaView,TextInput, View, AsyncStorage} from 'react-native';
import Dialog from "react-native-dialog";
import { reset } from 'expo/build/AR';
// import * as Haptics from 'expo-haptics';

class App extends Component {
  state = {
    num: 0,
    dialogVisible : false,
    noStrVisible : false,
    title: 'title',
    date : '',
  }

  vibe = () => {
    var myTimer = Vibration.vibrate(1000);
    setTimeout(function() {
      Vibration.cancel();
    }, 20);
    clearTimeout(myTimer);
    
  }

  incNum = () => {
    this.setState({
      num : this.state.num + 1
    })
    {this.props.isVibe ? this.vibe() : null}
  }

  decNum = () => {
    this.setState({
      num : this.state.num -1
    })
    {this.props.isVibe ? this.vibe() : null}
  }
  
  clearNum = () => {
    this.setState({
        num : 0
      })
  }

  setNum = (text) =>{
    this.setState({
        num : text
    })
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  noStrCancel = () => {
    this.setState({ noStrVisible: false });
  }

  setNum = (text) =>{
      if(parseInt(text) == text*1){
        this.setState({
            num :text*1
        })
    }
  }

  getInputTitle = (text) => {
    this.setState({ title:text });
  }

  saveData = () => {
    let data = this.state.num + "";
    AsyncStorage.setItem(this.state.title, data, () => {
    });
    this.setState({ title: 'title', num : 0});
    this.props.changeShow()

    setTimeout(() => {
      this.props.changeShow()
    }, 1000);

  
  }

  resetText = () => {
    this.setState({
      title : " "
    })
  }


  render(){
    

  return (
    <SafeAreaView style={styles.container}>

        <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>Set Num</Dialog.Title>
            <Dialog.Description>
                If you want to change NUM, input the NUM.
            </Dialog.Description>
            <Dialog.Button label="OK" onPress={this.handleCancel} />
            <Dialog.Input 
                onChangeText = {(text) => this.setNum(text)}
            />
        </Dialog.Container>

        
        <View style = {styles.box}> 
            <Text style = {styles.num}>{this.state.num}</Text>  
        </View>
        

        <View style = {styles.upDown}>
            <TouchableOpacity onPress = {this.clearNum} style = {styles.resetAndInputBox}>
                <Text style = {styles.resetAndInputBoxText}>RESET</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={this.showDialog} style = {styles.resetAndInputBox}>
                <Text style = {styles.resetAndInputBoxText}>SET VAULE</Text>
            </TouchableOpacity>

            
        </View>
        

        <View style = {styles.upDown}>
            <TouchableOpacity onPress = {this.decNum} style = {styles.countBox}>
                <Text style = {styles.porn}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {this.incNum} style = {styles.countBox}>
                <Text style = {styles.porn}>+</Text>
            </TouchableOpacity>
        </View>
     
     <View style={styles.upDown}>
        <View style = {styles.resetAndInputBox}>
          <TextInput 
            style = {styles.InputBox}
            onFocus = {() => this.resetText()}
            onChangeText = {(text)=> this.getInputTitle(text)}
            value = {this.state.title}
          />
        </View>
        <TouchableOpacity style = {styles.resetAndInputBox} onPress = {this.saveData}>
            <Text>SAVE</Text>
          </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
  }
}

const styles = StyleSheet.create({
    center : {
      alignItems: 'center',
      justifyContent: 'center',
    },
    allBox: {
      flexDirection : 'row'
    },
    buttonBox : {
      marginTop : 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor : "black",
      borderWidth : 5,
      borderRadius : 25,
      height : 43,
      width : 70,
      marginLeft : 10

    },
    InputBoxContainer: {
      marginTop : 10,
      height : 43,
      width : 200,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor : "black",
      borderWidth : 5,
      borderRadius : 25,
      marginHorizontal : 10,
    },
    InputBox : {
      height : 35,
      width : 100,
      color : 'gray'
    },
    resetAndInputBox : {
      alignItems: 'center',
      justifyContent: 'center',
      height : 40,
      width : 135,
      borderColor : "black",
      borderWidth : 5,
      borderRadius : 25,
      marginHorizontal : 10
    },
    resetAndInputBoxText : {
        fontWeight : '100',
        fontSize : 15
    },
    upDown : {
        flexDirection : "row",
        marginTop : 10,
    },
    countBox : {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize : 30,
        height : 100,
        width : 135,
        borderColor : "black",
        borderWidth : 5,
        borderRadius : 25,
        marginHorizontal : 10
    },
    container : {
        alignItems: 'center',
        justifyContent: 'center',
    },
    box : {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize : 30,
        height : 200,
        width : 300,
        borderColor : "black",
        borderWidth : 5,
        borderRadius : 50,
    },
    num : { 
      fontSize : 100,
    },
    porn : {
        fontSize : 50
    }

});

export default App;
