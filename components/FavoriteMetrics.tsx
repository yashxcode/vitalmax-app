import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heart, Droplet, Scale } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function FavoriteMetrics() {
  return (
    <View style={styles.container}>
      <View style={styles.metric}>
        <View style={[styles.iconContainer, { backgroundColor: `${Colors.heart}15` }]}>
          <Heart size={20} color={Colors.heart} />
        </View>
        <View style={styles.metricContent}>
          <Text style={styles.metricTitle}>Resting Heart Rate</Text>
          <View style={styles.metricValueContainer}>
            <Text style={[styles.metricValue, { color: Colors.heart }]}>68</Text>
            <Text style={styles.metricUnit}>bpm</Text>
          </View>
          <View style={styles.metricInfo}>
            <View style={[styles.metricTrendIndicator, { backgroundColor: Colors.success }]} />
            <Text style={styles.metricTrend}>Normal (60-100 bpm)</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.metric}>
        <View style={[styles.iconContainer, { backgroundColor: `${Colors.water}15` }]}>
          <Droplet size={20} color={Colors.water} />
        </View>
        <View style={styles.metricContent}>
          <Text style={styles.metricTitle}>Water Intake</Text>
          <View style={styles.metricValueContainer}>
            <Text style={[styles.metricValue, { color: Colors.water }]}>1.2</Text>
            <Text style={styles.metricUnit}>L</Text>
          </View>
          <View style={styles.metricInfo}>
            <View style={[styles.metricTrendIndicator, { backgroundColor: Colors.warning }]} />
            <Text style={styles.metricTrend}>40% of daily goal</Text>
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.metric}>
        <View style={[styles.iconContainer, { backgroundColor: `${Colors.weight}15` }]}>
          <Scale size={20} color={Colors.weight} />
        </View>
        <View style={styles.metricContent}>
          <Text style={styles.metricTitle}>Weight</Text>
          <View style={styles.metricValueContainer}>
            <Text style={[styles.metricValue, { color: Colors.weight }]}>74.2</Text>
            <Text style={styles.metricUnit}>kg</Text>
          </View>
          <View style={styles.metricInfo}>
            <View style={[styles.metricTrendIndicator, { backgroundColor: Colors.success }]} />
            <Text style={styles.metricTrend}>-0.5 kg this week</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  metric: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  metricContent: {
    flex: 1,
  },
  metricTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  metricValueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  metricValue: {
    fontSize: 18,
    fontWeight: '600',
  },
  metricUnit: {
    fontSize: 14,
    color: '#999',
    marginLeft: 4,
  },
  metricInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricTrendIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  metricTrend: {
    fontSize: 12,
    color: '#999',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 4,
  },
});