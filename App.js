import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react';
import store from './Store';
import Main from './Components/Main';


export default observer(class App extends React.Component {

  render() {
    return (

      <View style={styles.container}>
        <Main />
      </View>
    );
  }
})



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
