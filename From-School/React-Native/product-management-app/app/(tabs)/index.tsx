import { AppRegistry } from 'react-native';
import App from '../../App'; // Ensure this path is correct
import packageJson from '../../package.json'; // Import the whole JSON file

const appName = packageJson.name; // Access the name property

AppRegistry.registerComponent(appName, () => App);