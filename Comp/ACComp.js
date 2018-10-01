import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import { connect } from 'react-redux';

class ACComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VNA: '',
            DOW: '',
            MZFW: '',
            MTOW: '',
            MLDW: '',


        }
    }
    getdata = () => {
        const { params } = this.props.navigation.state;

        this.props.x.data.map((object, i) => {
            if (i === params.abc)
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
        const { navigate } = this.props.navigation;
        const { params } = this.props.navigation.state;
        return (
            <View style={{ flex: 1 }}>
                {this.getdata()}
                <View style={ao.tieudeAC}>
                    <Text style={ao.AC}>{this.state.VNA}</Text>
                </View>
                <ScrollView style={ao.baochulon}>

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

                </ScrollView>

                {/* <TouchableOpacity
                    onPress={() => navigate('MainComp')}
                >
                    <Text> BACK </Text>
                </TouchableOpacity>
                <Text>{params.abc}</Text> */}
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
        return {}
    }
)(ACComp);

const ao = {
    bao: {
        flex: 1
    },
    tieudeAC: {
        flex: 0.2,
        backgroundColor: '#CC33FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    AC: {
        fontSize: 80,
        color: 'white'
    },
    ///////
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


}