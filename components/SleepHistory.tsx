import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export default function SleepHistory() {
  // Sample sleep history data
  const sleepHistory = [
    { 
      day: 'Today', 
      date: 'Mar 15', 
      duration: '7h 20m', 
      timeInBed: '8h 5m',
      quality: 82, 
      timeAsleep: { start: '11:40 PM', end: '7:00 AM' } 
    },
    { 
      day: 'Yesterday', 
      date: 'Mar 14', 
      duration: '6h 45m', 
      timeInBed: '7h 30m',
      quality: 76,
      timeAsleep: { start: '12:15 AM', end: '7:00 AM' } 
    },
    { 
      day: 'Saturday', 
      date: 'Mar 13', 
      duration: '8h 10m', 
      timeInBed: '8h 45m',
      quality: 88,
      timeAsleep: { start: '11:00 PM', end: '7:10 AM' } 
    },
  ];
  
  // Get quality color
  const getQualityColor = (quality: number) => {
    if (quality >= 85) return Colors.success;
    if (quality >= 70) return Colors.sleep;
    if (quality >= 50) return Colors.warning;
    return Colors.error;
  };

  return (
    <View style={styles.container}>
      {sleepHistory.map((sleep, index) => (
        <View key={index} style={styles.sleepItem}>
          <View style={styles.dayInfo}>
            <Text style={styles.dayText}>{sleep.day}</Text>
            <Text style={styles.dateText}>{sleep.date}</Text>
          </View>
          
          <View style={styles.sleepDetails}>
            <View style={styles.durationContainer}>
              <Text style={styles.durationValue}>{sleep.duration}</Text>
              <Text style={styles.sleepTime}>
                {sleep.timeAsleep.start} - {sleep.timeAsleep.end}
              </Text>
            </View>
            
            <View style={styles.qualityContainer}>
              <View 
                style={[
                  styles.qualityIndicator, 
                  { backgroundColor: getQualityColor(sleep.quality) }
                ]} 
              />
              <Text style={styles.qualityText}>{sleep.quality}% quality</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  sleepItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  dayInfo: {
    width: 80,
  },
  dayText: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  dateText: {
    fontSize: 14,
    color: '#999',
  },
  sleepDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  durationContainer: {
    flex: 1,
  },
  durationValue: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.sleep,
    marginBottom: 2,
  },
  sleepTime: {
    fontSize: 12,
    color: '#999',
  },
  qualityContainer: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  qualityIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  qualityText: {
    fontSize: 14,
    color: '#666',
  },
});