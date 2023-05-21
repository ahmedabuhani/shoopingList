import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Header from '../Task/components/Header';
import ListItem from '../Task/components/ListItem';
import AddItem from './components/AddItem';
import uuidv4 from 'uuidv4';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Ahmed' },
    { id: 2, text: 'Ayah' },
    { id: 3, text: 'Abood' },
    { id: 4, text: 'Hani' },
    { id: 5, text: 'Hani' },
  ]);

  const deleteItem = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const addItem = text => {
    setItems([{ id: uuidv4(), text }, ...items]);
  };

  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
        keyExtractor={item => `${item.id}-${item.text}`}
        style={{padding: 10}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 3,
  },
  name: {
    fontSize: 10,
    color: '#146C94',
  },
});

export default App;
