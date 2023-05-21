import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');
  const onchange = textValue => setText(textValue);
  return (
    <View>
      <TextInput
        placeholder="Add Item.."
        style={styles.input}
        onChangeText={onchange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <View style={styles.btnContainer}>
          <Icon name="plus" size={20} color={'white'} />
          <View style={{width: 10}} />
          <Text style={styles.btnText}>Add Item</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 10,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#526D82',
    padding: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddItem;
