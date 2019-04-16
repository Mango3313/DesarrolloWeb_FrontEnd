import React,{Image} from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';
import UserHome from './UserHome';

const SecondNav = createDrawerNavigator({
  Main: {screen: UserHome,
    navigationOptions:{
        title:'Principal'
    }
},
});

const App = createAppContainer(SecondNav);

export default App;