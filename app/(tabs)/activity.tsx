import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Screen from '@/components/layout/Screen';
import SegmentedControl from '@/components/ui/SegmentedControl';
import ActivityChart from '@/components/charts/ActivityChart';
import ActivitySummary from '@/components/ActivitySummary';
import ActivityGoals from '@/components/ActivityGoals';
import WorkoutList from '@/components/WorkoutList';
import Colors from '@/constants/Colors';

export default function ActivityScreen() {
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
          <Text style={styles.headerTitle}>Activity</Text>
          <SegmentedControl
            segments={timeframes}
            selectedValue={selectedTimeframe}
            onChange={setSelectedTimeframe}
          />
        </View>

        <View style={styles.chartContainer}>
          <ActivityChart timeframe={selectedTimeframe} />
        </View>

        <View style={styles.summaryContainer}>
          <ActivitySummary />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Goals</Text>
          <ActivityGoals />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Workouts</Text>
          <WorkoutList />
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
  chartContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingBottom: 24,
    marginBottom: 8,
  },
  summaryContainer: {
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
});