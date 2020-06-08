import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { styles } from './style';
import {autoLogin} from '../../store/Actions/Auth'
import {connect} from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'


class Splash extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    let user = {}
    user = await AsyncStorage.getItem('user')
    console.log("user", user)
    if (user != null) {
      await setTimeout(() => {  this.props.navigation.replace("AppTabs")  }, 2000)
    }
    else {
      await setTimeout(() => { this.props.navigation.replace("Signup")}, 2000)
    }
  }

  render() {
    console.log(this.props.Restaurant);
    
    return (
      <View style={styles.container}>
       <Text style={styles.nameText}>{"CloudX9"}</Text>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
   
  };
};
export default connect(mapStateToProps, { autoLogin })(Splash);
