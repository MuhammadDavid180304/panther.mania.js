import React, {useEffect} from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const PageScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace('NextScreen'); // Ganti 'NextScreen' dengan nama screen tujuan
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../Images/image/emptybackground.jpeg')}
      style={styles.container}>
      <Image
        source={require('../Images/image/panther-mania-car.png')}
        style={{width: '50%', height: '25%'}}
      />
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

export default PageScreen;
