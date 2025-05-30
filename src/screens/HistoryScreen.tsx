import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { getRecords } from '../utils/storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RecordType } from '../../App';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'History'>;
};

export default function HistoryScreen({ navigation }: Props) {
  const [records, setRecords] = useState<RecordType[]>([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const data = await getRecords();
      setRecords(data);
    };
    fetchRecords();
  }, []);

  const getRiskColor = (risk: string) => {
    switch(risk.toLowerCase()) {
      case 'alto risco': return '#e74c3c';
      case 'médio risco': return '#f1c40f';
      case 'baixo risco': return '#3498db';
      default: return '#7f8c8d';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Histórico de Monitoramento</Text>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        {records.length > 0 ? (
          records.map((item, index) => (
            <View key={`item-${index}`} style={styles.card}>
              <View style={styles.cardHeader}>
                <Text style={styles.dateText}>{item.date}</Text>
                <View style={[
                  styles.riskBadge, 
                  { backgroundColor: getRiskColor(item.risk) }
                ]}>
                  <Text style={[
                    styles.riskText,
                    { color: item.risk.toLowerCase() === 'médio' ? '#2c3e50' : 'white' }
                  ]}>
                    {item.risk}
                  </Text>
                </View>
              </View>

              <View style={styles.dataRow}>
                <Text style={styles.dataLabel}>Umidade:</Text>
                <Text style={styles.dataValue}>{item.humidity}%</Text>
              </View>

              <View style={styles.dataRow}>
                <Text style={styles.dataLabel}>Inclinação:</Text>
                <Text style={styles.dataValue}>{item.slope}°</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum registro encontrado</Text>
          </View>
        )}
      </ScrollView>
      
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('Welcome')}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  header: {
    backgroundColor: '#3498db',
    paddingVertical: 18,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  scrollContainer: {
    paddingBottom: 90,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ecf0f1',
  },
  dateText: {
    fontSize: 14,
    color: '#7f8c8d',
  },
  riskBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  riskText: {
    fontSize: 14,
    fontWeight: '600',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dataLabel: {
    fontSize: 15,
    color: '#7f8c8d',
    fontWeight: '500',
  },
  dataValue: {
    fontSize: 15,
    color: '#2c3e50',
    fontWeight: '600',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#95a5a6',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});