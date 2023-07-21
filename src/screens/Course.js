import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={'flex: 1'}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            Course Screen
          </Text>
        </View>
        <View
          style={{
            width: '100vw',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Ionicons name="bug-outline" size={200} color={'black'} />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
            }}>
            The system is in maintanance. Please contact the devoloper for you
            need. Thank You for your visit. You can enjoy one of our services in
            Home Page
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Home')}
          style={gaya.tombol}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            Back
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Course;
const gaya = StyleSheet.create({
  tombol: {
    width: 100,
    height: 40,
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
