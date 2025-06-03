import { Redirect } from 'expo-router';

// Redirect to the summary tab
export default function Index() {
  return <Redirect href="/(tabs)" />;
}