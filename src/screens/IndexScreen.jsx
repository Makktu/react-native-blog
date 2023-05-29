import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import COLORS from '../styles/COLORS';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ShowScreen from './ShowScreen';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost } = useContext(Context);
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.backgroundStyle}>
        {state.length ? null : (
          <View>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons
                style={{ margin: 10 }}
                name='puzzle'
                size={40}
                color='white'
              />
              <Text
                style={{ color: 'white', alignSelf: 'center', fontSize: 20 }}
              >
                NO BLOGS YET
              </Text>
            </View>
            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20 }}>
              TAP THE ADD BUTTON TO START !
            </Text>
          </View>
        )}
        <FlatList
          data={state}
          keyExtractor={(blogPost) => blogPost.id}
          renderItem={({ item }) => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Show', { id: item.id })}
                >
                  <View style={styles.blogRow}>
                    <Text style={styles.textStyle}>
                      {item.title} - {item.id}
                    </Text>
                    <TouchableOpacity
                      style={styles.blogRow}
                      onPress={() => deleteBlogPost(item.id)}
                    >
                      <FontAwesome style={styles.trashStyle} name='trash-o' />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </>
            );
          }}
        />
      </View>
    </>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
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
            ADD
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <AntDesign
              name='pluscircle'
              size={36}
              color='white'
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </>
    ),
  };
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
  blogRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'darkslategray',
  },
  trashStyle: {
    alignSelf: 'center',
    right: 5,
    color: 'red',
    fontSize: 24,
  },
});

export default IndexScreen;
