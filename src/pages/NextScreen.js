import React, {useEffect} from 'react';
import {StyleSheet, View, ImageBackground, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NextScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.replace('CostumeScreen');
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [navigation]);
  return (
    <ImageBackground
      source={require('../Images/image/defaultbackground.png')}
      style={styles.container}>
      <Image source={require('../Images/image/panther-mania-car.png')} />
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

export default NextScreen;
