import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({ item, deleteItem }) => {
  return (
    <View style={[style.listItem, style.listItemView]}>
      <Text style={style.listItemText}>{item.text}</Text>
      <TouchableOpacity onPress={() => deleteItem(item.id)}>
        <Icon
          name="remove"
          size={20}
        // color="firebrick"
        />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f4f4f4',
    borderBottomColor: '#2C3333',
    shadowColor: '#000',
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    shadowOffset: {
      width: 0,
      height: 0
    },
    borderRadius: 8,
  },

  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
    marginHorizontal: 10,
  },
  listItemText: {
    fontSize: 18,
    color: '#03001C',
  },
});

export default ListItem;
