import React, { Component } from 'react'
import { View, Text,TextInput, StyleSheet} from 'react-native'

class Search extends Component {
  state = {
    text: '',
  };
  updatedSearch = search => {
    this.setState({ search });
  };
   render() {
     const { search } = this.state
      return (
        <View>
            <Text style={styles.header}>Search</Text>
            <View style={styles.container}>
            <View style={styles.border}>
                <TextInput
                      placeholder="Search For Anything"  
                      onChangeText={(text) => this.setState({text})}  
                  />   
                </View> 
            <Text style={styles.find}> Find by category</Text>
              <Text style = {[styles.text,{width: 50}]}>
                All
              </Text>
              <Text style = {[styles.text, {width: 155}]}>
                Transportation
              </Text>
              <Text style = {[styles.text, {width: 90}]}>
                Clothes
              </Text>
              <Text style = {[styles.text,{width: 85}]}>
                Offers
              </Text>
              <Text style = {[styles.text, {width: 155}]}>
                Transportation
              </Text>
              <Text style = {[styles.text,{width:85}]}>
                Offers
              </Text>
            <Text style={styles.find}> Find by type</Text>
            <Text style = {[styles.text,{borderColor: '#F7C217', color: '#F7C217',width: 85}]}>
                Offers
              </Text>
              <Text style = {[styles.text,{borderColor: '#97CACA', color: '#97CACA',width: 90}]}>
                Request
              </Text>
              <Text style = {[styles.text,{width: 50}]}>
                All
              </Text>
            </View>
        </View>
      );
   }
}
export default Search

const styles = StyleSheet.create({

    container: {
      margin: 10,
    },
    header: {
      backgroundColor: '#F7C217',
      padding: 13,
      fontSize: 25,
      textAlign: 'center',
      fontFamily: 'Montserrat-Bold',
      color: 'white'
    },
    find: {
      fontFamily: 'Montserrat-Bold'
    },
    text: {
      borderWidth: 2,
      borderColor: '#B14297',
      borderRadius: 12,
      backgroundColor: 'white',
      fontFamily: 'Montserrat-Bold',
      color: '#B14297',
      marginTop: 5,
      textAlign: 'center'
    },
    border:{
      height:45,
      marginTop: 10,
      borderWidth: 1,
      borderRadius: 30,
      paddingLeft: 90,
    }
});