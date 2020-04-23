import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colours from './../Colours'

export default TodoList = ({ list }) => {
      const completedCount = list.todos.filter(todo => todo.completed).length;
      const remainingCount = list.todos.filter(todo => todo.completed != true).length;

      return(
        <View style={[styles.listContainer, {backgroundColor: list.color}]}>
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>

          <View style={{alignItems: 'center'}}>
                <Text style={styles.count}>{remainingCount}</Text>
                <Text style={styles.subTitle}>Remaining</Text>
          </View>

          <View style={{alignItems: 'center'}}>
                <Text style={styles.count}>{completedCount}</Text>
                <Text style={styles.subTitle}>Completed</Text>
          </View>

        </View>


  );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200
    },
    listTitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 24,
        marginBottom: 10
    },
    subTitle: {
        color: 'white',
        fontWeight: '200',
        paddingTop: 5
    },
    count: {
        fontSize: 48,
        color: 'white',
        fontWeight: '200',
        paddingTop: 5
    }
});
