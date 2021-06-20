import React, {Component} from 'react';
import {StyleSheet ,View,Text } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>  
        <Text>Hello Vishal ..!</Text>
        <Text style = {{ color:'#185a9d', alignContent:'center'}}>How Are you Vishal ..?</Text>
        <Text style = {
          { color:'#00ff00', 
          alignContent:'center'
          }}>
            Absolutly fine ..!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex :1 ,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
})
export default App;
