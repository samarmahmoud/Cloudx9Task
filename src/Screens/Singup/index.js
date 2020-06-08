import React, { Component } from 'react'
import { Text, View, ScrollView ,ActivityIndicator} from 'react-native'
import { Button, Input } from '../../Components/index'
import { styles } from './style'
import {connect} from 'react-redux'
import {Registation} from '../../store/Actions/Auth'


class SingUp extends Component {

    state = {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        Phone: '',
        address: '',
        securePassword: true,
        deviceToken: '',
        requiredFeild: false,
        loading: false
    };
    handelSignUp = () => {
        let deviceToken= '';
        let characters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for ( var i = 0; i < charactersLength; i++ ) {
            deviceToken += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        let data = {
            "device_token":deviceToken,
            "device_id": Platform.OS ,
            "login_by":"manual",
            "first_name":this.state.firstname,
            "last_name":this.state.lastname,
            "email":this.state.email,
            "mobile":this.state.Phone,
            "password":this.state.password
          }
        if (this.state.firstname == "" || this.state.lastname == "" || this.state.email == ""
            || this.state.password == "" || this.state.Phone == "")
             {
            this.setState({ requiredFeild: true })
            }
        else{
           this.props.Registation(data)
          this.props.navigation.replace("AppTabs")
           
        }    
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView >
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>{"Sign up"}</Text>
                    </View>
                    <View style={styles.passwordContainer}>
                        <Input
                            placeholder={'First Name'}
                            value={this.state.firstname}
                            inputStyle={styles.input}
                            onChangeText={value => this.setState({ firstname: value })}
                        />
                        {this.state.requiredFeild && this.state.firstname == "" &&
                            <Text style={styles.errorMessage}>{"this feild requird"}</Text>
                        }
                    </View>
                    <View style={styles.passwordContainer}>
                        <Input
                            placeholder={'Last Name'}
                            value={this.state.lastname}
                            inputStyle={styles.input}
                            onChangeText={value => this.setState({ lastname: value })}
                        />
                        {this.state.requiredFeild && this.state.lastname == "" &&
                            <Text style={styles.errorMessage}>{"this feild requird"}</Text>
                        }
                    </View>
                    <View style={styles.passwordContainer}>
                        <Input
                            placeholder={"email"}
                            value={this.state.username}
                            inputStyle={styles.input}
                            onChangeText={value => this.setState({ email: value })}
                        />
                        {this.state.requiredFeild && this.state.username == "" &&
                            <Text style={styles.errorMessage}>{"this feild requird"}</Text>
                        }
                    </View>

                    <View style={styles.passwordContainer}>
                        <Input
                            placeholder={"password"}
                            value={this.state.password}
                            onChangeText={value => this.setState({ password: value })}
                            type={'Password'}
                            inputStyle={styles.input}
                            secureTextEntry={this.state.securePassword} />

                        {this.state.requiredFeild && this.state.password == "" &&
                            <Text style={styles.errorMessage}>{"this feild requird"}</Text>
                        }
                    </View>
                    <View style={styles.passwordContainer}>
                        <Input
                            placeholder={'Phone'}
                            value={this.state.Phone}
                            inputStyle={styles.input}
                            onChangeText={value => this.setState({ Phone: value })}
                        />
                        {this.state.requiredFeild && this.state.Phone == "" &&
                            <Text style={styles.errorMessage}>{"this feild requird"}</Text>
                        }
                    </View>
                    <View style={{ marginTop: '5%' }}>
                        <Button title={"Sing Up"}
                            onPress={() => this.handelSignUp()} />
                            {this.props.loading&&
                               <ActivityIndicator/>
                            }
                    </View>

                </ScrollView>
            </View>

        )


    }
}

const mapStateToProps = state => {
    return {
      loading: state.AuthReducer.loading,
      error:state.AuthReducer.error
  
    };
  };
export default connect(mapStateToProps, {Registation})(SingUp);
