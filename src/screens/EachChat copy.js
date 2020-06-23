import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import io from 'socket.io-client';

export default class EachChat extends Component {

    state = {
        people: [
            { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', nextTitle: '', nextTitle1: '', date1: '12 Jun 2020', title1: 'Feeling hgvgvgvgg', title2: 'Spleepy', id: '1' },
            { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', nextTitle: '', nextTitle1: '', date1: '12 Jun 2020', title1: 'Feeling hgvgvgvgg', title2: 'Spleepy', id: '2' },
            { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', nextTitle: 'Hey you bad guy My friend bit bot ', nextTitle1: 'Boom my godda mana', date1: '12 Jun 2020', title1: 'Feeling hgvgvgvgg', title2: 'Spleepy', id: '3' },
        ]
    }

    constructor(props){
        super(props);
        this.state = {
            chatMessage: "",
            chatMessages: []
        };
    }

    componentDidMount(){
        this.socket = io("http://192.168.8.163:3000");
        this.socket.on("chat message", msg => {
            this.setState({ chatMessages: [...this.state.chatMessages, msg] });
        });
    }

    submitChatMessage(){
        this.socket.emit("chat message", this.state.chatMessage);
        this.setState({chatMessage: ""});
    }

    render() {

        const chatMessages = this.state.chatMessages.map(chatMessage => (
            <Text key={chatMessage}>{chatMessage}</Text>
        ));

        return (
            <View style={styles.nanana}>

                <Text>Enter msg:</Text>

                <TextInput
                    style={{ height: 40, borderWidth: 2}}
                    autoCorrect={false}
                    value={this.state.chatMessage}
                    onSubmitEditing={() => this.submitChatMessage()}
                    onChangeText={chatMessage => {
                        this.setState({ chatMessage });
                    }}
                />

                {chatMessages}

            </View>
        );
    }
    
    
}
const styles = StyleSheet.create({
    nanana: {
        flex: 1,
        backgroundColor: "#00F5FCFF"
    },
});
/*

class EachChat extends Component {
    
    render() {
        return (
            <View style={{marginBottom: 510}}>
                <View style={styles.headerBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
                    <Icon name="ios-arrow-back" color='#ffffff' size={50} style={styles.icon}/>
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>MaDaKac</Text>
                </View>
                    <View>
                        <View style={styles.container}>
                            <View style={styles.settingRegion}>
                                <Text style={styles.textName}>xxjoanne</Text>
                                <View style={styles.regionText}>
                                    <Text style={{fontSize: 13, fontFamily: 'Montserrat-Regular'}}>Phnom Penh</Text>
                                    <Text>,</Text>
                                    <Text style={{ paddingLeft: 5, fontSize: 13, fontFamily: 'Montserrat-Regular'}}>Cambodia</Text>
                                </View>
                            </View>
                        </View>
                        <FlatList
                            keyExtractor={(item) => item.id}
                            data={this.state.people}
                            renderItem={({ item }) => (
                                <View style={{ marginLeft: 20, marginRight: 20 }}>
                                    <View>
                                        <View>
                                            <View>
                                                <Text style={styles.itemName}>{item.name}</Text>
                                                <Text style={styles.itemDate}>{item.date}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.itemTitle}>{item.title}</Text>
                                                <Text style={styles.itemTitle}>{item.titleNext}</Text>
                                                <Text style={styles.itemTitle}>{item.titleNext1}</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <View>
                                                <Text style={styles.itemDate}>{item.date1}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.itemTitle1}>{item.title1}</Text>
                                                <Text style={styles.itemTitle1}>{item.title2}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )}
                        />
                        <View style={styles.sendMessage}>
                            <TextInput 
                                style={styles.inputSearch} 
                                placeholder="Send a message"
                                autoCorrect={false}
                                value={this.state.chatMessage}
                                onSubmitEditing={() => this.submitChatMessage()}
                                onChangeText={chatMessage => {
                                    this.setState({ chatMessage });
                                }}
                            />
                            <TouchableOpacity>
                                <Image style={{ height: 36, width: 36, marginTop: 20, marginRight: 22 }}
                                    source={require('../images/send.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
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
        color: '#ffffff',
        flexGrow: 1,
        marginRight: 50
    },
    headerBar: {
        backgroundColor: '#F7C217',
        height: 65,
        alignItems: "center",
        flexDirection: "row"
    },
    regionText: {
        flexDirection: "row",
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
    },
    textName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5
    },
    itemName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        marginBottom: 5
    },
    itemDate: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 11,
        marginBottom: 5
    },
    regionText: {
        flexDirection: "row",
    },
    itemTitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14
    },
    itemTitle1: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        backgroundColor: '#B14297'
    },
    inputSearch: {
        height: 36,
        borderRadius: 17,
        borderColor: '#707070',
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 20,
        justifyContent: "center",
        borderWidth: 1,
        flex: 1,
        marginLeft: 20,
        marginBottom: 20,
        marginRight: 5,
        marginTop: 20
    },
    sendMessage: {
        marginBottom: 60,
        flexDirection: "row"
    },
    icon:{
        marginLeft: 30
      }
});
*/