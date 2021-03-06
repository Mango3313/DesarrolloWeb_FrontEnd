import React from 'react';
import {View,Text,StyleSheet,TextInput,Image,Dimensions,Button} from 'react-native';
import CrearCuenta from './CrearCuenta';
import { NavigationEvents } from 'react-navigation';
//import {Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');
    const styles = StyleSheet.create({
        centerView:{
            flex: 1,
            //justifyContent: 'center',
            //alignItems: 'center',
            //borderWidth: 1,
            //flexDirection: 'column',
            //display:'table'
        },
        splashText:{
            fontFamily:'Roboto',
            fontSize:18 ,
            
            fontWeight:'bold',
            //backgroundColor: '#FDD7E4',
            alignSelf: 'stretch',
            margin: 10,
            textAlign: 'center',
            //width: width,
        },
        inTextStyle:{
            borderColor: '#03A9F4',
            backgroundColor:'#FFF', 
            borderWidth: 1, 
            width:width-40,
            height: height/15 - 5,
            padding:5,
            margin: 5,
            borderRadius:8,
            
        },
        sizeButton:{
            width:width,
            height: height,
        }
    });

export default class Login extends React.Component{

    static navigationOptions = { title: 'Welcome', header: null };

    constructor(props) {
        return super(props);
      }
    render(){
        return(
            <View style={styles.centerView}>
            <View style={{alignItems: 'center',flex:1,justifyContent: 'flex-start',margin:15, marginTop:width*.15,}}>
                <Image source={require('../assets/gps.png')} style={{height:50,width:50,}}></Image>
                <Text style={styles.splashText}>Hey, Listen!</Text>
            </View>
            <View style={{flex:1,alignItems:'center',alignContent:'center',margin:15,borderRadius:5}}>
            <Text style={{textAlign:'left',alignSelf: 'stretch',fontWeight:'bold',fontSize: 20}}> Usuario:</Text>
            <TextInput style={styles.inTextStyle} selectionColor={'#4B3FB5'}/>
            <Text style={{textAlign:'left',alignSelf: 'stretch',marginTop:10,fontWeight:'bold',fontSize:20}}>Contraseña:</Text>
            <TextInput style={styles.inTextStyle} selectionColor={'#4B3FB5'}/>
            </View>
            <View style={{flex:1,margin:10}}>
            <Text style={{alignSelf:'center',marginBottom:15,fontSize:20}}>Recuperar Contraseña</Text>
            <Text style={{alignSelf:'center',padding:5,marginBottom:15,fontSize:20}} onPress={()=>{
                this.props.navigation.navigate("Registrer");
            }}>Crear cuenta</Text>
            <Button title="Iniciar" buttonStyle={{}} onPress={()=>{
                this.props.navigation.replace("UHome");
            }}/>
            </View>
            </View>
        );
    }
}