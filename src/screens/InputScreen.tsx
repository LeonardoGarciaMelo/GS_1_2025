import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
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

    if (isNaN(humidityValue) || isNaN(slopeValue)) {
      Alert.alert('Erro', 'Por favor, insira apenas valores numéricos.');
      return;
    }

    const risk = analyzeRisk(humidityValue, slopeValue);
    Alert.alert('Análise de Risco', `Risco: ${risk}`);

    const record: RecordType = {
      humidity: humidityValue,
      slope: slopeValue,
      risk,
      date: new Date().toLocaleString(),
    };

    await saveRecord(record);
    navigation.navigate('Risk', { record });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Umidade do Solo (%)</Text>
        <TextInput
          placeholder="Ex: 45.7"
          placeholderTextColor="#95a5a6"
          keyboardType="numeric"
          value={humidity}
          onChangeText={(text) => setHumidity(text.replace(/[^0-9.]/g, ''))}
          style={styles.input}
        />

        <Text style={styles.label}>Inclinação do Terreno (°)</Text>
        <TextInput
          placeholder="Ex: 12.5"
          placeholderTextColor="#95a5a6"
          keyboardType="numeric"
          value={slope}
          onChangeText={(text) => setSlope(text.replace(/[^0-9.]/g, ''))}
          style={styles.input}
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleAnalyze}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Analisar Risco</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2c3e50',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dfe6e9',
    padding: 14,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f8f9fa',
    color: '#2d3436',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});