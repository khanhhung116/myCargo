import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { addAct } from '../Act/AddAct';

class AddComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVNA: '',
            inputDOW: '',
            inputMZFW: '',
            inputMTOW: '',
            inputMLDW: ''
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ao.bao}>
                <ScrollView>
                    <View style={ao.baoinput} >
                        <Text style={ao.tieude}> VNA: </Text>
                        <TextInput
                            style={ao.chuinput}
                            placeholder=" AirCraf Name"
                            onChangeText={(inputVNA) => this.setState({ inputVNA })}
                        />
                    </View>
                    <View style={ao.baoinput} >
                        <Text style={ao.tieude}> DOW: </Text>
                        <TextInput
                            style={ao.chuinput}
                            placeholder="DOW"
                            onChangeText={(inputDOW) => this.setState({ inputDOW })}
                            keyboardType='numeric'

                        />
                    </View>
                    <View style={ao.baoinput} >
                        <Text style={ao.tieude}> MZFW: </Text>
                        <TextInput
                            style={ao.chuinput}
                            placeholder=" Maximum Zero Fuel Weight"
                            onChangeText={(inputMZFW) => this.setState({ inputMZFW })}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={ao.baoinput} >
                        <Text style={ao.tieude}> MTOW: </Text>
                        <TextInput
                            style={ao.chuinput}
                            placeholder=" Maximum Take Off Weight"
                            onChangeText={(inputMTOW) => this.setState({ inputMTOW })}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={ao.baoinput} >
                        <Text style={ao.tieude}> MLDW: </Text>
                        <TextInput
                            style={ao.chuinput}
                            placeholder=" Maximum Landing Weight"
                            onChangeText={(inputMLDW) => this.setState({ inputMLDW })}
                            keyboardType='numeric'
                        />
                    </View>
                </ScrollView>

                <View style={ao.baonut}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.onAddAC(
                                this.state.inputVNA,
                                this.state.inputDOW,
                                this.state.inputMZFW,
                                this.state.inputMTOW,
                                this.state.inputMLDW,
                            ),
                                navigate('MainComp')
                        }}
                    >
                        <Image
                            source={require('../Image/Check.png')}
                            style={ao.iconnut}
                        ></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigate('MainComp') }}
                    >
                        <Image
                            source={require('../Image/Cancle.png')}
                            style={ao.iconnut}
                        ></Image>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
export default connect(
    state => {
        return {

        }
    },
    dispatch => {
        return {
            onAddAC: (VNA, DOW, MZFW, MTOW, MLDW) => dispatch(addAct(VNA, DOW, MZFW, MTOW, MLDW))
        }
    }
)(AddComp);


const ao = {
    bao: {
        flex: 1
    },
    baoinput: {
        marginTop: 20,
        flexDirection: 'row'
    },
    tieude: {
        flex: 1,
        fontSize: 30,
        color: 'red',
    },
    chuinput: {
        flex: 2,
        color: 'green',
        backgroundColor: 'yellow'
    },
    baonut: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 1,
        flexDirection: 'row'
    },
    iconnut: {
        width: 70,
        height: 70,
        margin: 10
    },
}