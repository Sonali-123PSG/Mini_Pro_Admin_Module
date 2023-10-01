import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NewPost from './screens/newPost';

const App = () => {
  return (
    <View>
      <NewPost />
      {/* <Text>Hi</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default App;
