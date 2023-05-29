import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import COLORS from '../styles/COLORS';

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addBlogPost } = useContext(Context);

  return (
    <View style={styles.background}>
      <Text style={styles.textStyle}>Enter Title:</Text>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.textStyle}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title='Add Post'
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Index');
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: 'orangered',
    color: 'orangered',
    marginBottom: 15,
  },
  titleInput: {
    fontSize: 22,
    borderWidth: 1,
    borderColor: 'orangered',
    color: 'orangered',
    height: 60,
    marginBottom: 15,
  },
  background: {
    backgroundColor: COLORS.bgCol,
    height: '100%',
  },
  textStyle: {
    color: 'white',
    padding: 5,
    fontSize: 24,
  },
});

export default CreateScreen;
