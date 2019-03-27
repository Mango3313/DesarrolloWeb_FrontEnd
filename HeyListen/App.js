import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import Login from './screens/Login';
//Declaracion de Estilos
const styles = StyleSheet.create({
    centerView:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3F51B5',
        //borderWidth: 1,
        flexDirection: 'column',
    },
    splashText:{
        fontFamily:'Roboto',
        fontSize:30 ,
        color:'#FFF',
        fontWeight:'bold',
        //backgroundColor: '#FDD7E4',
        alignSelf: 'stretch',
        margin: 5,
        textAlign: 'center',
    }
});

export default class SplashScreen extends React.Component{
  //Declarar constructor
  constructor(props){
    super(props);
    this.state = {
      timePassed: false,
    };
  }

componentDidMount() {
  setTimeout( () => {
      this.setTimePassed();
  },2500);
}

setTimePassed() {
  this.setState({timePassed: true});
}
    render(){
      if (!this.state.timePassed) {
              return (
                <View style={styles.centerView}> 
                <Image source={require('./assets/gps.png')} style={{height:50,width:50,}}></Image>
                <Text style={styles.splashText}>Hey, Listen!</Text>
                </View>
              );
          } else {
              return <Login/>;
          }
     
    }
    
}