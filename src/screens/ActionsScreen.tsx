import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Actions'>;
};

export default function ActionsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ações de Mitigação</Text>
      <Text>- Evite construções em áreas inclinadas.</Text>
      <Text>- Mantenha sistema de drenagem limpo.</Text>
      <Text>- Siga alertas da Defesa Civil.</Text>
      <Button title="Voltar" onPress={() => navigation.navigate('Input')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
});
