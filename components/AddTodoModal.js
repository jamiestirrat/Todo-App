import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, KeyboardAvoidingView, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default class AddTodoModal extends React.Component {
backgroundColors = ['#171219', '#225560', 'grey', '#EDF060', '#F0803C', '#310D20']

state = {
    name: '',
    color: this.backgroundColors[0],
    errorState: false
};

createTodo = () => {
    const {name, color} = this.state

    if ({name}.length > 1) {
        this.setState({errorState: false})
        tempData.push({
            name,
            color,
            todos: []
        })

        this.setState({name: ""})
        this.props.closeModal();
    } else {
        ({name}.length === 0)
        this.setState({errorState: true})
    }
}



renderColors() {
    return this.backgroundColors.map(color => {
        return (
            <TouchableOpacity
                key={color}
                style={[styles.colorSelect, {backgroundColor: color}]}
                onPress={() => this.setState({color})}
            />
        );
    });
}

render() {
    return(
            <KeyboardAvoidingView style={styles.container} behavior="padding">
              <TouchableOpacity style={{position: 'absolute', top: 64, right: 32}} onPress={() => this.props.closeModal()}>
                  <AntDesign name="close" size={24} color={colours.blue} />
              </TouchableOpacity>

              {this.state.errorState && <View>
                  <Text style={styles.errorMessage}>Please Enter a Value!</Text>
              </View>}
              <View style={{alignSelf: 'stretch', marginHorizontal: 32}}>
                  <Text style={styles.title}>Create Todo List</Text>
                  <TextInput style={styles.input} placeholder="List Name?" onChangeText={text => this.setState({ name: text })}/>

              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 }}>{this.renderColors()}</View>

              <TouchableOpacity style={[styles.createList, { backgroundColor: this.state.color}]}
                                        onPress={this.createTodo}>
                  <Text style={styles.buttonText}>Create List</Text>
              </TouchableOpacity>
             </View>
            </KeyboardAvoidingView>
    );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
},
  errorMessage: {
    fontSize: 14,
    fontWeight: '600',
    color: 'red',
    alignSelf: 'center',
    marginBottom: 10
},
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colours.black,
    alignSelf: 'center',
    marginBottom: 16
},
  input: {
    alignSelf: 'center',
    height: 40,
    borderRadius: 10,
    borderWidth: .5,
    borderColor: colours.grey,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    paddingVertical: 5
},
  createList: {
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    height: 40,
    marginHorizontal: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
},
  buttonText: {
    color: colours.white,
    fontSize: 14,
    fontWeight: '600'
},
  colorSelect: {
      height: 30,
      width: 30,
      borderRadius: 5
  }
});
