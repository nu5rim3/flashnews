import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loader = ({ item }) => (
    <View>
      <ActivityIndicator size="small" color="#000000"/>
    </View>
  );

  export default Loader;