import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, Modal } from 'react-native';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      editItem: [],
      people: [
        { name: 'Iron-Man', date: '10 Apr 2020', type: 'Offer', category: 'IT Information', tag: ' ', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '1' },
        { name: 'Spider-Man', date: '10 Apr 2020', category: 'Trasportation', type: 'Request', tag: 'Mark as taken', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq", id: '2' },
        { name: 'Iron-Man', date: '10 Apr 2020', type: 'Offer', category: 'IT Information', tag: 'Mark as taken', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '3' },
        { name: 'Iron-Man', date: '10 Apr 2020', type: 'Offer', category: 'IT Information', tag: ' ', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '4' },
        { name: 'Iron-Man', date: '10 Apr 2020', type: 'Offer', category: 'IT Information', tag: ' ', title: 'The dog is a member of the genus Canis, which forms part of the wolf-like canids, and is the most widely abundant terrestrial carnivore.', image: "https://post.healthline.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg", id: '5' },
      ]
    };
  }
  clickEvent = (item) => {
    this.setState({ editItem: item }, () => {
      this.setModelVisible(true);
    });
  }
  setModelVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <View style={{ marginBottom: 460 }}>
        <View style={styles.headerBar}>
          <Text style={styles.textHeader}>Profile</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.settingRegion}>
            <View style={{ flex: 1 }}>
              <Text style={styles.textName}>xxjoanne</Text>
              <View style={styles.regionText}>
                <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Regular' }}>Phnom Penh</Text>
                <Text>,</Text>
                <Text style={{ paddingLeft: 5, fontSize: 13, fontFamily: 'Montserrat-Regular' }}>Cambodia</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Setting')}>
              <Image
                style={{ height: 37, width: 37 }}
                source={require('../images/settings.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView></ScrollView>
        <View style={styles.container1}>
          <View style={styles.post}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 30, fontFamily: 'Montserrat-Bold', color: '#B14297', paddingLeft: 15 }}>70</Text>
              <Text style={styles.typePost}>Total Posts</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 30, fontFamily: 'Montserrat-Bold', color: '#F7C217' }}>54</Text>
              <Text style={styles.typePost}>Offers</Text>
            </View>
            <View>
              <Text style={{ fontSize: 30, fontFamily: 'Montserrat-Bold', color: '#8DB9BF', paddingLeft: 6 }}>16</Text>
              <Text style={styles.typePost}>Request</Text>
            </View>
          </View>
        </View>
        <View>
          <FlatList
            keyExtractor={(item) => item.id}
            data={this.state.people}
            renderItem={({ item }) => (
              <View style={styles.containerIten}>
                <View style={styles.regionText}>
                  <View>
                    <Text style={styles.userName}>{item.name}</Text>
                    <Text style={styles.datePost}>{item.date}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.colorType}>.</Text>
                  </View>
                  <View>
                    <TouchableOpacity onPress={()=>{this.clickEvent(item)}}>
                      <Text style={styles.editButton}>Edit</Text>
                    </TouchableOpacity>
                    <Text style={styles.chcked}>{item.tag}</Text>
                    <Text style={styles.catagoryType}>{item.category}</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.typePost}>{item.title}</Text>
                </View>
                <View>
                  <Image
                    style={{ height: 300, width: 370 }}
                    source={{ uri: item.image }}
                  />
                </View>
              </View>
            )}
          />
        </View>
        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setModelVisible(false)}
          visible={this.state.modalVisible}
        >
          <View style={{justifyContent: "center", alignItems: "center", marginTop: 250}}>
          <View style={styles.container2}>
            <View>
              <TouchableOpacity style={styles.eachItem}>
                <Text style={styles.changeType}>Edit category</Text>
                <Image style={{ height: 16, width: 16, marginTop: 8 }}
                  source={require('../images/basic-app.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.eachItem}>
                <Text style={styles.changeType}>Edit status</Text>
                <Image style={{ height: 16, width: 16, marginTop: 8 }}
                  source={require('../images/basic-app.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.eachItem}>
                <Text style={styles.changeType}>Mark as taken</Text>
                <Image style={{ height: 16, width: 16, marginTop: 8 }}
                  source={require('../images/basic-app.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.eachItem}>
                <Text style={styles.changeType}>Delete</Text>
                <Image style={{ height: 16, width: 16, marginTop: 8 }}
                  source={require('../images/basic-app.png')}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.eachItem} onPress={()=>{this.setModelVisible(false)}}>
                <Text style={styles.changeType}>Cancel</Text>
                <Image style={{ height: 16, width: 16, marginTop: 8 }}
                  source={require('../images/basic-app.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
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
  headerBar: {
    backgroundColor: '#B14297',
    height: 65,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20
  },
  container1: {
    paddingLeft: 20,
    paddingRight: 20
  },
  containerIten: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    borderWidth: 1,
    borderBottomColor: '#707070',
    borderTopColor: '#fff',
    borderLeftColor: '#fff',
    borderRightColor: '#fff'
  },
  textName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    marginTop: 20
  },
  regionText: {
    flexDirection: "row"
  },
  settingRegion: {
    flexDirection: "row",
    alignItems: "center"
  },
  button: {
    width: 40,
    marginTop: 35,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  itemButton: {
    color: '#ffffff'
  },
  post: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },
  typePost: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13
  },
  userName: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
  },
  datePost: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 11,
    marginTop: 5
  },
  colorType: {
    marginTop: -89,
    marginLeft: 15,
    color: '#97CACA',
    fontSize: 100
  },
  editButton: {
    fontFamily: 'Montserrat-Bold',
    color: '#B14297',
    marginBottom: 5,
    fontSize: 11,
    marginLeft: 20
  },
  chcked: {
    fontFamily: 'Montserrat-Bold',
    color: '#B14297',
    marginBottom: 5,
    fontSize: 11
  },
  categoryType: {
    fontFamily: 'Montserrat-Bold',
    color: '#000000',
    marginBottom: 5,
    fontSize: 11
  },
  eachItem: {
    flexDirection: "row",
},
changeType: {
    marginBottom: 5,
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    flex: 1
},
container2:{
  height: 207,
  width: 334,
  borderColor: '#ccc',
  borderWidth: 1,
  borderRadius: 22,
  padding: 20,
  backgroundColor: '#fff'
}
});
export default Profile;