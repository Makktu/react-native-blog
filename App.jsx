import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import COLORS from './src/styles/COLORS';
import IndexScreen from './src/screens/IndexScreen';

import { BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'blog',
      headerStyle: {
        backgroundColor: COLORS.bgCol,
      },
      headerTitleStyle: {
        fontSize: 30,
        color: COLORS.textMainCol,
      },
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
