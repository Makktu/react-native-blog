import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import COLORS from '../styles/COLORS';

const BlogPostForm = ({ onSubmit, initialValues, navigation }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
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
        title='Save Post'
        onPress={() => {
          onSubmit(title, content);
        }}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
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

export default BlogPostForm;
