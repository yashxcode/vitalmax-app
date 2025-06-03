const lightColors = {
  primary: '#007AFF',
  secondary: '#5AC8FA',
  accent: '#34C759',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
  activity: '#FF2D55',
  heart: '#FF3B30',
  sleep: '#5856D6',
  water: '#5AC8FA',
  nutrition: '#FF9500',
  weight: '#007AFF',
  background: '#F2F2F7',
  card: '#FFFFFF',
  text: '#000000',
  secondaryText: '#8E8E93',
  border: '#C7C7CC',
  inactive: '#C7C7CC',
  account: '#007AFF',
  settings: '#8E8E93',
  notification: '#FF9500',
};

const darkColors = {
  primary: '#0A84FF',
  secondary: '#64D2FF',
  accent: '#32D74B',
  success: '#32D74B',
  warning: '#FF9F0A',
  error: '#FF453A',
  activity: '#FF375F',
  heart: '#FF453A',
  sleep: '#5E5CE6',
  water: '#64D2FF',
  nutrition: '#FF9F0A',
  weight: '#0A84FF',
  background: '#000000',
  card: '#1C1C1E',
  text: '#FFFFFF',
  secondaryText: '#98989F',
  border: '#38383A',
  inactive: '#48484A',
  account: '#0A84FF',
  settings: '#98989F',
  notification: '#FF9F0A',
};

export type ColorScheme = 'light' | 'dark';

const Colors = {
  light: lightColors,
  dark: darkColors,
  // Helper function to get colors based on scheme
  get: (scheme: ColorScheme) => (scheme === 'dark' ? darkColors : lightColors),
};

export default Colors;