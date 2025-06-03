import React from 'react';
import { Tabs } from 'expo-router';
import { Chrome as Home, Activity, Heart, Moon, MoveHorizontal as MoreHorizontal } from 'lucide-react-native';
import { View, StyleSheet } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import Colors from '@/constants/Colors';
import ProfileButton from '@/components/ProfileButton';

export default function TabLayout() {
  const { colorScheme } = useTheme();
  const colors = Colors.get(colorScheme);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inactive,
        tabBarStyle: [styles.tabBar, { backgroundColor: colors.card, borderTopColor: colors.border }],
        tabBarLabelStyle: styles.tabBarLabel,
        headerShown: true,
        headerStyle: [styles.header, { backgroundColor: colors.card }],
        headerTitleStyle: [styles.headerTitle, { color: colors.text }],
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'VitalMax',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
          headerRight: () => <ProfileButton />,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color, size }) => <Activity size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="heart"
        options={{
          title: 'Heart',
          tabBarIcon: ({ color, size }) => <Heart size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="sleep"
        options={{
          title: 'Sleep',
          tabBarIcon: ({ color, size }) => <Moon size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, size }) => <MoreHorizontal size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0.5,
    elevation: 0,
    height: 60,
    paddingBottom: 6,
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '500',
  },
  header: {
    shadowColor: 'transparent',
    elevation: 0,
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 18,
  },
});