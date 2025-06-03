import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ChevronRight, Clock, Timer, Flame } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function WorkoutList() {
  // Sample workout data
  const workouts = [
    {
      id: 1,
      type: 'Outdoor Run',
      date: 'Today, 7:30 AM',
      duration: '32 min',
      distance: '4.2 km',
      calories: 320,
      imageUrl: 'https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      type: 'Indoor Cycling',
      date: 'Yesterday, 6:15 PM',
      duration: '45 min',
      distance: '',
      calories: 380,
      imageUrl: 'https://images.pexels.com/photos/3938389/pexels-photo-3938389.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      type: 'Yoga',
      date: 'Mar 12, 8:00 AM',
      duration: '30 min',
      distance: '',
      calories: 150,
      imageUrl: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <View style={styles.container}>
      {workouts.map((workout) => (
        <TouchableOpacity key={workout.id} style={styles.workoutItem}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: workout.imageUrl }}
              style={styles.workoutImage}
            />
          </View>
          
          <View style={styles.workoutDetails}>
            <Text style={styles.workoutType}>{workout.type}</Text>
            <Text style={styles.workoutDate}>{workout.date}</Text>
            
            <View style={styles.workoutStats}>
              <View style={styles.statItem}>
                <Clock size={14} color="#999" />
                <Text style={styles.statText}>{workout.duration}</Text>
              </View>
              
              {workout.distance && (
                <View style={styles.statItem}>
                  <Timer size={14} color="#999" />
                  <Text style={styles.statText}>{workout.distance}</Text>
                </View>
              )}
              
              <View style={styles.statItem}>
                <Flame size={14} color="#999" />
                <Text style={styles.statText}>{workout.calories} cal</Text>
              </View>
            </View>
          </View>
          
          <ChevronRight size={20} color="#ccc" />
        </TouchableOpacity>
      ))}
      
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllText}>View All Workouts</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  workoutItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  imageContainer: {
    marginRight: 12,
  },
  workoutImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  workoutDetails: {
    flex: 1,
  },
  workoutType: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  workoutDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  workoutStats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  statText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  viewAllButton: {
    alignItems: 'center',
    paddingVertical: 16,
    marginTop: 8,
  },
  viewAllText: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: '500',
  },
});