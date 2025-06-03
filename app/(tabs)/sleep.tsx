import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Screen from '@/components/layout/Screen';
import SegmentedControl from '@/components/ui/SegmentedControl';
import SleepChart from '@/components/charts/SleepChart';
import SleepQuality from '@/components/SleepQuality';
import SleepStages from '@/components/SleepStages';
import SleepHistory from '@/components/SleepHistory';
import Colors from '@/constants/Colors';

export default function SleepScreen() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const timeframes = [
    { label: 'Week', value: 'week' },
    { label: 'Month', value: 'month' },
    { label: 'Year', value: 'year' },
  ];

  return (
    <Screen>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Sleep</Text>
          <SegmentedControl
            segments={timeframes}
            selectedValue={selectedTimeframe}
            onChange={setSelectedTimeframe}
          />
        </View>

        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Last Night</Text>
          <Text style={styles.summaryValue}>7h 20m</Text>
          <Text style={styles.summaryDescription}>
            You slept 40 minutes less than your goal
          </Text>
        </View>

        <View style={styles.chartContainer}>
          <SleepChart timeframe={selectedTimeframe} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sleep Quality</Text>
          <SleepQuality />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sleep Stages</Text>
          <SleepStages />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Sleep</Text>
          <SleepHistory />
        </View>
      </ScrollView>
    </Screen>
  );
}

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
  summaryContainer: {
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    marginBottom: 8,
  },
  summaryTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 48,
    fontWeight: '700',
    color: Colors.sleep,
  },
  summaryDescription: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  chartContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 24,
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
});