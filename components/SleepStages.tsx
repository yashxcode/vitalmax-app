import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export default function SleepStages() {
  // Sample sleep stages data
  const sleepStages = [
    { stage: 'Awake', duration: '12 min', percentage: 3, color: '#ccc' },
    { stage: 'REM', duration: '1h 45m', percentage: 24, color: '#ff9500' },
    { stage: 'Light', duration: '3h 58m', percentage: 54, color: '#5ac8fa' },
    { stage: 'Deep', duration: '1h 25m', percentage: 19, color: Colors.sleep },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.stagesBar}>
        {sleepStages.map((stage, index) => (
          <View
            key={index}
            style={[
              styles.stageSegment,
              { 
                width: `${stage.percentage}%`, 
                backgroundColor: stage.color 
              }
            ]}
          />
        ))}
      </View>

      <View style={styles.stagesList}>
        {sleepStages.map((stage, index) => (
          <View key={index} style={styles.stageItem}>
            <View style={styles.stageHeader}>
              <View 
                style={[
                  styles.stageIndicator,
                  { backgroundColor: stage.color }
                ]} 
              />
              <Text style={styles.stageName}>{stage.stage}</Text>
            </View>
            
            <View style={styles.stageDetails}>
              <Text style={styles.stageDuration}>{stage.duration}</Text>
              <Text style={styles.stagePercentage}>{stage.percentage}%</Text>
            </View>
          </View>
        ))}
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Your deep sleep was better than usual. Good deep sleep helps with memory consolidation and physical recovery.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  stagesBar: {
    flexDirection: 'row',
    height: 24,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  stageSegment: {
    height: '100%',
  },
  stagesList: {
    marginBottom: 16,
  },
  stageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  stageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stageIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  stageName: {
    fontSize: 16,
    fontWeight: '500',
  },
  stageDetails: {
    alignItems: 'flex-end',
  },
  stageDuration: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  stagePercentage: {
    fontSize: 14,
    color: '#666',
  },
  infoContainer: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 12,
    marginTop: 8,
  },
  infoText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
});