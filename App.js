import React from 'react';
import { StyleSheet, View } from 'react-native';
import TaskList from './TaskList';

export default function App() {
  return (
    <View style={styles.container}>
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
