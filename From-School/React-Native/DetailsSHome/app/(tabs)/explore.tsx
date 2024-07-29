import { StyleSheet } from 'react-native';
import  DetailsScreen from '../../components/DetailsScreen';

export default function TabTwoScreen() {
  return (
    <DetailsScreen route={undefined} navigation={undefined} />
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    margin: 4, // Adjust as needed
  },
});