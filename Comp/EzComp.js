import React, { Component } from 'react';
import { View, Text, Picker, TouchableOpacity, ScrollView, TextInput, Keyboard, KeyboardAvoidingView, } from 'react-native';

import { connect } from 'react-redux';



class EzComp extends Component {
    constructor(props) {
        super(props);
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
        this.state = {
            language: 'started', // so thu tu cua doi tuong lay tu mang 
            VNA: '',
            DOW: 0,
            MZFW: 0,
            MTOW: 0,
            MLDW: 0,

            pax: '',
            bags: '',
            cargo: '',

            paxw: '',
            loadingw: '',

            ezfw: '',

        }
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    tinhtoan = () => {
        this.state.paxw = Number(this.state.pax) * 75;
        this.state.loadingw = Number(this.state.paxw) + Number(this.state.bags) + Number(this.state.cargo);
        this.state.ezfw = Number(this.state.loadingw) + Number(this.state.DOW);
    }

    getdata = () => {
        this.props.x.data.map((object, i) => {
            if (i === this.state.language)
                return (
                    console.log(this.props.x.data[i].DOW),
                    this.state.VNA = this.props.x.data[i].VNA,
                    this.state.DOW = this.props.x.data[i].DOW,
                    this.state.MZFW = this.props.x.data[i].MZFW,
                    this.state.MTOW = this.props.x.data[i].MTOW,
                    this.state.MLDW = this.props.x.data[i].MLDW,
                    console.log("hung", this.state.DOW)
                )
        });
    }

    render() {
        return (
           


                <View style={ao.bao}>
 
                    <ScrollView style={{ flex: 8 }}>

                        <View style={ao.baopick}>
                            <Text style={ao.chuVNA}> A/C: </Text>
                            <Picker
                                selectedValue={this.state.language}
                                style={[ao.picker]} itemStyle={ao.pickerItem}
                                onValueChange={(itemValue, itemIndex) =>
                                    this.setState({ language: itemValue })}>
                                {
                                    this.props.x.data.map((object, index1) => {
                                        (console.log(object.VNA))
                                        return <Picker.Item label={object.VNA} value={index1} key={index1} />
                                    })
                                }
                            </Picker>
                        </View>

                        {this.getdata()}

                        <View style={ao.baochulon}>

                            <View
                                style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                }}
                            />
                            <View style={ao.baochunho}>
                                <View style={ao.baochutieude}>
                                    <Text style={ao.tieude}>DOW:</Text>
                                    <Text style={ao.chuthich}>(DOW)</Text>
                                </View>
                                <View style={ao.baochuketqua}>
                                    <Text style={ao.ketqua}>{this.state.DOW}</Text>
                                </View>
                            </View>

                        </View>

                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                marginBottom: 10,

                            }}
                        />

                        <View>

                            <View style={ao.baoinnho}>
                                <Text style={ao.tieudein}>Est. PAX</Text>
                                <TextInput
                                    style={ao.in}
                                    onChangeText={(pax) => this.setState({ pax })}
                                    keyboardType='numeric'
                                    returnKeyType='next'
                                    returnKeyLabel='next'

                                    blurOnSubmit={false}
                                    onSubmitEditing={() => {
                                        this.focusNextField('two');
                                    }}
                                    ref={input => {
                                        this.inputs['one'] = input;
                                    }}
                                />
                            </View>
                            <View style={ao.baoinnho}>
                                <Text style={ao.tieudein}>Est. BAGS</Text>
                                <TextInput
                                    style={ao.in}
                                    onChangeText={(bags) => this.setState({ bags })}
                                    keyboardType='numeric'
                                    returnKeyType='next'
                                    returnKeyLabel='next'

                                    blurOnSubmit={false}
                                    onSubmitEditing={() => {
                                        this.focusNextField('three');
                                    }}
                                    ref={input => {
                                        this.inputs['two'] = input;
                                    }}
                                />
                            </View>
                            <View style={ao.baoinnho}>
                                <Text style={ao.tieudein}>Est. CARGO</Text>
                                <TextInput
                                    style={ao.in}
                                    onChangeText={(cargo) => this.setState({ cargo })}
                                    keyboardType='numeric'
                                    returnKeyType='done'
                                    returnKeyLabel='done'

                                    blurOnSubmit={false}
                                    onSubmitEditing={Keyboard.dismiss}
                                    ref={input => {
                                        this.inputs['three'] = input;
                                    }}
                                />
                            </View>



                        </View>

                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                marginBottom: 10,
                                marginTop: 10
                            }}
                        />
                       
                       
                    </ScrollView>
                  
                    {this.tinhtoan()}




                    <View style={ao.baofinal}>
                        <Text style={ao.tieudefinal}> Estimate Zero Fuel Weight</Text>
                        <Text style={ao.final}> {this.state.ezfw} </Text>
                    </View>


                </View>
            
        );
    }
}

export default connect(
    state => {
        return {
            x: state.VNA
        }
    },
    dispatch => {
        return {

        }
    }
)(EzComp);

const ao = {
    bao: { flex: 1 },
    baopick: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },

    chuVNA: {
        fontSize: 30,
        color: 'red'
    },
    picker: {
        width: 270,
        height: 88,
        backgroundColor: '#FFF0E0',
        borderColor: 'black',
        borderWidth: 1,
    },
    pickerItem: {
        height: 88,
        color: 'blue',
        fontSize: 50,
    },
    ///////////////
    baochulon: {
        flex: 2,
        paddingTop: 20,

    },
    baochunho: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    baochutieude: {
        flex: 2,
        height: 65
    },
    baochuketqua: {
        flex: 1,
        height: 65
    },
    tieude: {
        fontSize: 30,
        color: 'red',
        marginLeft: 20
    },
    chuthich: {
        marginLeft: 20

    },
    ketqua: {
        fontSize: 35,
        color: 'blue',

    },
    //////////////
    baoinlon: {

    },
    baoinnho: {
        flex: 1,
        flexDirection: 'row'
    },
    tieudein: {
        flex: 0.5,
        fontSize: 30,
        color: 'red',
        marginLeft: 20,
        marginTop: 20
    },
    in: {
        fontSize: 40,
        flex: 0.6,
        height: 65,
        marginTop: 5,
        borderWidth: 2,
    },
    ///////////
    baofinal: {
        flex: 0.3,
        backgroundColor: '#FF9900',
        alignItems: 'center',
        justifyContent: 'center'

    },
    tieudefinal: {
        alignItems: 'center',
        fontSize: 15,
        color: 'red',
        marginTop:7
    },
    final: {
        fontSize: 25,

    },
}