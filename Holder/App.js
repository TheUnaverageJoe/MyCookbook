import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Pantry  from './components/Pantry.js';
//import './style.css';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {/*used for mobile devices header info such as wifi, time, etc. PS(THIS COMMENT CAUSES "Unexpected Text" IN INSPECTOR)*/}
      <StatusBar style="auto" />
      <Pantry/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40f090',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
