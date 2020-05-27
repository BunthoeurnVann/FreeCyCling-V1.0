import React, { Component } from 'react'
import { View, Text,Image,ImageBackground, TextInput, StyleSheet,TouchableOpacity } from 'react-native'

class Registration extends Component {
  render() {
    return(
      <View style={styles.container}>
      <ImageBackground source={require('../images/login.png')} style={styles.image}>
        <Text style={{textAlign: 'center', fontSize: 25, fontFamily: 'Montserrat-Bold',marginTop: 40,marginBottom:15}}>Registration</Text>
      <View style={styles.border}>
                  <Image source = {{uri:'https://www.flaticon.com/premium-icon/icons/svg/1144/1144760.svg'}}
                  style = {{ width: 35,height:35, marginLeft: 10, marginTop: 5}}/>
                <TextInput
                      placeholder="Username"  
                      onChangeText={(text) => this.setState({text})}  
                  />   
                </View>  
                <View style={styles.border}>
                  <Image  source = {{uri:'https://www.flaticon.com/premium-icon/icons/svg/542/542638.svg'}}
                  style = {{ width: 30,height:30, marginLeft: 10, marginTop: 7}}/>
                <TextInput
                      placeholder="Email"  
                      onChangeText={(text) => this.setState({text})}  
                  />   
                </View>  
                <View style={styles.border}>
                  <Image source = {{uri:'https://www.flaticon.com/premium-icon/icons/svg/2889/2889676.svg'}}
                  style = {{ width: 35,height:35, marginLeft: 10, marginTop: 5}}/>
                <TextInput
                      placeholder="Password"  
                      onChangeText={(text) => this.setState({text})}  
                  />   
                </View>  
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Proceed')}>
                    <Text style = {styles.text}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
                <View style={styles.login}><Text style={{color: '#B14297',fontFamily: 'Montserrat-Bold'}}> Have an account?</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{color: '#B14297', fontFamily: 'Montserrat-Bold'}}> Login</Text>
                </TouchableOpacity>
                </View>
      </ImageBackground>
    </View>
    );
  }
}  
export default Registration
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "grey",
      fontSize: 30,
      fontWeight: "bold",
    },
    border:{
      marginLeft: 30,
      width: 300,
      marginTop: 5,
      borderWidth: 3,
      borderRadius: 30,
      flexDirection: 'row'
    },
    text: {
      width: 300,
      marginLeft: 30, 
      borderWidth: 2,
      padding: 10,
      borderColor: '#0000',
      borderRadius: 30,
      backgroundColor: '#F7C217',
      fontFamily: 'Montserrat-Bold',
      marginTop: 15,
      textAlign: 'center'
    },
    login: {
      marginLeft: 65,
      flexDirection: 'row',
      marginTop: 15,
    }
  });

  