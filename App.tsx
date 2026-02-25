import 'react-native-gesture-handler';
import React from 'react';
import {Platform, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App';

export default function App() {
  // Use View for web, GestureHandlerRootView for native
  const RootView = Platform.OS === 'web' ? View : GestureHandlerRootView;
  
  return (
    <RootView style={{flex: 1}}>
      <DataProvider>
        <AppNavigation />
      </DataProvider>
    </RootView>
  );
}
