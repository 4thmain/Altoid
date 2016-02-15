import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

////////////////////////////////////////

module.exports = StyleSheet.create({

  title: {
    fontSize: 15,
    lineHeight: 17,
    textAlign: 'center', // view cant have property textAlign
    fontWeight: '100',
    color: 'white'

  },
  subtitle: {
    fontSize: 11,
    lineHeight: 12,
    textAlign: 'center',
    color: '#333333', // this style is overwritten by the one below. true css style.
    marginBottom: 5,
    color: '#5e8396'
  },
  subsectiontitle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 5,
    color: '#7497A8'
  },
 });
