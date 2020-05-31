import React, {Component} from 'react'
import {View,Text,Image,ImageBackground,TextInput,StyleSheet, TouchableOpacity} from 'react-native'
class Registration1 extends Component {
    render(){
        return(
            <View style={styles.container}>
              <View style={styles.headerBar}>
          <Text style={styles.textHeader}>Registration</Text>
        </View>
      <ImageBackground source={require('../images/signup.png')} style={styles.image}>
        <View style={{alignItems: "center", marginBottom: 320}}>
        <View style={styles.container1}>
        <Text style={styles.text}>Finish your Registration</Text>
      <View style={styles.border}>
            <Image  source = {{uri:'https://image.flaticon.com/icons/png/512/126/126509.png'}}
              style = {{ width: 30,height:30, marginLeft: 10, marginTop: 7}}/>
            <TextInput
            style={styles.inputText}
              placeholder="Phone Number"  
              onChangeText={(text) => this.setState({text})}/>   
      </View>
      <View style={styles.border}>
            <Image  source = {{uri:'https://www.flaticon.com/premium-icon/icons/svg/2889/2889312.svg'}}
              style = {{ width: 30,height:30, marginLeft: 10, marginTop: 7}}/>
            <TextInput
            style={styles.inputText}
              placeholder="Region"  
              onChangeText={(text) => this.setState({text})}/>   
      </View>
      <View style={styles.border}>
            <Image  source = {{uri:'https://image.flaticon.com/icons/png/512/1077/1077041.png'}}
              style = {{ width: 30,height:30, marginLeft: 10, marginTop: 7}}/>
            <TextInput
            style={styles.inputText}
              placeholder="Facebook"  
              onChangeText={(text) => this.setState({text})}/>   
      </View>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style = {styles.button}>
                  Proceed
                </Text>
      </TouchableOpacity>
        </View>
        </View>
      </ImageBackground>
    </View>
        );
    }
}
export default Registration1

const styles = StyleSheet.create({
  textHeader: {  
    fontSize: 25,  
    textAlign: 'center',  
    margin: 10,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff'
  },
  headerBar:{
    backgroundColor: '#97CACA',
    height: 65,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column",
  },
    header: {
      backgroundColor: '#97CACA',
      padding: 13,
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'Montserrat-Bold',
      color: 'white',
      marginBottom: 15
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      fontSize:20,
      fontFamily: 'Montserrat-Bold',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 20
  
    },
    border:{
      width: 300,
      marginTop: 5,
      borderWidth: 1,
      borderRadius: 30,
      flexDirection: 'row',
      borderColor: '#707070'
    },
    button: {
      width: 300, 
      borderWidth: 2,
      padding: 10,
      borderColor: '#0000',
      borderRadius: 30,
      backgroundColor: '#F7C217',
      fontFamily: 'Montserrat-Bold',
      marginTop: 15,
      textAlign: 'center'
    },
    inputText:{
      fontFamily: 'Montserrat-Regular',
      width: 300
    }
  });