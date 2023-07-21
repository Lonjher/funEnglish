import React, { Component } from 'react'
import { Alert, Image, View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _renderItem({ item, index }) {
        return (
            <View style={{
                backgroundColor: 'floralwhite',
                borderRadius: 5,
                height: 260,
                padding: 50,
                marginHorizontal: 25,
            }}>
                <Text style={{ fontSize: 30 }}>{item.title}</Text>
                <Text>{item.image}</Text>
             </View>
        )
    }
    render() {
        return (
            <ScrollView style={gaya.container}>
                <View style={gaya.kotak}>
                    <View style={gaya.kotakAvatar}>
                        <TouchableOpacity style={gaya.avatar}>
                            <Image source={require('../image/john.png')} style={{ width: 70, height: 70, borderRadius: 50, }} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'column', justifyContent: 'space-around', }}>
                            <Text style={{ color: 'white', fontSize: 15, marginBottom: 10 }}>John Hammond</Text>
                            <Text style={{ color: 'white', fontSize: 10 }}>Email: john.hammond@yahoo.com</Text>
                        </View>
                    </View>
                    <View style={{
                        height: 100,
                        width: 280,
                        // backgroundColor: 'red',
                        flexDirection: 'row',
                        marginLeft: 100
                    }}>
                        <View style={{
                            width: 120,
                            height: 50,
                            backgroundColor: 'white',
                            borderRadius: 5,
                            marginHorizontal: 5,
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: 15,
                                marginLeft: 5,
                            }}>
                                Platinum
                                Member
                            </Text>
                            <Ionicons name={'checkmark-circle'} size={20} color={'green'} style={{
                                marginLeft: 25,
                                marginTop: 20
                            }} />
                        </View>
                        <View style={{
                            width: 120,
                            height: 50,
                            backgroundColor: 'white',
                            borderRadius: 5,
                            marginLeft: 5,
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                color: 'grey',
                                fontWeight: 'bold',
                                fontSize: 13,
                                marginRight: 5,
                            }}>
                                I am Learning
                            </Text>
                            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, marginRight: 5 }}>English</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: '100vw', height: '100vh', alignItems: 'center' }}>
                    <View style={{ width: 330, height: 120, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: '#FF935C', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/speaking.png')} style={{ width: 60, height: 60, borderRadius: 10, }} />
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Speaking Skill</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: '#FF935C', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/grammar.png')} style={{ width: 60, height: 60, borderRadius: 10, }} />
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Grammar Skill</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: '#FF935C', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/writting.png')} style={{ width: 60, height: 60, borderRadius: 10, }} />
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Writting Skill</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: 330, height: 120, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: '#FF935C', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/translate.png')} style={{ width: 50, height: 50, borderRadius: 10, }} />
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', marginTop: 6 }}>Translate Skill</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: '#FF935C', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/logo-toef.png')} style={{ width: 60, height: 60, borderRadius: 10, }} />
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>TOEFL</Text>
                            <Text style={{ color: 'white', fontSize: 11, fontWeight: 'bold', marginTop: -5 }}>Preparation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ width: 90, height: 90, backgroundColor: '#FF935C', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../image/module.png')} style={{ width: 60, height: 60, borderRadius: 10, }} />
                            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>All Modules</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', fontFamily: 'Poppins', marginLeft: 20 }}>Want more English</Text>
                <View style={{ width: 380, height: 200, justifyContent: 'center', alignItems: 'center', marginVertical: 10 }}>
                    <ScrollView horizontal={true} style={{
                        width: 350,
                        height: 200,
                        borderRadius: 15,
                    }} showsHorizontalScrollIndicator={false}>
                        <View style={{ width: 300, height: 200, borderRadius: 15, marginRight: 20, elevation: 10 }}>
                            <Image source={require('../image/toefl.png')} style={{ width: 300, height: 200 }} resizeMode='stretch' borderRadius={15} />
                        </View>
                        <View style={{ width: 300, height: 200, borderRadius: 15, marginRight: 20, elevation: 20 }}>
                            <Image source={require('../image/ielts-toefl.jpg')} style={{ width: 300, height: 200 }} resizeMode='stretch' borderRadius={15} />
                        </View>
                        <View style={{ width: 300, height: 200, backgroundColor: 'blue', borderRadius: 15, marginRight: 20, elevation: 20 }}>
                            <Image source={require('../image/bc.jpg')} style={{ width: 300, height: 200 }} resizeMode='stretch' borderRadius={15} />
                        </View>
                        <View style={{ width: 300, height: 200, backgroundColor: 'blue', borderRadius: 15, marginRight: 20, elevation: 20 }}>
                            <Image source={require('../image/aminef.jpg')} style={{ width: 300, height: 200 }} resizeMode='stretch' borderRadius={15} />
                        </View>
                    </ScrollView>
                </View>
                <View style={{ height: 40, width: 360, alignItems: 'flex-end' }}>
                    <TouchableOpacity style={{ width: 100, height: 30, backgroundColor: 'red', marginBottom: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => this.props.navigation.navigate('Course')}>
                        <Text style={{ color: 'white' }}>
                            Next Page
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{ width: 350, height: 200, backgroundColor: '#6495ED', marginBottom: 20,  borderRadius: 15, marginHorizontal: 10 }}>
                </View>
                <StatusBar barStyle='default' />
            </ScrollView>
        );
    }
}

export default Home;

const gaya = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center'
    },
    kotak: {
        backgroundColor: '#6495ED',
        elevation: 10,
        width: 379,
        height: 200,
        borderBottomStartRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 20
    },
    avatar: {
        display: 'flex',
        elevation: 10,
        height: 70,
        width: 70,
        backgroundColor: 'white',
        borderRadius: 50,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    kotakAvatar: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})