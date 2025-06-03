import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { Plus } from 'lucide-react-native';

import Screen from '@/components/layout/Screen';
import SummaryHeader from '@/components/SummaryHeader';
import MetricCard from '@/components/ui/MetricCard';
import RoundButton from '@/components/ui/RoundButton';
import ActivityRings from '@/components/charts/ActivityRings';
import FavoriteMetrics from '@/components/FavoriteMetrics';
import Colors from '@/constants/Colors';

export default function SummaryScreen() {
  return (
    <Screen>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}>
        <SummaryHeader />
        
        <View style={styles.ringsContainer}>
          <ActivityRings />
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Highlights</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={styles.metricsRow}>
            <MetricCard 
              title="Steps" 
              value="7,234" 
              goal="10,000"
              unit="steps"
              progress={0.72}
              icon="footprints" 
              color={Colors.activity} />
            <MetricCard 
              title="Heart Rate" 
              value="68" 
              unit="bpm"
              trend="-4 from yesterday"
              icon="heart" 
              color={Colors.heart} />
            <MetricCard 
              title="Sleep" 
              value="7:20" 
              unit="hours"
              goal="8:00"
              progress={0.92}
              icon="moon" 
              color={Colors.sleep} />
            <MetricCard 
              title="Calories" 
              value="1,872" 
              goal="2,200"
              unit="kcal"
              progress={0.85}
              icon="flame" 
              color={Colors.nutrition} />
          </ScrollView>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Favorite Metrics</Text>
          <FavoriteMetrics />
        </View>
      </ScrollView>
      
      <View style={styles.addButtonContainer}>
        <RoundButton
          icon={<Plus size={24} color="#fff" />}
          onPress={() => router.push('/(modal)/add-data')}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ringsContainer: {
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
    color: '#000',
  },
  metricsRow: {
    paddingRight: 16,
    paddingBottom: 8,
  },
  addButtonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});