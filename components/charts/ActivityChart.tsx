import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path, Line, G, Text as SvgText } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { useTheme } from '@/contexts/ThemeContext';
import Colors from '@/constants/Colors';

const AnimatedPath = Animated.createAnimatedComponent(Path);

// Sample activity data (steps per day/hour)
const sampleActivityData = {
  day: [120, 80, 50, 30, 20, 100, 1200, 2400, 3100, 3600, 4200, 4900, 5300, 5900, 6400, 6800, 7100, 7200, 7300, 7350, 7400, 7450, 7500, 7600],
  week: [5400, 7800, 6200, 9100, 7300, 8500, 4200],
  month: [6500, 7200, 6800, 5900, 7400, 7900, 6300, 5800, 6100, 7300, 7800, 6500, 7400, 7900, 8200, 7800, 7200, 6800, 7400, 7900, 8300, 7800, 7200, 6800, 7400, 7900, 8200, 7800],
};

interface ActivityChartProps {
  timeframe: string;
}

export default function ActivityChart({ timeframe }: ActivityChartProps) {
  const { colorScheme } = useTheme();
  const colors = Colors.get(colorScheme);
  
  // Get appropriate data based on timeframe
  const data = sampleActivityData[timeframe as keyof typeof sampleActivityData] || sampleActivityData.day;
  
  const SVG_WIDTH = 340;
  const SVG_HEIGHT = 180;
  const PADDING = 20;
  const GRAPH_HEIGHT = SVG_HEIGHT - (PADDING * 2);
  const GRAPH_WIDTH = SVG_WIDTH - (PADDING * 2);
  
  // Find max value for scaling
  const maxValue = Math.max(...data);
  // Animation progress value
  const progressValue = useSharedValue(0);

  useEffect(() => {
    progressValue.value = 0;
    progressValue.value = withTiming(1, {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, [data]);

  // Create path for the activity line
  const createPath = () => {
    const xStep = GRAPH_WIDTH / (data.length - 1);
    
    let pathD = '';
    // Create the line
    data.forEach((value, index) => {
      const x = PADDING + (index * xStep);
      const y = PADDING + GRAPH_HEIGHT - (value / maxValue * GRAPH_HEIGHT);
      
      if (index === 0) {
        pathD += `M ${x} ${y}`;
      } else {
        pathD += ` L ${x} ${y}`;
      }
    });
    
    // Add the area fill
    pathD += ` L ${PADDING + GRAPH_WIDTH} ${PADDING + GRAPH_HEIGHT}`;
    pathD += ` L ${PADDING} ${PADDING + GRAPH_HEIGHT} Z`;
    
    return pathD;
  };
  
  const linePath = createPath();

  // Animate the path drawing
  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: (1 - progressValue.value) * linePath.length,
      fillOpacity: progressValue.value * 0.2,
    };
  });

  // Create x-axis labels
  const renderXLabels = () => {
    const labels = [];
    let labelTexts: string[] = [];
    
    if (timeframe === 'day') {
      labelTexts = ['12 AM', '6 AM', '12 PM', '6 PM', '12 AM'];
    } else if (timeframe === 'week') {
      labelTexts = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    } else if (timeframe === 'month') {
      labelTexts = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
    }
    
    const step = GRAPH_WIDTH / (labelTexts.length - 1);
    
    labelTexts.forEach((label, index) => {
      const x = PADDING + (index * step);
      
      labels.push(
        <SvgText
          key={index}
          x={x}
          y={SVG_HEIGHT - 5}
          fontSize="10"
          textAnchor="middle"
          fill={colors.secondaryText}>
          {label}
        </SvgText>
      );
    });
    
    return labels;
  };

  // Create y-axis grid lines and labels
  const renderYGrid = () => {
    const lines = [];
    const count = 5;
    const step = GRAPH_HEIGHT / (count - 1);
    const valueStep = maxValue / (count - 1);
    
    for (let i = 0; i < count; i++) {
      const y = PADDING + (i * step);
      const value = Math.round(maxValue - (i * valueStep));
      
      // Format value display (e.g., 10000 -> 10k)
      const formattedValue = value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value.toString();
      
      lines.push(
        <G key={i}>
          <Line
            x1={PADDING}
            y1={y}
            x2={SVG_WIDTH - PADDING}
            y2={y}
            stroke={colors.border}
            strokeWidth="1"
          />
          <SvgText
            x={PADDING - 5}
            y={y + 4}
            fontSize="10"
            textAnchor="end"
            fill={colors.secondaryText}>
            {formattedValue}
          </SvgText>
        </G>
      );
    }
    
    return lines;
  };

  return (
    <View style={styles.container}>
      <Svg width={SVG_WIDTH} height={SVG_HEIGHT}>
        {/* Y-axis grid lines and labels */}
        {renderYGrid()}
        
        {/* X-axis labels */}
        {renderXLabels()}
        
        {/* Activity line and area fill */}
        <AnimatedPath
          d={linePath}
          fill={colors.activity}
          fillOpacity={0.2}
          stroke={colors.activity}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={linePath.length}
          animatedProps={animatedProps}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
});