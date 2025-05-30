import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../App';

type Props = {
  route: RouteProp<RootStackParamList, 'Risk'>;
  navigation: StackNavigationProp<RootStackParamList, 'Risk'>;
};

export default function RiskScreen({ route, navigation }: Props) {
  const { record } = route.params;

  const getRiskColor = () => {
    switch(record.risk.toLowerCase()) {
      case 'alto': return '#e74c3c';
      case 'médio': return '#f39c12';
      case 'baixo': return '#2ecc71';
      default: return '#3498db';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resultado da Análise</Text>
        
        <View style={[styles.riskBadge, { backgroundColor: getRiskColor() }]}>
          <Text style={styles.riskText}>Risco: {record.risk}</Text>
        </View>

        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Umidade do Solo:</Text>
          <Text style={styles.dataValue}>{record.humidity}%</Text>
        </View>

        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Inclinação:</Text>
          <Text style={styles.dataValue}>{record.slope}°</Text>
        </View>

        <View style={styles.dataRow}>
          <Text style={styles.dataLabel}>Data:</Text>
          <Text style={styles.dataValue}>{record.date}</Text>
        </View>

        
        <View style={styles.buttonGroup}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('Input')}
          >
            <Text style={styles.buttonText}>Fazer outra medição</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate('History')}
          >
            <Text style={styles.buttonText}>Ver Histórico</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.secondaryButton]}
            onPress={() => navigation.navigate('Actions')}
          >
            <Text style={[styles.buttonText, styles.secondaryButtonText]}>Ações de Mitigação</Text>
          </TouchableOpacity>
        </View>
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
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  riskBadge: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 24,
    alignSelf: 'center',
  },
  riskText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  dataLabel: {
    fontSize: 16,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  dataValue: {
    fontSize: 16,
    color: '#2c3e50',
    fontWeight: '600',
  },
  buttonGroup: {
    marginTop: 24,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#ecf0f1',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButtonText: {
    color: '#2c3e50',
  },
});