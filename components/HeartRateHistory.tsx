import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export default function HeartRateHistory() {
  // Sample heart rate history data
  const heartRateHistory = [
    { time: '9:45 AM', value: 72, type: 'Resting' },
    { time: '11:30 AM', value: 98, type: 'Walking' },
    { time: '1:15 PM', value: 68, type: 'Resting' },
    { time: '3:00 PM', value: 142, type: 'Exercise' },
    { time: '5:30 PM', value: 75, type: 'Resting' },
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Resting': return Colors.success;
      case 'Walking': return Colors.primary;
      case 'Exercise': return Colors.warning;
      default: return Colors.heart;
    }
  };

  return (
    <View style={styles.container}>
      {heartRateHistory.map((record, index) => (
        <View key={index} style={styles.recordItem}>
          <View>
            <Text style={styles.recordTime}>{record.time}</Text>
            <View style={styles.recordType}>
              <View 
                style={[
                  styles.typeIndicator, 
                  { backgroundColor: getTypeColor(record.type) }
                ]} 
              />
              <Text style={styles.typeText}>{record.type}</Text>
            </View>
          </View>
          
          <Text style={styles.recordValue}>
            {record.value} <Text style={styles.recordUnit}>bpm</Text>
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  recordItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  recordTime: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  recordType: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  typeText: {
    fontSize: 14,
    color: '#666',
  },
  recordValue: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.heart,
  },
  recordUnit: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#999',
  },
});