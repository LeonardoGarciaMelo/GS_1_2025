import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import InputScreen from './src/screens/InputScreen';
import RiskScreen from './src/screens/RiskScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import ActionsScreen from './src/screens/ActionsScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Input: undefined;
  Risk: { record: RecordType };
  History: undefined;
  Actions: undefined;
};

export type RecordType = {
  humidity: string;
  slope: string;
  risk: string;
  date: string;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Risk" component={RiskScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Actions" component={ActionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
