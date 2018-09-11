import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Screen1 from '../component/Screen1';
import Screen2 from '../component/Screen2';
import Screen3 from '../component/Screen3';
import Screen4 from '../component/Screen4';
import Screen5 from '../component/Screen5';
import Screen6 from '../component/Screen6';
import Screen7 from '../component/Screen7';
import Screen8 from '../component/Screen8';



export default Navigasi = createStackNavigator ({
    Satu: {screen: Screen1}, 
    Dua: {screen: Screen2},
    Tiga: {screen: Screen3},
    Empat: {screen: Screen4},
    Lima: {screen: Screen5},
    Enam:{screen: Screen6},
    Tujuh:{screen: Screen7},
    Delapan:{screen: Screen8},
    
},{
    initialRouteName: 'Satu',
    headerMode:'none'
});