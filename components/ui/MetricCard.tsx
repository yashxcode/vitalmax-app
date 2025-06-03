import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heart, Footprints, Moon, Flame, Droplet, Scale } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  goal?: string;
  progress?: number;
  trend?: string;
  icon: string;
  color: string;
}

export default function MetricCard({ title, value, unit, goal, progress, trend, icon, color }: MetricCardProps) {
  // Animation for progress bar
  const progressWidth = useSharedValue(0);
  
  const progressStyle = useAnimatedStyle(() => {
    if (progress !== undefined) {
      progressWidth.value = withTiming(progress, { duration: 1000 });
      return {
        width: `${progressWidth.value * 100}%`,
      };
    }
    return { width: 0 };
  });

  const renderIcon = () => {
    const props = { size: 24, color: color };
    
    switch(icon) {
      case 'heart':
        return <Heart {...props} />;
      case 'footprints':
        return <Footprints {...props} />;
      case 'moon':
        return <Moon {...props} />;
      case 'flame':
        return <Flame {...props} />;
      case 'droplet':
        return <Droplet {...props} />;
      case 'scale':
        return <Scale {...props} />;
      default:
        return <Heart {...props} />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.iconContainer, { backgroundColor: `${color}10` }]}>
          {renderIcon()}
        </View>
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <View style={styles.valueContainer}>
        <Text style={styles.value}>{value}</Text>
        {unit && <Text style={styles.unit}>{unit}</Text>}
      </View>
      
      {progress !== undefined && goal && (
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <Animated.View
              style={[
                styles.progressFill,
                progressStyle,
                { backgroundColor: color }
              ]}
            />
          </View>
          <Text style={styles.goalText}>Goal: {goal}</Text>
        </View>
      )}
      
      {trend && (
        <Text style={styles.trend}>{trend}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
    marginBottom: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    width: 160,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  value: {
    fontSize: 24,
    fontWeight: '700',
  },
  unit: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  progressContainer: {
    marginTop: 12,
  },
  progressBackground: {
    height: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 2,
  },
  goalText: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  trend: {
    fontSize: 12,
    color: '#999',
    marginTop: 8,
  },
});