import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { useTheme } from '@/contexts/ThemeContext';
import Colors from '@/constants/Colors';

export default function ProfileButton() {
  const { colorScheme } = useTheme();
  const colors = Colors.get(colorScheme);

  return (
    <TouchableOpacity
      style={[styles.container, { borderColor: colors.border }]}
      onPress={() => router.push('/(modal)/settings')}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    overflow: 'hidden',
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});