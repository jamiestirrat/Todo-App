import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class TodoModal extends React.Component {

    addToList() {
        //push to todos array for list item
        return null
    }

    removeFromList() {
        //splice at index
        return null
    }

    toggleListItemStatus() {
        //change state of todo != what it currently is
    }


    render() {
        //list constants
        // const list = this.props.list
        //
        // const completedCount = list.todos.filter(todo => todo.completed).length;
        // const remainingCount = list.todos.filter(todo => todo.completed != true).length;

        return(
                <View style={styles.container}>
                    <TouchableOpacity style={{position: 'absolute', top: 64, right: 32}} onPress={() => this.props.closeModal()}>
                        <AntDesign name="close" size={24} color={colours.blue} />
                    </TouchableOpacity>
                    <Text> OH YEAH </Text>
                </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
    }
});
