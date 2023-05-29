import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import COLORS from '../styles/COLORS';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam('id')
  );
  return (
    <>
      <View style={styles.backgroundStyle}>
        <View>
          <Text style={styles.titleStyle}>{blogPost.title}</Text>
        </View>
        <View>
          <Text style={styles.contentStyle}>{blogPost.content}</Text>
        </View>
      </View>
    </>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: 'white',
              fontSize: 26,
              margin: 10,
              justifyContent: 'center',
              alignSelf: 'center',
            }}
          >
            EDIT
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Entypo name='edit' size={30} color='white' />
          </TouchableOpacity>
        </View>
      </>
    ),
  };
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 26,
    color: 'whitesmoke',
    alignSelf: 'center',
    margin: 10,
  },
  contentStyle: {
    fontSize: 30,
    color: COLORS.textMainCol,
    margin: 5,
  },
  backgroundStyle: {
    backgroundColor: COLORS.bgCol,
    height: '100%',
  },
});

export default ShowScreen;
