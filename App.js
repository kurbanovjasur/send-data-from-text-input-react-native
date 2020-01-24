import React from 'react';
import { Text, Button,TextInput, View, StyleSheet } from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'

class Home extends React.Component{
  render(){
    const name = this.props.navigation.getParam('name');
    return(
        <View style={styles.container}>
          <Text style={styles.paragraph}>This is HomeScreen</Text>
          <Button title="Go to Detials"
                  onPress={()=> this.props.navigation.navigate('Second')}/>
          <Text>{name}</Text>
        </View>
    )
  }
}

class Details extends React.Component{
  state ={
    text: ''
  }

  render(){
    return(
        <View style={styles.container}>
          <TextInput placeholder={"Enter"}
                     style={{width: 200,borderBottomWidth: 1, borderColor: 'red'}}
                     onChangeText={(text) => this.setState({text})}
                     value={this.state.text}/>

          <Text style={styles.paragraph}>This is DetailsScreen</Text>
          <Button title="Go to Home"
                  onPress={()=> this.props.navigation.navigate('First', {name: this.state.text})}/>
        </View>
    )
  }
}

const RootStack = createStackNavigator({
  First: Home,
  Second: Details
},{
  initialRouteName: 'First',
})

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
