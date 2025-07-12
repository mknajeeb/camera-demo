// app/scan.js

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as ImageManipulator from 'expo-image-manipulator';

const requestPerms = () => Camera.requestCameraPermissionsAsync();
const BACKEND      = 'http://192.168.1.195:5001';

export default function Scan() {
  // … your existing state/hooks …

  // In your return, swap out CameraView for Camera:
  return (
    <View style={styles.container}>
      <View style={{ width, height: camH }}>
        <Camera
          style={styles.camera}
          ref={cameraRef}
          ratio="16:9"
          zoom={0.9}
        />
        <View
          style={[
            styles.scanArea,
            { width: boxW, height: boxH, left: boxX, top: boxY },
          ]}
          pointerEvents="none"
        />
      </View>

      {/* … rest of your UI … */}
    </View>
  );
}

// …styles unchanged…
