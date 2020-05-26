import React, { Component } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, ScrollView, FlatList, TextInput } from 'react-native';
class EachChat extends Component {
    state = {
        people: [
            { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', nextTitle: '', nextTitle1: '', date1: '12 Jun 2020', title1: 'Feeling hgvgvgvgg', title2: 'Spleepy', id: '1' },
            { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', nextTitle: '', nextTitle1: '', date1: '12 Jun 2020', title1: 'Feeling hgvgvgvgg', title2: 'Spleepy', id: '2' },
            { name: 'emelie johnson', date: '10 Apr 2020', title: 'I love you', nextTitle: 'Hey you bad guy My friend bit bot ', nextTitle1: 'Boom my godda mana', date1: '12 Jun 2020', title1: 'Feeling hgvgvgvgg', title2: 'Spleepy', id: '3' },
        ]
    }
    render() {
        return (
            <View style={{marginBottom: 510}}>
                <View style={styles.headerBar}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
                        <Image style={{ height: 30, width: 30, justifyContent: "center", marginLeft: 15 }}
                            source={require('../images/backarrow.png')}
                        />
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
                            <TextInput style={styles.inputSearch} placeholder="Send a message" />
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
    }
});
export default EachChat; 