import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { style } from './style'
import AsyncStorage from '@react-native-community/async-storage'

class Home extends Component {
    state = {
        user: {first_name:""},
    }
    async componentDidMount() {
        let User = await AsyncStorage.getItem('user')
        this.setState({ user: JSON.parse(User) })
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.headerText}>{`Good Moring, ${this.state.user.first_name}`}</Text>
            </View>

        )


    }
}
export default Home