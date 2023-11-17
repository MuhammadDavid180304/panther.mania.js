import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {green, greenyoung, grey, greyyoung, white} from '../utils/color';
import QRCodeScanner from 'react-native-qrcode-scanner';

const CostumeScreen = () => {
  const navigation = useNavigation();

  const onSuccess = e => {
    console.log('QR Code scan result:', e.data);
    // Lakukan sesuatu dengan hasil scan, misalnya navigasi ke screen lain
  };

  return (
    <ImageBackground
      source={require('../Images/image/defaultbackground.png')}
      style={styles.container}>
      <Image source={require('../Images/image/panther-mania-car.png')} />
      <TouchableOpacity
        onPress={() => navigation.navigate('ScanScreen')}
        style={{
          backgroundColor: '#2f4f4f',
          borderWidth: 2,
          paddingVertical: 15,
          borderRadius: 35,
          borderWidth: 2,
          borderColor: white,
          paddingHorizontal: '25%',
          margin: 10,
        }}>
        <Text style={{fontSize: 20, color: white}}>SCAN ID</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#2f4f4f',
          borderWidth: 2,
          paddingVertical: 15,
          borderRadius: 35,
          borderWidth: 2,
          borderColor: white,
          paddingHorizontal: '25%',
        }}>
        <Text style={{fontSize: 20, color: white}}>MASUK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#2f4f4f',
          borderWidth: 2,
          paddingVertical: 15,
          borderRadius: 35,
          borderWidth: 2,
          borderColor: white,
          paddingHorizontal: '25%',
          margin: 10,
        }}>
        <Text style={{fontSize: 20, color: white}}>DAFTAR</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CostumeScreen;
