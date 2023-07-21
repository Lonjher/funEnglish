import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

import { StackActions } from '@react-navigation/native'

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Utama'))
        }, 3000);
    }
    render() {
        return (
            <View style={gaya.kotak}>
                <View style={{padding: 10}}>
                    <Image source={require('../image/logo.png')} style={gaya.image} resizeMode='contain'/>
                </View>
                <Text style={gaya.text}>
                    Let's Study English with Me
                </Text>
            </View>
        );
    }
}

export default SplashScreen;

const gaya = StyleSheet.create({
    kotak: {
        flex: 1,
        backgroundColor: '#3A507E',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 110,
        width: 110,
    },
    text:{
        color: 'white',
        fontSize: 15,
    }
})