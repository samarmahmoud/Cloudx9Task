import React, { Component } from 'react'
import { Text, View, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Header ,Input,Button} from '../../Components/index'
import { style } from './style'
import { Servicecategory } from '../../store/Actions/Services'
import { connect } from 'react-redux'

class ClinicVisits extends Component {
    state = {
        selectedItem: [],
        location:""
    }
    componentDidMount() {
        this.props.Servicecategory()
    }
    componentWillReceiveProps(nextProps) {
        let temp = []
        if (nextProps.categories != this.props.categories) {
            for (let i = 0; i < nextProps.categories.length; i++) {
                temp.push(false)
            }
        }
        this.setState({ selectedItem: temp })
    }

    OnSelect = (index) => {
        let selectedIndex = this.state.selectedItem
        selectedIndex[index] = true
        this.setState({ selectedItem: selectedIndex })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Header BackButton Title={"Clinic Visit"} 
                onPressLeft={()=>{this.props.navigation.goBack()}}/>
                {this.props.loading && (
                    <ActivityIndicator color={'#FCF4BD'} />
                )}

                {!this.props.loading && (
                    <View style={style.MainContainer}>
                        <Text style={style.HeadlinTex}>{"Speciality"}</Text>
                        <FlatList
                            data={this.props.categories}
                            contentContainerStyle={style.LitsStyle}
                            keyExtractor={item => item.key}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity style={[style.entyRow, { backgroundColor: this.state.selectedItem[index] ? '#29A8B8' : '#FCF4BD' }]}
                                        onPress={() => this.OnSelect(index)}>
                                        <Image source={{ uri: item.image }} style={style.iconStyle} />
                                        <Text style={[style.Text, { color: this.state.selectedItem[index] ? '#fff' : '#636D75' }]}>{item.name}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                        <View style={style.BookNowContainer}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={style.ServiceNameStyle}>{"You don't know the speciality yet?"}</Text>
                                <TouchableOpacity style={[style.entyRow, { backgroundColor: '#29A8B8', padding: 4, }]}>
                                    <Text style={[style.Text, { color: '#fff' }]}>{"Book Now"}</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={style.discriptionStyle}>{"Use online counsitation now."}</Text>
                        </View>
                        <View style={style.LocationContainer}>
                        <Text style={style.HeadlinTex}>{"Location"}</Text>
                            <View style={style.passwordContainer}>
                                <Input
                                    placeholder={'Search by location'}
                                    value={this.state.location}
                                    inputStyle={style.input}
                                    onChangeText={value => this.setState({ location: value })}
                                />
                            </View>
                        </View>
                        <View style={{marginTop:'35%'}} >
                            <Button title={"Show Result"}
                                onPress={() => { }} />
                        </View>
                    </View>

                )}
            </View>

        )


    }
}
const mapStateToProps = state => {
    return {
        loading: state.ServiceReducer.loading,
        error: state.ServiceReducer.error,
        categories: state.ServiceReducer.categories

    };
};
export default connect(mapStateToProps, { Servicecategory })(ClinicVisits);
