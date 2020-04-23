import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Modal } from 'react-native';
import colours from './Colours';
import { AntDesign } from '@expo/vector-icons';
import tempData from './TempData';
import TodoList from './components/TodoComponent';
import AddTodoModal from './components/AddTodoModal';

export default class App extends React.Component {
  state = {
      modalShown: false
  }

  toggleAddTodoModal() {
      this.setState({ modalShown: !this.state.modalShown });
  }

  renderList = list => {
      return <TodoList list={list}/>
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal style={styles.modal} animationType='slide' visible={this.state.modalShown} onRequestClose={() => this.toggleAddTodoModal()}>
            <AddTodoModal closeModal={() => this.toggleAddTodoModal()} />
        </Modal>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider} />
            <Text style={styles.title}>
              Todo <Text style={{fontWeight: '300', color: colours.blue}}>list</Text>
            </Text>
            <View style={styles.divider} />
          </View>


          <View style={{marginVertical: 48}}>
            <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
                <AntDesign name="plus" size={24} color={colours.blue} />
                </TouchableOpacity>
                <Text style={styles.add}>Add Item</Text>
          </View>

          <View style={{height: 275, paddingLeft: 32}}>
            <FlatList
                data={tempData}
                keyExtractor={item => item.name}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <TodoList list={item}/>
                  )}
                />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: colours.blue,
    height: 4,
    flex: 1,
    alignSelf: 'center'
  },
  title: {
    fontWeight: "800",
    fontSize: 38,
    paddingHorizontal: 64,
    color: colours.black,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addList: {
    borderWidth: 2,
    borderColor: colours.blue,
    borderRadius: 8,
    padding: 16,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  add: {
    color: colours.blue,
    marginTop: 10,
    fontWeight: '400',
    fontSize: 14
  },
  modal: {
    borderRadius: 20,
    alignContent: 'center',
    justifyContent: 'center'
  },
  modalInterior: {
    alignContent: 'center',
    justifyContent: 'center'
  }
});
