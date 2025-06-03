import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import Animated, { 
  useSharedValue, 
  useAnimatedProps, 
  withTiming, 
  Easing 
} from 'react-native-reanimated';
import { useTheme } from '@/contexts/ThemeContext';
import Colors from '@/constants/Colors';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface RingProps {
  radius: number;
  strokeWidth: number;
  color: string;
  progress: number;
}

const Ring = ({ radius, strokeWidth, color, progress }: RingProps) => {
  const circumference = 2 * Math.PI * radius;
  const animatedProgress = useSharedValue(0);
  
  useEffect(() => {
    animatedProgress.value = withTiming(progress, {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [progress]);
  
  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = circumference * (1 - animatedProgress.value);
    return {
      strokeDashoffset,
    };
  });
  
  return (
    <AnimatedCircle
      cx="50%"
      cy="50%"
      r={radius}
      fill="transparent"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeDasharray={circumference}
      animatedProps={animatedProps}
      rotation="-90"
      originX={50}
      originY={50}
    />
  );
};

export default function ActivityRings() {
  const { colorScheme } = useTheme();
  const colors = Colors.get(colorScheme);
  
  const moveProgress = 0.72;
  const exerciseProgress = 0.85;
  const standProgress = 0.67;
  
  return (
    <View style={styles.container}>
      <Svg width={220} height={220} viewBox="0 0 100 100">
        <Circle cx="50%" cy="50%" r="40" stroke={colors.inactive} strokeWidth="10" fill="transparent" />
        <Circle cx="50%" cy="50%" r="28" stroke={colors.inactive} strokeWidth="10" fill="transparent" />
        <Circle cx="50%" cy="50%" r="16" stroke={colors.inactive} strokeWidth="10" fill="transparent" />
        <Ring radius={40} strokeWidth={10} color={colors.activity} progress={moveProgress} />
        <Ring radius={28} strokeWidth={10} color={colors.heart} progress={exerciseProgress} />
        <Ring radius={16} strokeWidth={10} color={colors.accent} progress={standProgress} />
      </Svg>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <View style={[styles.indicator, { backgroundColor: colors.activity }]} />
          <Text style={[styles.statLabel, { color: colors.secondaryText }]}>Move</Text>
          <Text style={[styles.statValue, { color: colors.text }]}>426/590 cal</Text>
        </View>
        <View style={styles.statItem}>
          <View style={[styles.indicator, { backgroundColor: colors.heart }]} />
          <Text style={[styles.statLabel, { color: colors.secondaryText }]}>Exercise</Text>
          <Text style={[styles.statValue, { color: colors.text }]}>25/30 min</Text>
        </View>
        <View style={styles.statItem}>
          <View style={[styles.indicator, { backgroundColor: colors.accent }]} />
          <Text style={[styles.statLabel, { color: colors.secondaryText }]}>Stand</Text>
          <Text style={[styles.statValue, { color: colors.text }]}>8/12 hr</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 16,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    marginBottom: 2,
  },
  statValue: {
    fontSize: 13,
    fontWeight: '600',
  },
});