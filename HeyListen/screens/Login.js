import React from 'react';
import {View,Text,StyleSheet,TextInput,Image,Dimensions,Button} from 'react-native';
//import {Dimensions} from 'react-native';

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
    centerView:{
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#3F51B5',
        //borderWidth: 1,
        //flexDirection: 'column',
        //display:'table'
    },
    splashText:{
        fontFamily:'Roboto',
        fontSize:18 ,
        color:'#FFF',
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
        width:width-25,
        height: height/20,
        padding:5,
        margin: 15,
        borderRadius:8,
        
    },
    sizeButton:{
        width:width,
        height: height,
    }
});

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = { text: '' };
      }
    render(){
        return(
            <View style={styles.centerView}>
            <View style={{alignItems: 'center',flex:1,justifyContent: 'flex-start',margin:15, marginTop:width*.15,}}>
                <Image source={require('../assets/gps.png')} style={{height:50,width:50,}}></Image>
                <Text style={styles.splashText}>Hey, Listen!</Text>
            </View>
            <View style={{flex:1,alignItems:'center',margin:15,}}>
            <Text style={{textAlign:'left',alignSelf: 'stretch',fontWeight:'bold',color:'#FFF'}}> Usuario:</Text>
                <TextInput style={styles.inTextStyle}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text} selectionColor={'#03A9F4'}/>
            <Text style={{textAlign:'left',alignSelf: 'stretch',marginTop:10,fontWeight:'bold',color:'#FFF'}}>Contraseña:</Text>
            <TextInput style={styles.inTextStyle} selectionColor={'#03A9F4'}/>
            </View>
            <View style={{flex:1,margin:10}}>
            <Text style={{alignSelf:'center',marginBottom:15,color:'#FFF'}}>Recuperar Contraseña</Text>
            <Text style={{alignSelf:'center',padding:5,marginBottom:15,color:'#FFF'}}>Crear cuenta</Text>
            <Button title="Iniciar" buttonStyle={{}} onPress={()=>{}}/>
            </View>
            </View>
        );
    }
}