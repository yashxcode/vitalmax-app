import { Stack } from 'expo-router';
import React from 'react';

export default function ModalLayout() {
  return (
    <Stack screenOptions={{ headerShown: true, presentation: 'modal' }}>
      <Stack.Screen 
        name="add-data" 
        options={{ 
          title: 'Add Health Data',
          headerTitleStyle: {
            fontWeight: '600',
          }
        }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ 
          title: 'Settings',
          headerTitleStyle: {
            fontWeight: '600',
          }
        }} 
      />
    </Stack>
  );
}