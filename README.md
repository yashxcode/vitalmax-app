# VitalMax App

VitalMax is a comprehensive health and fitness tracking application built with Expo and React Native. It allows users to monitor various health metrics such as activity, heart rate, and sleep, providing insights and helping them achieve their health goals. The app features a clean, modern UI with support for both light and dark modes, and a robust navigation structure.

## Features

*   **Activity Tracking**: Monitor steps, active minutes, calories burned, and flights climbed with detailed summaries and goal tracking.
*   **Heart Rate Monitoring**: Visualize heart rate data over different timeframes (day, week, month) and view key statistics like average, min, and max heart rates.
*   **Sleep Analysis**: Track sleep duration, quality, and stages with historical data and insights.
*   **Metric Input**: Easily add new health data entries for various metrics like weight, heart rate, sleep, steps, water intake, and calories.
*   **Settings**: Configure app preferences, including push notifications, dark mode, Apple Watch sync, and unit systems (metric/imperial).
*   **Profile Management**: View and update user profile information, including personal details and health stats.
*   **Interactive Charts**: Engaging and animated charts for activity, heart rate, and sleep data visualization.
*   **Responsive Design**: Optimized for various screen sizes and orientations.

## Technologies Used

*   **Expo**: A framework for universal React applications.
*   **React Native**: For building native mobile apps using JavaScript and React.
*   **Expo Router**: File-system based routing for universal React Native apps.
*   **React Native Reanimated**: For powerful and performant animations.
*   **TypeScript**: For type-safe JavaScript development.

## Installation

To get started with the VitalMax project, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone <your-repository-url>
    cd vitalmax
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up Environment Variables**:
    Create `.env` files (e.g., `.env`, `.env.staging`, `.env.production`) in the root directory of your project.
    Example `.env` file:
    ```
    EXPO_PUBLIC_API_URL=https://api.example.com
    EXPO_PUBLIC_API_KEY=your_api_key
    ```
    Ensure you have a `types/env.d.ts` file for type definitions:
    ```typescript
    // types/env.d.ts
    declare global {
      namespace NodeJS {
        interface ProcessEnv {
          EXPO_PUBLIC_API_URL: string;
          EXPO_PUBLIC_API_KEY: string;
          // Add other environment variables here
        }
      }
    }
    export {};
    ```

4.  **Start the development server**:
    ```bash
    npm run dev
    ```
    This will open the Expo development server. You can then run the app on a simulator/emulator or on your physical device using the Expo Go app.


## Styling

All styling in this project is managed using `StyleSheet.create` from `react-native`. No external styling libraries like NativeWind are used.

## Navigation Architecture

The application utilizes `expo-router` for its navigation:

*   **Primary Navigation**: Implemented using a tab-based layout, accessible via the `app/(tabs)` directory.
*   **Secondary Navigation**:
    *   **Stack Navigation**: Used for hierarchical flows within individual tabs.
    *   **Modal Navigation**: Used for overlay screens, such as the "Add Health Data" and "Settings" screens, defined in `app/(modal)`.

## Fonts

Fonts are managed using `@expo-google-fonts` packages. This ensures consistent and efficient font loading across all platforms. Fonts are loaded at the root level (`app/_layout.tsx`) to ensure availability throughout the application.

## API Routes

The project supports API routes using `expo-router`'s server features. API routes are defined in files with the `+api.ts` extension within the `app` directory. This allows for secure server-side logic and handling of sensitive data.

## Important Notes & Constraints

*   **Web Compatibility**: This project's default platform is Web. Native-only APIs are avoided or handled with `Platform.select()`.
*   **`useFrameworkReady` Hook**: The `useFrameworkReady` hook in `app/_layout.tsx` is critical for the framework's proper functioning and must **NEVER** be removed or modified.
*   **Expo Managed Workflow**: The project exclusively uses the Expo managed workflow. No `ios` or `android` directories or native code files are included.
*   **Dependencies**: All existing dependencies in `package.json` must be maintained.
*   **Preferred Libraries**:
    *   `react-native-reanimated` is preferred over `Animated` for animations.
    *   `react-native-gesture-handler` is preferred over `PanResponder` for gesture handling.
*   **Icons**: `lucide-react-native` is used exclusively for icons, following standard SVG prop defaults.

## Contributing

Contributions are welcome! Please follow standard GitHub flow: fork the repository, create a new branch for your features or bug fixes, and submit a pull request.

## License

This project is licensed under the MIT License.
