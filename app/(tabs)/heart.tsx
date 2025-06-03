import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Screen from '@/components/layout/Screen';
import HeartRateGraph from '@/components/charts/HeartRateGraph';
import HeartRateStats from '@/components/HeartRateStats';
import SegmentedControl from '@/components/ui/SegmentedControl';
import HeartRateHistory from '@/components/HeartRateHistory';
import Colors from '@/constants/Colors';

export default function HeartScreen() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('day');
  const timeframes = [
    { label: 'Day', value: 'day' },
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
  ];

  return (
    <Screen>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Heart Rate</Text>
          <SegmentedControl
            segments={timeframes}
            selectedValue={selectedTimeframe}
            onChange={setSelectedTimeframe}
          />
        </View>

        <View style={styles.currentContainer}>
          <Text style={styles.currentTitle}>Current</Text>
          <Text style={styles.currentValue}>68 <Text style={styles.currentUnit}>BPM</Text></Text>
          <Text style={styles.currentStatus}>Normal</Text>
        </View>

        <View style={styles.graphContainer}>
          <HeartRateGraph timeframe={selectedTimeframe} />
        </View>

        <View style={styles.statsContainer}>
          <HeartRateStats />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Heart Rate Zones</Text>
          <View style={styles.zonesContainer}>
            {heartRateZones.map((zone, index) => (
              <View key={index} style={[styles.zoneItem, { backgroundColor: zone.bgColor }]}>
                <Text style={styles.zoneName}>{zone.name}</Text>
                <Text style={styles.zoneRange}>{zone.range} bpm</Text>
                <Text style={styles.zoneTime}>{zone.time} today</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Measurements</Text>
          <HeartRateHistory />
        </View>
      </ScrollView>
    </Screen>
  );
}

const heartRateZones = [
  { name: 'Resting', range: '50-60', time: '6h 23m', bgColor: 'rgba(52, 199, 89, 0.1)' },
  { name: 'Low', range: '61-100', time: '11h 45m', bgColor: 'rgba(0, 122, 255, 0.1)' },
  { name: 'Moderate', range: '101-130', time: '42m', bgColor: 'rgba(255, 149, 0, 0.1)' },
  { name: 'High', range: '131-160', time: '15m', bgColor: 'rgba(255, 59, 48, 0.1)' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000',
  },
  currentContainer: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    marginBottom: 8,
  },
  currentTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  currentValue: {
    fontSize: 48,
    fontWeight: '700',
    color: Colors.heart,
  },
  currentUnit: {
    fontSize: 24,
    fontWeight: '400',
    color: '#666',
  },
  currentStatus: {
    fontSize: 16,
    color: Colors.success,
    marginTop: 4,
  },
  graphContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 24,
    marginBottom: 8,
  },
  statsContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  zonesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  zoneItem: {
    width: '48%',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  zoneName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  zoneRange: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  zoneTime: {
    fontSize: 14,
    fontWeight: '500',
  },
});