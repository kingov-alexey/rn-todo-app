import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Todo } from '../componets/Todo';
import { AddTodo } from '../componets/AddTodo';

export const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  return (
    <View style={styles}>
      <AddTodo onSubmit={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Todo onOpen={openTodo} todo={item} onRemove={removeTodo} />}
      />

      {/*      <View>
  { todos.map(todo => {
    return <Todo key={todo.id} todo={todo}></Todo> 
    
  }) }
</View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  nameBlock: {},
});
