// index.tsx
import { AppRegistry } from 'react-native';
import App from './App'; // Ensure this path is correct
import { name as appName } from './app.json'; // Import the app name from app.json

AppRegistry.registerComponent(appName, () => App);