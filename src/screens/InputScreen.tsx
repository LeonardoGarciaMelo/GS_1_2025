import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList, RecordType } from '../../App';
import { analyzeRisk } from '../utils/riskAnalyzer';
import { saveRecord } from '../utils/storage';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Input'>;
  route: RouteProp<RootStackParamList, 'Input'>;
};

export default function InputScreen({ navigation }: Props) {
  const [humidity, setHumidity] = useState('');
  const [slope, setSlope] = useState('');

  const handleAnalyze = async () => {
    const humidityValue = parseFloat(humidity);
    const slopeValue = parseFloat(slope);
    const risk = analyzeRisk(humidityValue, slopeValue);

    const record: RecordType = {
      humidity,
      slope,
      risk,
      date: new Date().toLocaleString(),
    };

    await saveRecord(record);
    navigation.navigate('Risk', { record });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Umidade (%)"
        keyboardType="numeric"
        value={humidity}
        onChangeText={setHumidity}
        style={styles.input}
      />
      <TextInput
        placeholder="Inclinação (°)"
        keyboardType="numeric"
        value={slope}
        onChangeText={setSlope}
        style={styles.input}
      />
      <Button title="Analisar Risco" onPress={handleAnalyze} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 5 },
});
