import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Moon } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function SleepQuality() {
  // Sample sleep quality score (0-100)
  const sleepScore = 82;
  const maxScore = 100;
  
  // Animated value for progress
  const progressValue = useSharedValue(0);
  
  React.useEffect(() => {
    progressValue.value = withTiming(sleepScore / maxScore, {
      duration: 1500,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
    });
  }, []);
  
  // Create animated style for progress arc
  const progressStyle = useAnimatedStyle(() => {
    return {
      width: `${progressValue.value * 100}%`,
    };
  });
  
  // Determine sleep quality category
  const getSleepQualityCategory = (score: number) => {
    if (score >= 85) return { label: 'Excellent', color: Colors.success };
    if (score >= 70) return { label: 'Good', color: Colors.secondary };
    if (score >= 50) return { label: 'Fair', color: Colors.warning };
    return { label: 'Poor', color: Colors.error };
  };
  
  const qualityCategory = getSleepQualityCategory(sleepScore);

  return (
    <View style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.scoreHeader}>
          <Moon size={20} color={Colors.sleep} />
          <Text style={styles.scoreTitle}>Sleep Quality Score</Text>
        </View>
        
        <View style={styles.scoreDisplay}>
          <Text style={styles.scoreValue}>{sleepScore}</Text>
          <Text style={styles.scoreMax}>/{maxScore}</Text>
        </View>
        
        <Text
          style={[
            styles.qualityCategory,
            { color: qualityCategory.color }
          ]}>
          {qualityCategory.label}
        </Text>
        
        <View style={styles.progressContainer}>
          <View style={styles.progressBackground}>
            <Animated.View
              style={[
                styles.progressFill,
                { backgroundColor: qualityCategory.color },
                progressStyle,
              ]}
            />
          </View>
        </View>
      </View>
      
      <View style={styles.factorsContainer}>
        <Text style={styles.factorsTitle}>Quality Factors</Text>
        
        <View style={styles.factorsList}>
          <View style={styles.factorItem}>
            <View style={styles.factorBar}>
              <View
                style={[
                  styles.factorBarFill,
                  { width: '90%', backgroundColor: Colors.success }
                ]}
              />
            </View>
            <Text style={styles.factorLabel}>Duration</Text>
          </View>
          
          <View style={styles.factorItem}>
            <View style={styles.factorBar}>
              <View
                style={[
                  styles.factorBarFill,
                  { width: '75%', backgroundColor: Colors.secondary }
                ]}
              />
            </View>
            <Text style={styles.factorLabel}>Consistency</Text>
          </View>
          
          <View style={styles.factorItem}>
            <View style={styles.factorBar}>
              <View
                style={[
                  styles.factorBarFill,
                  { width: '85%', backgroundColor: Colors.secondary }
                ]}
              />
            </View>
            <Text style={styles.factorLabel}>Deep Sleep</Text>
          </View>
          
          <View style={styles.factorItem}>
            <View style={styles.factorBar}>
              <View
                style={[
                  styles.factorBarFill,
                  { width: '60%', backgroundColor: Colors.warning }
                ]}
              />
            </View>
            <Text style={styles.factorLabel}>Sleep Cycles</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  scoreContainer: {
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  scoreHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  scoreTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  scoreDisplay: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: '700',
    color: Colors.sleep,
  },
  scoreMax: {
    fontSize: 20,
    color: '#999',
  },
  qualityCategory: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  progressContainer: {
    width: '100%',
  },
  progressBackground: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  factorsContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 16,
    padding: 16,
  },
  factorsTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  factorsList: {
    gap: 12,
  },
  factorItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  factorBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
    marginRight: 12,
  },
  factorBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  factorLabel: {
    width: 90,
    fontSize: 14,
    color: '#666',
  },
});