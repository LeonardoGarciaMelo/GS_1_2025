import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type Props = {
  route: RouteProp<RootStackParamList, 'Risk'>;
  navigation: StackNavigationProp<RootStackParamList, 'Risk'>;
};

export default function RiskScreen({ route, navigation }: Props) {
  const { record } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Risco: {record.risk}</Text>
      <Text>Umidade: {record.humidity}%</Text>
      <Text>Inclinação: {record.slope}°</Text>
      <Button title="Ver Histórico" onPress={() => navigation.navigate('History')} />
      <Button title="Ações de Mitigação" onPress={() => navigation.navigate('Actions')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
