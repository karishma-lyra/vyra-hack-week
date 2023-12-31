import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroTrackingStateConstants,
  ViroVRSceneNavigator,
  ViroARSceneNavigator,
  Viro360Image,
  ViroScene
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Initializing AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroTrackingStateConstants.TRACKING_NORMAL) {
      setText('Hello World!');
    } else if (state === ViroTrackingStateConstants.TRACKING_UNAVAILABLE) {
      // Handle loss of tracking
    }
  }

  return (
    // <ViroScene style={styles.container}>
    //     
    //   </ViroScene>

    // <Viro360Image
    //     source={require("./assets/wallpaperflare.com_wallpaper.jpg")}
    //     rotation={[0, 45, 0]}
    //     format="RGBA8"
    //     onLoadStart={handleLoadStart}
    //     onLoadEnd={handleLoadEnd}
    //     onError={handleError}
    //   />
    <ViroARScene onTrackingUpdated={onInitialized}>
      <Viro360Image source={require("./assets/wallpaperflare.com_wallpaper.jpg")}/>
      {/* <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      /> */}
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
