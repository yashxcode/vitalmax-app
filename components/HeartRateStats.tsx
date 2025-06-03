import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export default function HeartRateStats() {
  const stats = [
    { label: 'Resting Rate', value: '62', unit: 'bpm', change: '-2', direction: 'down' },
    { label: 'Walking Avg', value: '98', unit: 'bpm', change: '+3', direction: 'up' },
    { label: 'Workout Avg', value: '142', unit: 'bpm', change: '+5', direction: 'up' },
    { label: 'HRV', value: '58', unit: 'ms', change: '+4', direction: 'up' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statItem}>
            <Text style={styles.statLabel}>{stat.label}</Text>
            <Text style={styles.statValue}>
              {stat.value} <Text style={styles.statUnit}>{stat.unit}</Text>
            </Text>
            <Text
              style={[
                styles.statChange,
                stat.direction === 'up' ? styles.statIncrease : styles.statDecrease,
              ]}>
              {stat.change} from last week
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.heart,
    marginBottom: 4,
  },
  statUnit: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#999',
  },
  statChange: {
    fontSize: 12,
  },
  statIncrease: {
    color: Colors.warning,
  },
  statDecrease: {
    color: Colors.success,
  },
});