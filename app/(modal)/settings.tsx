import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import Screen from '@/components/layout/Screen';
import { useTheme } from '@/contexts/ThemeContext';
import Colors from '@/constants/Colors';

export default function SettingsScreen() {
  const { colorScheme, toggleColorScheme } = useTheme();
  const colors = Colors.get(colorScheme);
  
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [syncEnabled, setSyncEnabled] = useState(true);
  const [units, setUnits] = useState('metric');

  return (
    <Screen style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView>
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.secondaryText }]}>App Settings</Text>
          
          <View style={styles.settingItem}>
            <Text style={[styles.settingLabel, { color: colors.text }]}>Push Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: colors.inactive, true: colors.primary }}
              thumbColor={colors.card}
            />
          </View>
          
          <View style={styles.settingItem}>
            <Text style={[styles.settingLabel, { color: colors.text }]}>Dark Mode</Text>
            <Switch
              value={colorScheme === 'dark'}
              onValueChange={toggleColorScheme}
              trackColor={{ false: colors.inactive, true: colors.primary }}
              thumbColor={colors.card}
            />
          </View>

          <View style={styles.settingItem}>
            <Text style={[styles.settingLabel, { color: colors.text }]}>Apple Watch Sync</Text>
            <Switch
              value={syncEnabled}
              onValueChange={setSyncEnabled}
              trackColor={{ false: colors.inactive, true: colors.primary }}
              thumbColor={colors.card}
            />
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.secondaryText }]}>Units</Text>
          
          <View style={styles.unitsContainer}>
            <TouchableOpacity
              style={[
                styles.unitButton,
                { borderColor: colors.border },
                units === 'metric' && { backgroundColor: colors.primary }
              ]}
              onPress={() => setUnits('metric')}>
              <Text
                style={[
                  styles.unitButtonText,
                  { color: units === 'metric' ? colors.card : colors.text }
                ]}>
                Metric (kg, cm)
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                styles.unitButton,
                { borderColor: colors.border },
                units === 'imperial' && { backgroundColor: colors.primary }
              ]}
              onPress={() => setUnits('imperial')}>
              <Text
                style={[
                  styles.unitButtonText,
                  { color: units === 'imperial' ? colors.card : colors.text }
                ]}>
                Imperial (lb, in)
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.secondaryText }]}>Health Data</Text>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={[styles.actionButtonText, { color: colors.primary }]}>Export Health Data</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.actionButton, styles.dangerButton]}>
            <Text style={[styles.actionButtonText, { color: colors.error }]}>Clear All Health Data</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.secondaryText }]}>Account</Text>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={[styles.actionButtonText, { color: colors.primary }]}>Privacy Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={[styles.actionButtonText, { color: colors.primary }]}>Terms of Service</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <Text style={[styles.actionButtonText, { color: colors.primary }]}>Sign Out</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={[styles.footerText, { color: colors.secondaryText }]}>VitalMax v1.0.0</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
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
    borderRadius: 8,
    marginHorizontal: 4,
  },
  unitButtonText: {
    fontWeight: '500',
  },
  actionButton: {
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  actionButtonText: {
    fontSize: 16,
  },
  dangerButton: {
    borderBottomWidth: 0,
  },
  footer: {
    padding: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
  },
});