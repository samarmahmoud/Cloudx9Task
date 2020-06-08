import React, { Component } from 'react'
import { Text, View, Image ,ScrollView} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Header, Input ,ServicesContainer} from '../../Components'
import { style } from './style'


class Book extends Component {
    state = {
        user: {},
        patientStatus:"",
        services:[
        {name:"Chatbot",discripation:"Continue chatting with me",Image:require('../../Assets/Images/chatbot.png'),ScreenName:"ChatBot"},
        {name:"Visit a Clinic",discripation:"Book An Appointment",Image:require('../../Assets/Images/chatbot.png'),ScreenName:"VisitClinic"},
        {name:"Online Consultation",discripation:"Chat with our Doctors Online",Image:require('../../Assets/Images/chatbot.png'),ScreenName:"OnlineConsultation"},
        {name:"House calls",discripation:"Continue chatting with me",Image:require('../../Assets/Images/chatbot.png'),ScreenName:"HouseVisits"}
        ]
    }
    async componentDidMount() {
        let User = await AsyncStorage.getItem('user')
        this.setState({ user: JSON.parse(User) })
    }
    render() {
        return (
            <View style={style.container}>
                <View style={style.headerSection}>
                    <Header containerStyle={style.headerStyle} />
                    <View style={{ width: '95%', alignSelf: 'center' }}>
                        <Text style={style.headerText}>{`Good Moring, ${this.state.user.first_name}`}</Text>
                        <Text style={style.headerText2}>{`I'm your medical arm and I'm always happy to help you`}</Text>
                       <View style={{marginTop:'5%',width:'100%'}}>
                       <Input
                            placeholder={`What do you feel today, ${this.state.user.first_name} ?`}
                            value={this.state.patientStatus}
                            inputStyle={style.input}
                            onChangeText={value => this.setState({ patientStatus: value })}
                        />
                       </View>
                    </View>

                </View>
                <ScrollView>
                    <View style={style.optionsContainer}>
                        <Text style={[style.headerText,{color:'#29A8B8'}]}>{"WHAT CAN I DO FOR YOU ?"}</Text>
                    </View>
                    {this.state.services.map((item, key) => {
                        return (
                            <ServicesContainer 
                            onPress={()=>this.props.navigation.navigate('ClinicVisits')}
                            key={key} 
                            servicesIcon={item.Image}
                            ServiceName={item.name}
                            discription={item.discripation}
                            />
                        )
                    })}

                </ScrollView>
            </View>

        )


    }
}
export default Book