import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { router } from 'expo-router';
import { Check } from 'lucide-react-native';

import Screen from '@/components/layout/Screen';
import Colors from '@/constants/Colors';

const metricTypes = [
  { id: 'weight', label: 'Weight', unit: 'kg', color: Colors.weight, inputType: 'numeric' },
  { id: 'heartRate', label: 'Heart Rate', unit: 'bpm', color: Colors.heart, inputType: 'numeric' },
  { id: 'sleep', label: 'Sleep Duration', unit: 'hours', color: Colors.sleep, inputType: 'numeric' },
  { id: 'steps', label: 'Steps', unit: 'steps', color: Colors.activity, inputType: 'numeric' },
  { id: 'water', label: 'Water Intake', unit: 'ml', color: Colors.water, inputType: 'numeric' },
  { id: 'calories', label: 'Calories', unit: 'kcal', color: Colors.nutrition, inputType: 'numeric' },
];

export default function AddDataScreen() {
  const [selectedMetric, setSelectedMetric] = useState(metricTypes[0].id);
  const [value, setValue] = useState('');
  
  const selectedMetricObject = metricTypes.find(metric => metric.id === selectedMetric);

  const handleSave = () => {
    // In a real app, this would save the data to the backend
    console.log(`Saving ${selectedMetric}: ${value} ${selectedMetricObject?.unit}`);
    router.back();
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoid}>
      <Screen style={styles.container}>
        <ScrollView>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Select Metric</Text>
            <View style={styles.metricsGrid}>
              {metricTypes.map((metric) => (
                <TouchableOpacity
                  key={metric.id}
                  style={[
                    styles.metricButton,
                    selectedMetric === metric.id && styles.metricButtonSelected,
                    selectedMetric === metric.id && { borderColor: metric.color }
                  ]}
                  onPress={() => setSelectedMetric(metric.id)}>
                  <Text
                    style={[
                      styles.metricButtonText,
                      selectedMetric === metric.id && styles.metricButtonTextSelected,
                      selectedMetric === metric.id && { color: metric.color }
                    ]}>
                    {metric.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Enter Value</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder={`Enter ${selectedMetricObject?.label.toLowerCase()}`}
                keyboardType={selectedMetricObject?.inputType === 'numeric' ? 'numeric' : 'default'}
                autoFocus
              />
              <Text style={styles.inputUnit}>{selectedMetricObject?.unit}</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.saveButton, !value ? styles.saveButtonDisabled : {}]}
            onPress={handleSave}
            disabled={!value}>
            <Text style={styles.saveButtonText}>Save</Text>
            <Check size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </Screen>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardAvoid: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  metricButton: {
    width: '48%',
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#eee',
    marginBottom: 12,
    alignItems: 'center',
  },
  metricButtonSelected: {
    backgroundColor: 'rgba(0, 122, 255, 0.05)',
    borderColor: Colors.primary,
  },
  metricButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  metricButtonTextSelected: {
    color: Colors.primary,
    fontWeight: '600',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 16,
  },
  inputUnit: {
    fontSize: 16,
    color: '#999',
  },
  footer: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  saveButton: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: '#ccc',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
});