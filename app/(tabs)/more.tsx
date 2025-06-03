import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { ChevronRight, Settings, Bell, User, Weight, Droplet, Apple } from 'lucide-react-native';

import Screen from '@/components/layout/Screen';
import ProfileHeader from '@/components/ProfileHeader';
import Colors from '@/constants/Colors';

const menuItems = [
  {
    title: 'Health Metrics',
    items: [
      { icon: <Weight size={24} color={Colors.weight} />, label: 'Weight & Body', route: '/weight' },
      { icon: <Droplet size={24} color={Colors.water} />, label: 'Water Intake', route: '/water' },
      { icon: <Apple size={24} color={Colors.nutrition} />, label: 'Nutrition', route: '/nutrition' },
    ]
  },
  {
    title: 'Account',
    items: [
      { icon: <User size={24} color={Colors.account} />, label: 'Profile', route: '/profile' },
      { icon: <Bell size={24} color={Colors.notification} />, label: 'Notifications', route: '/notifications' },
      { icon: <Settings size={24} color={Colors.settings} />, label: 'Settings', route: '/(modal)/settings' },
    ]
  }
];

export default function MoreScreen() {
  return (
    <Screen>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <ProfileHeader />
        
        {menuItems.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            
            {section.items.map((item, itemIndex) => (
              <TouchableOpacity
                key={itemIndex}
                style={styles.menuItem}
                onPress={() => router.push(item.route)}>
                <View style={styles.menuItemContent}>
                  <View style={styles.iconContainer}>
                    {item.icon}
                  </View>
                  <Text style={styles.menuItemLabel}>{item.label}</Text>
                </View>
                <ChevronRight size={20} color="#ccc" />
              </TouchableOpacity>
            ))}
          </View>
        ))}
        
        <View style={styles.deviceSection}>
          <Text style={styles.deviceSectionTitle}>Connected Devices</Text>
          <View style={styles.deviceItem}>
            <Text style={styles.deviceName}>Apple Watch Series 8</Text>
            <Text style={styles.deviceStatus}>Connected</Text>
          </View>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>VitalMax v1.0.0</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  section: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginVertical: 12,
    marginHorizontal: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#f0f0f0',
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 16,
  },
  menuItemLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  deviceSection: {
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
    marginHorizontal: 16,
    padding: 16,
  },
  deviceSectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 12,
  },
  deviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '500',
  },
  deviceStatus: {
    fontSize: 14,
    color: Colors.success,
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});