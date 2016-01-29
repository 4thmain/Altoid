import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

////////////////////////////////////////
var backgroundColor = '#F5FCFF';



////////////////////////////////////////

module.exports = StyleSheet.create({

  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: backgroundColor
  },

  header: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor,
  },

  section: {
    flex: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: backgroundColor,
  },

  border: {
      borderColor: '#54C7C3',
      borderWidth: 1,
  },
  buttonwrapper: {
    flexDirection: 'column', // is the default. on web, its row.
  }
 });
