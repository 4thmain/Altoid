import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

////////////////////////////////////////
var backgroundColor = '#FFFFFF';



////////////////////////////////////////

module.exports = StyleSheet.create({

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: backgroundColor
  },

  header: {
      height: 64,
      //flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#283941',
  },

  section: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },

  border: {

  },
  buttonwrapper: {
    flexDirection: 'column', // is the default. on web, its row.
  }
 });
