import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { connect } from 'react-redux';
import { deleteAct } from '../Act/MainAct';

class MainComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
        }
    }
    renderItem = ({ item, index }) => {
        const { navigate } = this.props.navigation;
        const swipesetting = {
            autoClose: true,
            right: [
                {
                    onPress: () => {
                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                { text: 'NO', onPress: () => console.log('Cancle'), style: 'cancel' },
                                {
                                    text: 'YES', onPress: () => {
                                        this.props.onDeleteItem(index)

                                    }
                                }
                            ],
                            { cancelable: true }
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return (
            <Swipeout {...swipesetting}>
                <View >
                    {console.log(index)}
                    <TouchableOpacity
                        style={ao.baoFL}
                        onPress={() => {
                            navigate('ACComp', { abc: index });
                        }}
                    >
                        <Image
                            source={require('../Image/AirPlane.jpg')}
                            style={ao.AirPlane}
                        ></Image>
                        <View style={{
                            flex: 1,
                            justifyContent: 'center',
                            padding: 10
                        }}>
                            <Text style={ao.AC}>A/C: {item.VNA}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Swipeout>

        )
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={ao.bao}>

                <View style={{ flex: 2 }}>
                    <FlatList
                        data={this.props.x.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    >

                    </FlatList>
                </View>
                {console.log(this.state.pickkey)}
                <View style={ao.baoicon}>
                    <TouchableOpacity
                        style={ao.iconadd}
                        onPress={() => { navigate('AddComp') }}
                    >
                        <Image
                            source={require('../Image/Add.png')}
                            style={ao.iconadd}
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
            x: state.VNA
        }
    },
    dispatch => {
        return {
            onDeleteItem: (index) => dispatch(deleteAct(index))
        }
    }
)(MainComp);


const ao = {
    bao: {
        flex: 1
    },
    baoFL: {
        flexDirection: 'row',
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#d6d7da',
        backgroundColor: '#FF9966',
        margin: 0.5
    },
    AirPlane: {
        width: 100,
        height: 100
    },
    AC: {
        color: 'red',
        fontSize: 40
    },
    baoicon: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 0.0001

    },
    iconadd: {
        width: 70,
        height: 70,
        marginRight: 20,
        marginBottom: 100
    },
    chuadd: {
        fontSize: 20,
        color: 'white'
    }
}