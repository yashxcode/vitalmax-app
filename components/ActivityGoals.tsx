import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import Colors from '@/constants/Colors';

export default function ActivityGoals() {
  const goals = [
    { name: 'Steps', current: 7234, target: 10000, color: Colors.activity },
    { name: 'Active Minutes', current: 42, target: 60, color: Colors.activity },
    { name: 'Standing Hours', current: 8, target: 12, color: Colors.activity },
    { name: 'Move Goal', current: 426, target: 590, color: Colors.activity },
  ];

  const progressValues = goals.map(() => useSharedValue(0));

  React.useEffect(() => {
    goals.forEach((goal, index) => {
      const progress = goal.current / goal.target;
      progressValues[index].value = withTiming(progress, {
        duration: 1000 + (index * 200),
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      });
    });
  }, []);

  return (
    <View style={styles.container}>
      {goals.map((goal, index) => {
        const percentage = Math.min(Math.round((goal.current / goal.target) * 100), 100);
        
        const progressStyle = useAnimatedStyle(() => {
          return {
            width: `${progressValues[index].value * 100}%`,
          };
        });

        return (
          <View key={index} style={styles.goalItem}>
            <View style={styles.goalHeader}>
              <Text style={styles.goalName}>{goal.name}</Text>
              <Text style={styles.goalPercentage}>{percentage}%</Text>
            </View>
            <View style={styles.progressBackground}>
              <Animated.View style={[styles.progressFill, { backgroundColor: goal.color }, progressStyle]} />
            </View>
            <View style={styles.goalFooter}>
              <Text style={styles.goalCurrent}>{goal.current}</Text>
              <Text style={styles.goalTarget}>{goal.target}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  goalItem: {
    marginBottom: 20,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  goalName: {
    fontSize: 16,
    fontWeight: '500',
  },
  goalPercentage: {
    fontSize: 14,
    color: '#666',
  },
  progressBackground: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 4,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  goalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  goalCurrent: {
    fontSize: 12,
    color: '#666',
  },
  goalTarget: {
    fontSize: 12,
    color: '#666',
  },
});