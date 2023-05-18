import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import COLORS from '../styles/COLORS';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.backgroundStyle}>
        <Text style={styles.textStyle}>Index</Text>
        <FlatList
          data={blogPosts}
          keyExtractor={(blogPost) => blogPost.title}
          renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.title}</Text>;
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: COLORS.bgCol,
    height: '100%',
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textMainCol,
    padding: 10,
  },
});

export default IndexScreen;
