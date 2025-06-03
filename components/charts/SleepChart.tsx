import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, G, Text as SvgText } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing
} from 'react-native-reanimated';
import Colors from '@/constants/Colors';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

// Sample sleep data (would come from health API in a real app)
const sampleSleepData = {
  week: [
    { date: 'Mon', hours: 7.5, quality: 0.8 },
    { date: 'Tue', hours: 6.2, quality: 0.6 },
    { date: 'Wed', hours: 8.0, quality: 0.9 },
    { date: 'Thu', hours: 7.0, quality: 0.7 },
    { date: 'Fri', hours: 6.8, quality: 0.7 },
    { date: 'Sat', hours: 8.5, quality: 0.9 },
    { date: 'Sun', hours: 7.3, quality: 0.8 },
  ],
  month: [
    { date: 'Week 1', hours: 7.2, quality: 0.75 },
    { date: 'Week 2', hours: 6.9, quality: 0.7 },
    { date: 'Week 3', hours: 7.6, quality: 0.8 },
    { date: 'Week 4', hours: 7.1, quality: 0.75 },
  ],
  year: [
    { date: 'Jan', hours: 7.0, quality: 0.7 },
    { date: 'Feb', hours: 7.3, quality: 0.75 },
    { date: 'Mar', hours: 6.8, quality: 0.65 },
    { date: 'Apr', hours: 7.5, quality: 0.8 },
    { date: 'May', hours: 7.2, quality: 0.75 },
    { date: 'Jun', hours: 6.9, quality: 0.7 },
    { date: 'Jul', hours: 7.1, quality: 0.75 },
    { date: 'Aug', hours: 7.4, quality: 0.8 },
    { date: 'Sep', hours: 7.2, quality: 0.75 },
    { date: 'Oct', hours: 7.0, quality: 0.7 },
    { date: 'Nov', hours: 7.3, quality: 0.75 },
    { date: 'Dec', hours: 7.5, quality: 0.8 },
  ],
};

interface SleepChartProps {
  timeframe: 'week' | 'month' | 'year';
}

export default function SleepChart({ timeframe }: SleepChartProps) {
  const data = sampleSleepData[timeframe];
  const SVG_WIDTH = 340;
  const SVG_HEIGHT = 180;
  const PADDING = 30;
  const GRAPH_HEIGHT = SVG_HEIGHT - (PADDING * 2);
  const GRAPH_WIDTH = SVG_WIDTH - (PADDING * 2);
  const BAR_WIDTH = (GRAPH_WIDTH / data.length) * 0.7;
  const BAR_GAP = (GRAPH_WIDTH / data.length) * 0.3;
  const MAX_HOURS = 10; // Maximum hours for scaling

  // Animation for bar heights
  const barHeights = useSharedValue(data.map(() => 0));

  useEffect(() => {
    // Reset and animate bar heights when data changes
    barHeights.value = data.map(() => 0);
    barHeights.value = withTiming(
      data.map(item => item.hours / MAX_HOURS), 
      { 
        duration: 1000, 
        easing: Easing.bezier(0.25, 0.1, 0.25, 1) 
      }
    );
  }, [data]);

  // Create bars for sleep data
  const renderBars = () => {
    return data.map((item, index) => {
      const x = PADDING + (index * (BAR_WIDTH + BAR_GAP));
      const maxBarHeight = GRAPH_HEIGHT;
      const barHeight = (item.hours / MAX_HOURS) * maxBarHeight;
      const y = SVG_HEIGHT - PADDING - barHeight;
      
      // Calculate color based on sleep quality
      const barColor = getQualityColor(item.quality);
      
      return (
        <G key={index}>
          <AnimatedRect
            x={x}
            y={y}
            width={BAR_WIDTH}
            height={barHeight}
            rx={4}
            fill={barColor}
          />
          <SvgText
            x={x + (BAR_WIDTH / 2)}
            y={SVG_HEIGHT - 10}
            fontSize="10"
            textAnchor="middle"
            fill="#999">
            {item.date}
          </SvgText>
          <SvgText
            x={x + (BAR_WIDTH / 2)}
            y={y - 8}
            fontSize="10"
            textAnchor="middle"
            fill="#666"
            fontWeight="bold">
            {item.hours.toFixed(1)}h
          </SvgText>
        </G>
      );
    });
  };
  
  // Create y-axis grid lines and hour labels
  const renderYAxis = () => {
    const lines = [];
    const hourStep = 2; // Show labels every 2 hours
    
    for (let hours = 0; hours <= MAX_HOURS; hours += hourStep) {
      const y = SVG_HEIGHT - PADDING - (hours / MAX_HOURS * GRAPH_HEIGHT);
      
      lines.push(
        <G key={hours}>
          <SvgText
            x={PADDING - 10}
            y={y + 4}
            fontSize="10"
            textAnchor="end"
            fill="#999">
            {hours}h
          </SvgText>
        </G>
      );
    }
    
    return lines;
  };
  
  // Get color based on sleep quality
  const getQualityColor = (quality: number) => {
    if (quality >= 0.8) return Colors.sleep;
    if (quality >= 0.6) return `${Colors.sleep}aa`;
    return `${Colors.sleep}77`;
  };

  return (
    <View style={styles.container}>
      <Svg width={SVG_WIDTH} height={SVG_HEIGHT}>
        {/* Y-axis labels */}
        {renderYAxis()}
        
        {/* Sleep data bars */}
        {renderBars()}
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});