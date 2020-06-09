import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, TextInput} from 'react-native';  

export default class Home extends Component{ 
  state = { 
    people: [
      { name: 'ironan', date: '11 Apr 2020', type: 'Request', category: 'Electronic', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '1'},
      { name: 'mickeyz', date: '12 Apr 2020', type: 'Offer',category: 'Transportation', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq", id: '2'},
      { name: 'babeuo', date: '13 Apr 2020', type: 'Request', category: 'Books',  title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '3'},
      { name: 'imolio', date: '14 Apr 2020', type: 'Offer', category: 'Lifestyle',  title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '4'},
    ],
    category: [
      {name: 'All', id: '1'},
      {name: 'Book', id: '2'},
      {name: 'Clothes', id: '3'},
      {name: 'Electronics', id: '4'},
      {name: 'Food', id: '5'},
      {name: 'Furniture', id: '6'},
      {name: 'Lifestyle', id: '7'},
      {name: 'Transportation', id: '8'},
      {name: 'Other', id: '9'}
    ]
  }

  render(){
    return (  
      <View> 
        <View style={styles.headerBar}>
          <Text style={styles.textHeader}>Feed</Text>
        </View>
        <View style={styles.categoryCarousel}>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.nothing} onPress={this.onPress}>
              <Text style={styles.categoryFrameSelected}>All</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.categoryFrame}>Transportation</Text>
            </View>
            <View>
              <Text style={styles.categoryFrame}>Food</Text>
            </View>
            <View>
              <Text style={styles.categoryFrame}>Clothes</Text>
            </View>
            <View>
              <Text style={styles.categoryFrame}>Books</Text>
            </View>
            <View>
              <Text style={styles.categoryFrame}>Kitchen</Text>
            </View>
            <View>
              <Text style={styles.categoryFrame}>Furniture</Text>
            </View>
            <View>
              <Text style={styles.categoryFrame}>Electronics</Text>
            </View>
            <View>
              <Text style={styles.categoryFrame}>Other</Text>
            </View>

          </ScrollView>
        </View>

        <ScrollView>
        <View>
          <FlatList
            keyExtractor = {(item)=>item.id}
            data = {this.state.people}
            renderItem = {({ item}) => (
              <View style={styles.containerItem}>
                <View style={styles.regionText}>
                  <View> 
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.datePost}>{item.date}</Text>
                  </View>
                  <View style={{flex:1}}>
                    <Text style={styles.colorType}>.</Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text style={styles.editButton}>{item.type}</Text>
                    </TouchableOpacity>
                    <Text style={styles.categoryType}>{item.category}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.typePost}>{item.title}</Text>
                </View>
                <View>
                  <Image
                    style={{height:300, width:370}}
                    source={{uri:item.image}}
                 />
                </View>
                <View style={styles.sendMessage}>
                    <TextInput style={styles.inputSearch} placeholder="Write a message here" />
                        <TouchableOpacity>
                            <Image style={{height: 36, width: 36, marginTop: 20, marginHorizontal: 10}}
                                    source={require('../images/send.png')}
                            />
                        </TouchableOpacity>
                </View>
            </View>
            )}
          />
        </View>
      </ScrollView>
    </View> 
  );
}    
}

const styles = StyleSheet.create({  
  textHeader: {  
    fontSize: 25,  
    textAlign: 'center',  
    margin: 10,
    fontFamily: 'Montserrat-Bold',
    color: '#ffffff'
  },
  headerBar:{
    backgroundColor: '#B14297',
    height: 65,
    alignItems: "center",
    justifyContent: "center"
  },
  container:{
    paddingLeft: 20,
    paddingRight:20,
    marginBottom: 20
  },
  container1:{
    paddingLeft: 20,
    paddingRight:20
  },
  containerItem:{
    paddingLeft: 10,
    paddingRight:10,
    paddingBottom: 30
  },
  textName:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginTop: 20
  },
  regionText:{
    fontFamily: 'Montserrat-Regular',
    flexDirection: "row",
    fontSize: 13
  },
  settingRegion:{
    flexDirection: "row",
    alignItems: "center"
  },
  button:{
    width: 40,
    marginTop: 35,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  itemButton:{
    color: '#ffffff'
  },
  post:{
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  typePost:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 13
  },
  userName:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 16
  },
  datePost:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    marginTop: 5
  },
  colorType:{
    marginTop: -89,
    marginLeft: 5,
    color: '#97CACA',
    fontSize: 100
  },
  editButton:{
    fontFamily: 'Montserrat-Bold',
    color: '#B14297',
    marginBottom: 5,
    fontSize: 11,
    marginLeft: 10
  },
  categoryType:{
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
    marginBottom: 5,
    fontSize: 11
  },
  categoryFrame:{
    borderRadius: 20,
    padding: 8,
    borderColor: '#B14297',
    borderWidth: 1,
    marginHorizontal: 5,
    color: '#B14297',
    fontFamily: 'Montserrat-Bold'
  },
  categoryFrameSelected:{
    borderRadius: 20,
    borderColor: '#B14297',
    borderWidth: 1,
    backgroundColor: '#B14297',
    marginHorizontal: 5,
    padding: 8,
    color: 'white',
    fontFamily: 'Montserrat-Bold'
  },
  categoryCarousel:{
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginBottom: 15
  },
  inputSearch:{
    height: 36,
    width: 320,
    borderRadius: 17,
    borderColor: '#707070',
    fontFamily: 'Montserrat',
    marginVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    borderWidth: 1
  },
  sendMessage: {
    flexDirection: "row"
  }
});  

