import React, { Component } from 'react'
import { View, Text, Image, ImageBackground, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'

class Registration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }
  registration_Function = () => {

    fetch('http://192.168.43.204:8000/api/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        username: this.state.username,

        email: this.state.email,

        password: this.state.password

      })

    }).then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        if (this.state.username != '' && this.state.email != '' && this.state.password != '') {
          this.props.navigation.navigate('BottomNavigation');
        }
        else {
          Alert.alert('Registration isn`t success','Please enter all requirement your information!');
        }
      }).catch((error) => {
        console.error(error);
      });


  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../images/login.png')} style={styles.image}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={{ textAlign: 'center', fontSize: 25, fontFamily: 'Montserrat-Bold', marginTop: 40, marginBottom: 15 }}>Registration</Text>
            <View style={styles.border}>
              <Image source={{ uri: 'https://www.flaticon.com/premium-icon/icons/svg/1144/1144760.svg' }}
                style={{ width: 35, height: 35, marginLeft: 10, marginTop: 5 }} />
              <TextInput
                style={styles.inputText}
                placeholder="Username"
                onChangeText={data => this.setState({ username: data })}
              />
            </View>
            <View style={styles.border}>
              <Image source={{ uri: 'https://www.flaticon.com/premium-icon/icons/svg/542/542638.svg' }}
                style={{ width: 30, height: 30, marginLeft: 10, marginTop: 7 }} />
              <TextInput
                style={styles.inputText}
                placeholder="Email"
                onChangeText={data => this.setState({ email: data })}
              />
            </View>
            <View style={styles.border}>
              <Image source={{ uri: 'https://www.flaticon.com/premium-icon/icons/svg/2889/2889676.svg' }}
                style={{ width: 35, height: 35, marginLeft: 10, marginTop: 5 }} />
              <TextInput
                style={styles.inputText}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={data => this.setState({ password: data })}
              />
            </View>
            <TouchableOpacity onPress={this.registration_Function}>
              <Text style={styles.text}>
                Sign Up
                    </Text>
            </TouchableOpacity>
            <View style={styles.login}><Text style={{ color: '#B14297', fontFamily: 'Montserrat-Bold' }}> Have an account?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={{ color: '#B14297', fontFamily: 'Montserrat-Bold' }}> Login</Text>
              </TouchableOpacity>
            </View>
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
  border: {
    width: 300,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 30,
    flexDirection: 'row',
    borderColor: '#707070'
  },
  text: {
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
  login: {
    flexDirection: 'row',
    marginTop: 15,
  },
  inputText: {
    fontFamily: 'Montserrat-Regular',
    width: 300
  }
});


/*import React, { Component } from 'react'
import { View, Text,Image,ImageBackground, TextInput, StyleSheet,TouchableOpacity } from 'react-native'

class Registration extends Component {
  render() {
    return(
      <View style={styles.container}>
      <ImageBackground source={require('../images/login.png')} style={styles.image}>
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text style={{textAlign: 'center', fontSize: 25, fontFamily: 'Montserrat-Bold',marginTop: 40,marginBottom:15}}>Registration</Text>
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
                  <Image  source = {{uri:'https://www.flaticon.com/premium-icon/icons/svg/542/542638.svg'}}
                  style = {{ width: 30,height:30, marginLeft: 10, marginTop: 7}}/>
                <TextInput
                style={styles.inputText}
                      placeholder="Email"  
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
      width: 300,
      marginTop: 5,
      borderWidth: 1,
      borderRadius: 30,
      flexDirection: 'row',
      borderColor: '#707070'
    },
    text: {
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
    login: {
      flexDirection: 'row',
      marginTop: 15,
    },
    inputText:{
      fontFamily: 'Montserrat-Regular',
      width: 300
    }
  });

  */