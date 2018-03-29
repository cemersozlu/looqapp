import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
//import { MainNavigator } from './components/Navigator';
import MainContainer from './screens/MainContainer';

export default class App extends React.Component {
  render() {

    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainContainer/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
