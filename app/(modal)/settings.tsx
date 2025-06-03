import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Screen from '@/components/layout/Screen';
import Colors from '@/constants/Colors';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [units, setUnits] = useState('metric');

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Settings</Text>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Push Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#eee', true: Colors.primary }}
              thumbColor={'#fff'}
            />
          </View>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Dark Mode</Text>
            <Switch
              value={darkModeEnabled}
              onValueChange={setDarkModeEnabled}
              trackColor={{ false: '#eee', true: Colors.primary }}
              thumbColor={'#fff'}
            />
          </View>

          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Apple Watch Sync</Text>
            <Switch
              value={syncEnabled}
              onValueChange={setSyncEnabled}
              trackColor={{ false: '#eee', true: Colors.primary }}
              thumbColor={'#fff'}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Units</Text>
          
          <View style={styles.unitsContainer}>
            <TouchableOpacity
              style={[
                styles.unitButton,
                units === 'metric' && styles.unitButtonActive
              ]}
              onPress={() => setUnits('metric')}>
              <Text
                style={[
                  styles.unitButtonText,
                  units === 'metric' && styles.unitButtonTextActive
                ]}>
                Metric (kg, cm)
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.unitButton,
                units === 'imperial' && styles.unitButtonActive
              ]}
              onPress={() => setUnits('imperial')}>
              <Text
                style={[
                  styles.unitButtonText,
                  units === 'imperial' && styles.unitButtonTextActive
                ]}>
                Imperial (lb, in)
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health Data</Text>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Export Health Data</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, styles.dangerButton]}>
            <Text style={[styles.actionButtonText, styles.dangerButtonText]}>Clear All Health Data</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Privacy Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Terms of Service</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Sign Out</Text>
          </TouchableOpacity>
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
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  settingLabel: {
    fontSize: 16,
  },
  unitsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unitButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  unitButtonActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  unitButtonText: {
    color: '#666',
    fontWeight: '500',
  },
  unitButtonTextActive: {
    color: '#fff',
  },
  actionButton: {
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  actionButtonText: {
    fontSize: 16,
    color: Colors.primary,
  },
  dangerButton: {
    borderBottomWidth: 0,
  },
  dangerButtonText: {
    color: Colors.error,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#999',
  },
});