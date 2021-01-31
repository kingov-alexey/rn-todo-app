import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

export const TodoScreen = ({ goBack }) => {
  return (
    <View style={styles}>
      <Text>TodoScreen</Text>
      <Button title="назад" onPress={goBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  nameBlock: {},
});
