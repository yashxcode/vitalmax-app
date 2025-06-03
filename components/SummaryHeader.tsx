import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SummaryHeader() {
  // Get current date for header
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = today.toLocaleDateString(undefined, options);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Summary</Text>
      <Text style={styles.date}>{formattedDate}</Text>
      
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          You've completed <Text style={styles.highlightText}>75%</Text> of your daily health goals
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  progressContainer: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 12,
  },
  progressText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  highlightText: {
    fontWeight: '600',
    color: '#007AFF',
  },
});