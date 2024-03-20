import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './src/MapScreen';
import DistanceScreen from './src/DistanceScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MapScreen">
        <Stack.Screen name="MapScreen" component={MapScreen} options={{ title: 'Mapa' }} />
        <Stack.Screen name="DistanceScreen" component={DistanceScreen} options={{ title: 'Distância Percorrida' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
