import React, { Component } from 'react';
import { View, Text, Picker, ScrollView, TextInput, Keyboard } from 'react-native';

import { connect } from 'react-redux';



class CargoComp extends Component {
    constructor(props) {
        super(props);
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
        this.state = {
            language: 'started', // so thu tu cua doi tuong lay tu mang 
            VNA: '',
            DOW: '',
            MZFW: '',
            MTOW: '',
            MLDW: '',

            totalFuel: '',
            taxiFuel: '',
            tripFuel: '',
            takeOffFuel: '',

            adult: '',
            child: '',
            infant: '',
            bags: '',
            underload: '',


            allow: '',
            abc: '',
            

        }
        
    }
    focusNextField(id) {
        this.inputs[id].focus();
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
    takeOffFuel = () => {
        //takeoff fuel
        this.state.takeOffFuel = Number(this.state.totalFuel) - Number(this.state.taxiFuel);
        //operation weight
        let OW = Number(this.state.DOW) + Number(this.state.takeOffFuel);
        let th1 = Number(this.state.MZFW) + Number(this.state.takeOffFuel);
        let th2 = Number(this.state.MLDW) + Number(this.state.tripFuel);

        if (th1 < th2) {
            this.state.allow = Number(th1) - Number(OW)
        } else {
            this.state.allow = Number(th2) - Number(OW)
        }

    }

    tinhtoan = () => {
        let TTL = Number(this.state.adult) * 75 + Number(this.state.child) * 35 + Number(this.state.bags) + Number(this.state.underload)
        console.log(TTL);
        this.state.abc = Number(this.state.allow) - TTL
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

                        <View style={ao.baochunho}>
                            <View style={ao.baochutieude}>
                                <Text style={ao.tieude}>MZFW:</Text>
                                <Text style={ao.chuthich}>(Maximum Zero Fuel Weight)</Text>
                            </View>
                            <View style={ao.baochuketqua}>
                                <Text style={ao.ketqua}>{this.state.MZFW}</Text>
                            </View>
                        </View>

                        <View style={ao.baochunho}>
                            <View style={ao.baochutieude}>
                                <Text style={ao.tieude}>MTOW:</Text>
                                <Text style={ao.chuthich}>(Maximum Take Off Weight)</Text>
                            </View>
                            <View style={ao.baochuketqua}>
                                <Text style={ao.ketqua}>{this.state.MTOW}</Text>
                            </View>
                        </View>

                        <View style={ao.baochunho}>
                            <View style={ao.baochutieude}>
                                <Text style={ao.tieude}>MLDW:</Text>
                                <Text style={ao.chuthich}>(Maximum Landing Weight)</Text>
                            </View>
                            <View style={ao.baochuketqua}>
                                <Text style={ao.ketqua}>{this.state.MLDW}</Text>
                            </View>

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

                    <View style={ao.baoinlon}>
                        <View style={ao.baoinnho}>
                            <Text style={ao.tieudein}>Total Fuel</Text>
                            <TextInput
                                style={ao.in}
                                onChangeText={(totalFuel) => this.setState({ totalFuel })}
                                keyboardType='numeric'
                                returnKeyType='next'
                                returnKeyLabel='Go'
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
                            <Text style={ao.tieudein}>Taxi Fuel</Text>
                            <TextInput
                                style={ao.in}
                                onChangeText={(taxiFuel) => this.setState({ taxiFuel })}
                                keyboardType='numeric'
                                returnKeyType='next'
                                blurOnSubmit={false}
                                onSubmitEditing={() => {
                                    this.focusNextField('three');
                                }}
                                ref={input => {
                                    this.inputs['two'] = input;
                                }}
                            />
                        </View>
                        {this.takeOffFuel()}
                        <View style={ao.baoinnho}>
                            <Text style={ao.tieudein}>TakeOff Fuel</Text>
                            <Text
                                style={ao.in}> {this.state.takeOffFuel}</Text>
                        </View>
                    </View>
                    <View style={ao.baoinnho}>
                        <Text style={ao.tieudein}>Trip Fuel</Text>
                        <TextInput
                            style={ao.in}
                            onChangeText={(tripFuel) => this.setState({ tripFuel })}
                            keyboardType='numeric'
                            returnKeyType='next'
                            blurOnSubmit={false}
                            onSubmitEditing={() => {
                                this.focusNextField('four');
                            }}
                            ref={input => {
                                this.inputs['three'] = input;
                            }}
                        />
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                            marginBottom: 10,
                            marginTop: 10
                        }}
                    />
                    <View>
                        <View style={ao.baoinnho}>
                            <Text style={ao.tieudein}>Adult</Text>
                            <TextInput
                                style={ao.in}
                                onChangeText={(adult) => this.setState({ adult })}
                                keyboardType='numeric'
                                returnKeyType='next'
                                returnKeyLabel='next'
                                blurOnSubmit={false}
                                onSubmitEditing={() => {
                                    this.focusNextField('five');
                                }}
                                ref={input => {
                                    this.inputs['four'] = input;
                                }}
                            />
                        </View>
                        <View style={ao.baoinnho}>
                            <Text style={ao.tieudein}>Child</Text>
                            <TextInput
                                style={ao.in}
                                onChangeText={(child) => this.setState({ child })}
                                keyboardType='numeric'
                                returnKeyType='next'
                                blurOnSubmit={false}
                                onSubmitEditing={() => {
                                    this.focusNextField('six');
                                }}
                                ref={input => {
                                    this.inputs['five'] = input;
                                }}
                            />
                        </View>
                        <View style={ao.baoinnho}>
                            <Text style={ao.tieudein}>Infant</Text>
                            <TextInput
                                style={ao.in}
                                onChangeText={(infant) => this.setState({ infant })}
                                keyboardType='numeric'
                                returnKeyType='next'
                                blurOnSubmit={false}
                                onSubmitEditing={() => {
                                    this.focusNextField('seven');
                                }}
                                ref={input => {
                                    this.inputs['six'] = input;
                                }}
                            />
                        </View>
                        <View style={ao.baoinnho}>
                            <Text style={ao.tieudein}>Bags</Text>
                            <TextInput
                                style={ao.in}
                                onChangeText={(bags) => this.setState({ bags })}
                                keyboardType='numeric'
                                returnKeyType='next'
                                blurOnSubmit={false}
                                onSubmitEditing={() => {
                                    this.focusNextField('eight');
                                }}
                                ref={input => {
                                    this.inputs['seven'] = input;
                                }}
                            />
                        </View>
                        <View style={ao.baoinnho}>
                            <Text style={ao.tieudein}>Underload</Text>
                            <TextInput
                                style={ao.in}
                                onChangeText={(underload) => this.setState({ underload })}
                                keyboardType='numeric'
                                returnKeyType='done'
                                onSubmitEditing={Keyboard.dismiss}
                                ref={input => {
                                    this.inputs['eight'] = input;
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
                    {this.tinhtoan()}
                </ScrollView>

                <View style={ao.baofinal}>
                    <Text style={ao.tieudefinal}> Cargo Can Load</Text>
                    <Text style={ao.final}> {this.state.abc} </Text>
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
)(CargoComp);

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
        marginLeft: 10

    },
    ketqua: {
        fontSize: 30,
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
        flex: 0.7,
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