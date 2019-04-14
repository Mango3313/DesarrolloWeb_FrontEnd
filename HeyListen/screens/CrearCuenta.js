import React from 'react';
import {View,Text,StyleSheet,TextInput,Image,Dimensions,Button} from 'react-native';

const styles = StyleSheet.create({
    vistaPrincipal:{
        flex:1,
        margin:15,
        display:'flex',
        flexDirection:'column'
    },
    botonesVista:{
        flex:1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent:'space-between'
    }
});

export default class CrearCuenta extends React.Component{
    static navigationOptions = { title: 'Registro'};
    constructor(props){
        return super(props);
    }
    render(){
        return(
            <View style={styles.vistaPrincipal}>
                <Text style={{flex:1}}>Ingrese los datos que se le piden: </Text>
                <View style={{flex:11,alignContent:'center',display:'flex',flexDirection:'column'}}>
                    <View style={{flex:3}}>
                        <Text>Nombre completo:</Text>
                        <TextInput></TextInput>
                    </View>
                    <View style={{flex:3}}>
                        <Text>Expediente:</Text>
                        <TextInput></TextInput>
                    </View>
                    <View style={{flex:3}}>
                        <Text>Correo:</Text>
                        <TextInput></TextInput>
                    </View>
                    <View style={{flex:3}}>
                        <Text>Contraseña:</Text>
                        <TextInput></TextInput>
                    </View>
                    <View style={{flex:3}}>
                        <Text>Repetir Contraseña:</Text>
                        <TextInput></TextInput>
                    </View>
                    <View style={styles.botonesVista}>
                        <Button title="Cancelar" onPress={()=>{
                            this.props.navigation.pop();
                        }} style={{flex:1, padding:10}}></Button>
                        <Button title="Registrarse" onPress={()=>{}} style={{flex:1,padding:10}}></Button>
                    </View>
                </View>
            </View>
        );
    }
}