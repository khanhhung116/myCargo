import MainComp from './MainComp';
import ACComp from './ACComp';
import AddComp from './AddComp';
import CargoComp from './CargoComp';
import EzComp from './EzComp';

import { StackNavigator, TabNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'

export const StackComp = StackNavigator({

    MainComp: {
        screen: MainComp,
        navigationOptions: {
            title: 'Home'
        }
    },
    AddComp: {
        screen: AddComp,
        navigationOptions: {
            title: 'Add AirCraft'
        }
    },
    ACComp: {
        screen: ACComp,
        navigationOptions: {
            title: 'AirCraft Detail'
        }
    },

});



export const CargoStack = StackNavigator({
    CargoComp: {
        screen: CargoComp,
        navigationOptions: {
            title: 'Cargo Can Load'
        }
    }
});

export const EzStack = StackNavigator({
    EzComp: {
        screen: EzComp,
        navigationOptions: {
            title: 'EZFW'
        }
    }
});


const Tabbar = createBottomTabNavigator({
    Home: {
        screen: StackComp,
        navigationOptions: {
            tabBarLabel: 'HOME'
        }
    },
    Cargo: {
        screen: CargoStack,
        navigationOptions: {
            tabBarLabel: 'CARGO'
        }
    },
    Ez: {
        screen: EzStack,
        navigationOptions: {
            tabBarLabel: 'EZFW'
        }
    },
},
    {
        tabBarPosition: 'bottom',
    });
export default Tabbar;
