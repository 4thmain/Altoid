var React = require('react-native');
var {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  Text,
  View
} = React;

//////// Helper //////////

//////// StyleSheets //////////
var layouts = require('./src/layouts');
var typography = require('./src/typography');
var buttons = require('./src/buttons');

//////////////////////////////
class altoid extends Component {
  render() {
    return (
      <View style={layouts.wrapper}>
        <View style={[layouts.wrapper, layouts.header,layouts.border]}>
          <Text style={typography.title}>
            Welcome to Altoid.
          </Text>
          <Text style={typography.subsectiontitle}>
            A Mobile Frontend framework
          </Text>
        </View>

        <View style={[layouts.wrapper, layouts.section,layouts.border]}>
          <Text style={typography.title}>
            This is a Title
          </Text>
          <Text style={typography.subtitle}>
            This is a subtitle
          </Text>
          <Text style={typography.subsectiontitle}>
            This is a Subsection Title
          </Text>

        <View style={layouts.buttonwrapper}>
          <TouchableHighlight underlayColor="#6BB9B8" onPress = {this.handleStartPress} style = {[buttons.button,buttons.primary]}>
            <Text style={buttons.text}>
              Button
            </Text>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#C25950" onPress = {this.handleStartPress} style = {[buttons.button,buttons.danger]}>
            <Text style={buttons.text}>
              Button
            </Text>
          </TouchableHighlight>

          <TouchableHighlight underlayColor="#fcfcfc" onPress = {this.handleStartPress} style = {[buttons.button,buttons.secondary]}>
            <Text style={buttons.secondarytext}>
              Button
            </Text>
          </TouchableHighlight>
        </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('altoid', () => altoid);
