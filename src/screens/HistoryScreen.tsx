import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { getRecords } from '../utils/storage';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, RecordType } from '../../App';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'History'>;
};

export default function HistoryScreen({ navigation }: Props) {
  const [records, setRecords] = useState<RecordType[]>([]);

  useEffect(() => {
    const fetch = async () => setRecords(await getRecords());
    fetch();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={records}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Text>{item.date} - {item.risk}</Text>
        )}
      />
      <Button title="Voltar" onPress={() => navigation.navigate('Input')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
});
