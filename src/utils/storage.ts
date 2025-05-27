import AsyncStorage from '@react-native-async-storage/async-storage';
import { RecordType } from '../../App';

export async function saveRecord(record: RecordType): Promise<void> {
  const existing = await AsyncStorage.getItem('records');
  const records = existing ? JSON.parse(existing) : [];
  records.push(record);
  await AsyncStorage.setItem('records', JSON.stringify(records));
}

export async function getRecords(): Promise<RecordType[]> {
  const existing = await AsyncStorage.getItem('records');
  return existing ? JSON.parse(existing) : [];
}
