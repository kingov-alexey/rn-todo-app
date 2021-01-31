import React, {useState} from 'react' 
import {View, TextInput, Button, Text, StyleSheet, Alert} from 'react-native'


export const AddTodo = ( {onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHadler = () =>{
        if (value.trim()) {
            onSubmit(value)
        setValue('')
        } else {
            //err
            Alert.alert('Название задачи не может быть пустым');
        }
        
    }
    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.input}
            onChangeText={setValue}
            value={value}
            placeholder='Введите задачу...'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='default'
            />
            <Button title='добавить' onPress={pressHadler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:10
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 10
        
    }
})