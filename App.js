import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigasi from './src/navigation/Navigasi';

export default class App extends React.Component {
  async componentWillMount(){
    const soundObject = new Expo.Audio.Sound();
    try{
       await soundObject.loadAsync(require('./assets/sound/bg_sound.mp3'));
       await soundObject.setIsLoopingAsync(true);
       await soundObject.replayAsync();

    }catch(error){
      console.log(error);
    }
  }
  render() {
    return (
      <Navigasi/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
