import React, { Component } from 'react'
import { View, Text,Image,ImageBackground, TextInput, StyleSheet, TouchableOpacity } from 'react-native'

class Login extends Component {
  render() {
    return(
      <View style={styles.container}>
      <ImageBackground source={require('../images/login.png')} style={styles.image}>
        <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text style={{textAlign: 'center', fontSize: 25, fontFamily: 'Montserrat-Bold',marginTop: 60,marginBottom:15}}>Login</Text>
      <View style={styles.border}>
                  <Image source = {{uri:'https://www.flaticon.com/premium-icon/icons/svg/1144/1144760.svg'}}
                  style = {{ width: 35,height:35, marginLeft: 10, marginTop: 5}}/>
                <TextInput
                style={styles.inputText}
                      placeholder="Username"  
                      onChangeText={(text) => this.setState({text})}  
                  />   
                </View>    
                <View style={styles.border}>
                  <Image source = {{uri:'https://www.flaticon.com/premium-icon/icons/svg/2889/2889676.svg'}}
                  style = {{ width: 35,height:35, marginLeft: 10, marginTop: 5}}/>
                <TextInput
                style={styles.inputText}
                secureTextEntry={true}
                      placeholder="Password"  
                      onChangeText={(text) => this.setState({text})}  
                  />   
                </View>  
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('BottomNavigation')}>
                    <Text style = {styles.signup}>
                        Login
                    </Text>
                </TouchableOpacity>
                <View style = {styles.loginwithfacebook}>
                  <Image source = {{uri:'https://www.flaticon.com/premium-icon/icons/svg/2392/2392484.svg'}}
                  style = {{ width: 20,height:20, marginLeft: 5,marginRight:30}}/>
                <Text style={{color: 'white',fontFamily: 'Montserrat-Bold'}}>
                  Login with Facebook
                </Text>   
                </View> 
                <View style={styles.login}><Text style={{color: '#B14297',fontFamily: 'Montserrat-Bold'}}> No account yet?</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text style={{color: '#B14297',fontFamily: 'Montserrat-Bold'}}>  Sign Up</Text>
                </TouchableOpacity>
                </View>
                </View>  
      </ImageBackground>
    </View>
    );
  }
}  
export default Login
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    border:{
      width: 300,
      marginTop: 5,
      borderWidth: 1,
      borderRadius: 30,
      flexDirection: 'row',
      borderColor: '#707070'
    },
    signup: {
      width: 300,
      borderWidth: 2,
      padding: 10,
      borderColor: '#0000',
      borderRadius: 30,
      backgroundColor: '#F7C217',
      fontFamily: 'Montserrat-Bold',
      marginTop: 15,
      textAlign: 'center',
    },
    loginwithfacebook: {
        width: 300,
        borderWidth: 2,
        padding: 10,
        borderColor: '#0000',
        borderRadius: 30,
        backgroundColor: '#3b5998',
        fontFamily: 'Montserrat-Bold',
        marginTop: 15,
        textAlign: 'center',
        flexDirection: 'row',
      },
    login: {
      flexDirection: 'row',
      marginTop: 15,
    },
    inputText:{
      fontFamily: 'Montserrat-Regular',
      width: 300
    }
  });
/*class Login extends Component{
    render(){
        return(
            <View>
                 <Text>Login</Text>
                <Button
                title={'Login'}
                onPress={()=>this.props.navigation.navigate('BottomNavigation')}
                />
                <Button
                title={'SignUp'}
                onPress={()=>this.props.navigation.navigate('SignUp')}
                />
            </View>
        )
    }
}*/
