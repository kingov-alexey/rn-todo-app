import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, SectionList } from 'react-native'
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'
import { Todo } from './src/Todo'

export default function App() {
  const [todos, setTodos] = useState([
    // {id:1, title: 'test1'},
    // {id:2, title: 'test2'},
    // {id:3, title: 'test3'},
    // {id:4, title: 'test4'},
    // {id:5, title: 'test5'},
    // {id:6, title: 'test6'},
    // {id:7, title: 'test7'},
    // {id:8, title: 'test8'}
  ])

  const addTodo = (title)=>{
    // const newTodo = {
    //   id: Date.now().toString(),
    //   title: title
    // }

    //Вариант 1
    //setTodos(todos.concat([newTodo]))
    
    //вариант 2
    // setTodos((prewTodos)=>{
    //   return(
    //     ...prevTodos,
    //     newTodo     
    //      )
    // })

    setTodos(prev => [
      ...prev,{
      id: Date.now().toString(),
      title
      }
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !==id))
  }

  return (
    <View >
     <Navbar title='Todo App'/>
     <View style={styles.container}>
     <AddTodo  onSubmit={addTodo}/>

     <FlatList
     data={todos}
     keyExtractor={item => item.id.toString()}
     renderItem={({ item }) => <Todo todo={item} 
     onRemove={removeTodo}/>}
     />
     
{/*      <View>
       { todos.map(todo => {
         return <Todo key={todo.id} todo={todo}></Todo> 
         
       }) }
     </View> */}
     
     </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:30,
    paddingVertical: 20
  },
  
});
