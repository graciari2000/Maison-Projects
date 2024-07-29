import { Image, StyleSheet, Platform, Button } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import TextInput from '@/components/TextInput';

export default function HomeScreen() {


  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#e51b23' }}
      headerImage={
        <Image
          source={require('@/assets/images/pex.jpg')}
        style={[styles.reactLogo]}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to fireboard!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Eat cake</ThemedText>
        <ThemedText>
          Indulge in a sweet treat to kickstart your journey with fireboard! Start by making changes to{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and witness your edits come to life. Remember to press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools and explore further.
        </ThemedText>
      </ThemedView>
      <ThemedView>
        <TextInput>Username</TextInput>
        <Button title="Login"></Button>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Cast Fire</ThemedText>
        <ThemedText>
          Ready to wield the power of fire? Navigate to the Cast Fire tab and ignite your exploration into advanced features.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Repeat</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 278,
    width: 490,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  TextInput: {
    fontSize: 16,
  }
});
