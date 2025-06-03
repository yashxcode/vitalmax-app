import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Line, G, Text as SvgText } from 'react-native-svg';
import Animated, { 
  useSharedValue, 
  useAnimatedProps, 
  withTiming,
  Easing
} from 'react-native-reanimated';
import Colors from '@/constants/Colors';

const AnimatedPath = Animated.createAnimatedComponent(Path);

// Sample heart rate data (would come from health API in a real app)
const sampleHeartRateData = {
  day: [68, 72, 75, 71, 69, 83, 110, 95, 76, 75, 73, 70, 68, 72, 77, 90, 88, 76, 72, 70, 69, 67, 65, 64],
  week: [65, 68, 72, 70, 75, 69, 67],
  month: [67, 68, 70, 69, 73, 72, 68, 67, 66, 70, 72, 71, 69, 68, 70, 73, 76, 74, 70, 69, 68, 72, 70, 67, 66, 68, 67, 66, 65, 66],
};

interface HeartRateGraphProps {
  timeframe: 'day' | 'week' | 'month';
}

export default function HeartRateGraph({ timeframe }: HeartRateGraphProps) {
  const data = sampleHeartRateData[timeframe];
  const SVG_WIDTH = 340;
  const SVG_HEIGHT = 180;
  const PADDING = 20;
  const GRAPH_HEIGHT = SVG_HEIGHT - (PADDING * 2);
  const GRAPH_WIDTH = SVG_WIDTH - (PADDING * 2);
  
  // Calculate min and max values for y-axis scaling
  const minValue = Math.min(...data) - 5;
  const maxValue = Math.max(...data) + 5;
  const valueRange = maxValue - minValue;
  
  // Animation for the path drawing
  const pathLength = useSharedValue(0);
  
  useEffect(() => {
    pathLength.value = 0; // Reset animation when data changes
    pathLength.value = withTiming(1, {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [data]);
  
  // Create the path for the heart rate line
  const createPath = () => {
    const xStep = GRAPH_WIDTH / (data.length - 1);
    
    let path = '';
    data.forEach((value, index) => {
      const x = PADDING + (index * xStep);
      const y = PADDING + GRAPH_HEIGHT - ((value - minValue) / valueRange) * GRAPH_HEIGHT;
      
      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    });
    
    return path;
  };
  
  const path = createPath();
  
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: (1 - pathLength.value) * (path.length || 1000),
    };
  });

  // Create x-axis labels based on timeframe
  const renderXLabels = () => {
    const labels = [];
    const xStep = GRAPH_WIDTH / (timeframe === 'day' ? 5 : data.length - 1);
    
    if (timeframe === 'day') {
      // Show hours for day view
      const hours = ['12AM', '6AM', '12PM', '6PM', '12AM'];
      hours.forEach((hour, index) => {
        labels.push(
          <SvgText
            key={index}
            x={PADDING + (index * xStep)}
            y={SVG_HEIGHT - 5}
            fontSize="10"
            textAnchor="middle"
            fill="#999">
            {hour}
          </SvgText>
        );
      });
    } else if (timeframe === 'week') {
      // Show days for week view
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      days.forEach((day, index) => {
        labels.push(
          <SvgText
            key={index}
            x={PADDING + (index * xStep)}
            y={SVG_HEIGHT - 5}
            fontSize="10"
            textAnchor="middle"
            fill="#999">
            {day}
          </SvgText>
        );
      });
    } else {
      // Show weeks for month view
      for (let i = 0; i < 5; i++) {
        const week = `Week ${i + 1}`;
        labels.push(
          <SvgText
            key={i}
            x={PADDING + (i * (GRAPH_WIDTH / 4))}
            y={SVG_HEIGHT - 5}
            fontSize="10"
            textAnchor="middle"
            fill="#999">
            {week}
          </SvgText>
        );
      }
    }
    
    return labels;
  };
  
  // Create y-axis grid lines and labels
  const renderYGrid = () => {
    const lines = [];
    const count = 5; // 5 grid lines
    
    for (let i = 0; i < count; i++) {
      const y = PADDING + (i * (GRAPH_HEIGHT / (count - 1)));
      const value = Math.round(maxValue - (i * (valueRange / (count - 1))));
      
      lines.push(
        <G key={i}>
          <Line
            x1={PADDING}
            y1={y}
            x2={SVG_WIDTH - PADDING}
            y2={y}
            stroke="#eee"
            strokeWidth="1"
          />
          <SvgText
            x={PADDING - 5}
            y={y + 4}
            fontSize="10"
            textAnchor="end"
            fill="#999">
            {value}
          </SvgText>
        </G>
      );
    }
    
    return lines;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate</Text>
      
      <Svg width={SVG_WIDTH} height={SVG_HEIGHT}>
        {/* Y-axis grid lines and labels */}
        {renderYGrid()}
        
        {/* X-axis labels */}
        {renderXLabels()}
        
        {/* Heart rate line */}
        <AnimatedPath
          d={path}
          fill="none"
          stroke={Colors.heart}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={path.length || 1000}
          animatedProps={animatedProps}
        />
      </Svg>
      
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Average</Text>
          <Text style={styles.statValue}>72 bpm</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Min</Text>
          <Text style={styles.statValue}>64 bpm</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statLabel}>Max</Text>
          <Text style={styles.statValue}>110 bpm</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  stat: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.heart,
  },
});