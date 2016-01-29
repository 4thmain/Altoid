import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

////////////////////////////////////////

module.exports = StyleSheet.create({

  title: {
    fontSize: 41,
    textAlign: 'center', // view cant have property textAlign
    margin: 10,
    fontWeight: '200',
    color: '#4c5357'
  },
  subtitle: {
    fontSize: 22,
    textAlign: 'center',
    color: '#333333', // this style is overwritten by the one below. true css style.
    marginBottom: 5,
    color: '#5e8396'
  },
  subsectiontitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 5,
    color: '#7497A8'
  },
 });
