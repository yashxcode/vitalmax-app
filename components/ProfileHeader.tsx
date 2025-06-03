import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CreditCard as Edit2 } from 'lucide-react-native';
import Colors from '@/constants/Colors';

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' }}
            style={styles.avatar}
          />
          <View style={styles.editButton}>
            <Edit2 size={14} color="#fff" />
          </View>
        </View>
        
        <View style={styles.profileInfo}>
          <Text style={styles.name}>John Appleseed</Text>
          <Text style={styles.details}>32 years • 178cm • 74kg</Text>
          <View style={styles.completionContainer}>
            <View style={styles.completionBar}>
              <View style={[styles.completionFill, { width: '85%' }]} />
            </View>
            <Text style={styles.completionText}>Profile 85% complete</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>A+</Text>
            <Text style={styles.statLabel}>Blood Type</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>74<Text style={styles.statUnit}>kg</Text></Text>
            <Text style={styles.statLabel}>Weight</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statValue}>178<Text style={styles.statUnit}>cm</Text></Text>
            <Text style={styles.statLabel}>Height</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  profileSection: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: Colors.primary,
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  completionContainer: {
    width: '100%',
  },
  completionBar: {
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 2,
    overflow: 'hidden',
    marginBottom: 4,
  },
  completionFill: {
    height: '100%',
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  completionText: {
    fontSize: 12,
    color: '#999',
  },
  statsContainer: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  statUnit: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '#999',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statDivider: {
    height: 24,
    width: 1,
    backgroundColor: '#eee',
  },
});