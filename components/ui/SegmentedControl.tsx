import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Colors from '@/constants/Colors';

interface Segment {
  label: string;
  value: string;
}

interface SegmentedControlProps {
  segments: Segment[];
  selectedValue: string;
  onChange: (value: string) => void;
}

export default function SegmentedControl({
  segments,
  selectedValue,
  onChange
}: SegmentedControlProps) {
  const selectedIndex = segments.findIndex(segment => segment.value === selectedValue);
  const translateX = useSharedValue(selectedIndex * (100 / segments.length));
  
  const selectSegment = (value: string, index: number) => {
    translateX.value = withTiming(index * (100 / segments.length));
    onChange(value);
  };
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: `${translateX.value}%` }
      ],
      width: `${100 / segments.length}%`
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.selectionIndicator, animatedStyle]} />
      
      {segments.map((segment, index) => (
        <TouchableOpacity
          key={segment.value}
          style={styles.segment}
          onPress={() => selectSegment(segment.value, index)}>
          <Text
            style={[
              styles.segmentText,
              selectedValue === segment.value && styles.activeSegmentText
            ]}>
            {segment.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    height: 36,
    position: 'relative',
    marginBottom: 8,
  },
  segment: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  segmentText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#999',
  },
  activeSegmentText: {
    color: Colors.primary,
    fontWeight: '600',
  },
  selectionIndicator: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});