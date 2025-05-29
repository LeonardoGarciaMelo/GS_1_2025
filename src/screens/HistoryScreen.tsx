import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
      >
        {records.map((item, index) => (
          <View key={`item-${index}`} style={styles.item}>
            <Text style={styles.mainText}>
              {item.date} - {item.risk}
            </Text>
            <Text style={styles.subText}>
              Umidade: {item.humidity}%{'\n'}
              Inclinação: {item.slope}°
            </Text>
          </View>
        ))}
      </ScrollView>
      
      <View style={styles.buttonWrapper}>
        <Button 
          title="Voltar" 
          onPress={() => navigation.navigate('Welcome')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    flex: 1, 
  },
  scrollContainer: {
    paddingBottom: 80,  
  },
  item: {
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderColor: '#ccc',
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  subText: {
    color: '#555',
    marginTop: 5,
    fontSize: 14,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
});