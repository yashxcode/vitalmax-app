import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Footprints, Clock, Flame, TrendingUp } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function ActivitySummary() {
  const metrics = [
    { 
      icon: <Footprints size={18} color={Colors.activity} />, 
      label: 'Steps', 
      value: '7,234', 
      comparison: '+12% from yesterday' 
    },
    { 
      icon: <Clock size={18} color={Colors.activity} />, 
      label: 'Active Time', 
      value: '42m', 
      comparison: '-5m from yesterday' 
    },
    { 
      icon: <Flame size={18} color={Colors.activity} />, 
      label: 'Calories', 
      value: '426', 
      comparison: '+45 from yesterday' 
    },
    { 
      icon: <TrendingUp size={18} color={Colors.activity} />, 
      label: 'Flights Climbed', 
      value: '12', 
      comparison: '+3 from yesterday' 
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {metrics.map((metric, index) => (
          <View key={index} style={styles.metricItem}>
            <View style={styles.metricHeader}>{metric.icon}<Text style={styles.metricLabel}>{metric.label}</Text></View>
            <Text style={styles.metricValue}>{metric.value}</Text>
            <Text style={styles.metricComparison}>{metric.comparison}</Text>
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
  metricItem: {
    width: '48%',
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  metricHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  metricLabel: {
    marginLeft: 6,
    fontSize: 14,
    color: '#666',
  },
  metricValue: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  metricComparison: {
    fontSize: 12,
    color: '#999',
  },
});