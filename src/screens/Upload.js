import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet,Button,console } from 'react-native'

class Upload extends Component {
    render() {
        return(
            <View>
                <Text style={styles.header}>Upload</Text>
                <View style={styles.container}>
                    <Text style={styles.name}>Sobmaterial12</Text>
                    <View style={styles.row}>
                        <Text style={{fontSize: 11,fontFamily: 'Montserrat-Bold'}}>28 Apr 2020</Text>
                        <Text style={{marginLeft: 175, fontSize: 11, fontFamily: 'Montserrat-Bold'}}>Electronic</Text>
                    </View>
                    <View style={styles.border}>
                        <TextInput
                            placeholder="What are you going to share today?"  
                            onChangeText={(text) => this.setState({text})}  
                        />
                    </View> 
                    <View style={styles.row1}>
                         <Text style = {[styles.text,{borderColor: '#F7C217', color: '#F7C217',width: 60}]}>
                            Offers
                        </Text>
                        <Text style = {[styles.text,{borderColor: '#97CACA', color: '#97CACA',width: 80,marginLeft: 10}]}>
                            Request
                        </Text>
                        <Text style = {[styles.text,{width: 135,marginLeft: 10}]}>
                            Pick a catergory
                        </Text>
                    </View>
                    <Text style={{fontWeight: 'bold', marginTop: 10}}>Upload images</Text>
                    <Text style = {styles.post}>
                        Post
                     </Text>
                </View>
            </View>
        )
    }
}
export default Upload
const styles= StyleSheet.create({
    container:{
        margin: 10,
    },
    header:{
        backgroundColor: '#B14297',
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        padding: 13,
        fontSize: 25,
        textAlign: 'center'
    },
    name:{
        marginTop: 10,
        fontFamily: 'Montserrat-Bold'
    },
    row:{
        flexDirection: 'row',
    },
    row1:{
        flexDirection: 'row',
    },
    border:{
        height:120,
        marginTop: 10,
        borderWidth: 1,
        paddingLeft: 10
    },
    text: {
        borderWidth: 2,
        borderColor: '#B14297',
        borderRadius: 15,
        backgroundColor: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: 11,
        color: '#B14297',
        marginTop: 15,
        textAlign: 'center'
      },
      post: {
        width: 120,
        marginLeft: 110, 
        borderWidth: 2,
        padding: 10,
        borderColor: '#0000',
        borderRadius: 30,
        backgroundColor: '#F7C217',
        fontFamily: 'Montserrat-Bold',
        marginTop: 15,
        textAlign: 'center',
      },
})