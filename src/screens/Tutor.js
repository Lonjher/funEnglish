import React, { Component } from 'react'
import { View, Alert, Text, StyleSheet, Image, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons'

class Tutor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View style={gaya.container}>
                <View
                    style={gaya.kotak}>
                    <Text style={{ color: 'black', fontSize: 25, fontWeight: 'bold', marginBottom: 20, marginTop: 5 }}>Tutor</Text>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://github.com/Lonjher')}>
                        <Image source={require('../image/11.jpg')} style={{ width: 130, height: 130, }} borderRadius={70} />
                    </TouchableOpacity>
                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold', marginVertical: 10 }}>Mr. Abdul Walid</Text>
                    <Text style={{ color: 'black', fontSize: 10, }}>Student at Institut Sains dan Teknologi</Text>
                    <Text style={{ color: 'black', fontSize: 10, marginTop: -1 }}>Annuqayah Guluk-guluk</Text>
                </View>
                <View style={{ width: '100vw', height: 80, marginTop: 10, flexDirection: 'row' }}>
                    <TouchableOpacity style={{
                        width: 150,
                        height: 60,
                        backgroundColor: '#798DB5',
                        margin: 10,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => Linking.openURL('https://wa.me/6285156752475')}>
                        <Ionicons name="chatbubble" size={20} color='white' />
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Chat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: 150,
                        height: 60,
                        backgroundColor: '#798DB5',
                        margin: 10,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onPress={() => Alert.alert('Hold on!!!', 'You have to make schedule', [
                        {
                            Text: 'Cancel',
                            onPress: () => null,
                            style: 'cancel'
                        },
                        {
                            Text: 'Ok',
                            onPress: () => null,
                            style: 'ok'
                        }
                    ])}>
                        <Ionicons name="videocam" size={20} color='white' />
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Make Videocall</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Tutor;

const gaya = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    kotak: {
        width: 350,
        height: 300,
        borderRadius: 25,
        backgroundColor: 'white',
        marginTop: 50,
        elevation: 20,
        alignItems: 'center'
    }
})