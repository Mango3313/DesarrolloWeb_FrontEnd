import React from 'react';
import {View,Text,StyleSheet,TextInput,Image,Dimensions,Button} from 'react-native';
import MapView, { Polygon } from 'react-native-maps';

const facultad =[{latitude:20.705326,longitude: -100.444366},
    {latitude:20.704931,longitude: -100.443105},
    {latitude:20.699787,longitude: -100.440441},
    {latitude:20.699750,longitude:-100.444101},
    {latitude:20.700071,longitude:-100.444430}
];
const styles = StyleSheet.create({
    contenedor:{
        display: 'flex',
        flex:1,

    },
    mapa:{
        flex:1,

    }
});

export default class UserHome extends React.Component{
    static navigationOptions = { title: 'Bienvenido'};
    constructor(props){
        return super(props);
    }
    render(){
        return(
            <View style={styles.contenedor}>
            <MapView style={styles.mapa}  initialRegion={{
                latitude:20.703986,
                longitude:-100.443867,
                latitudeDelta:0,
                longitudeDelta:0,
            }}>
                <Polygon coordinates={facultad}/>
            </MapView>
            </View>
        );
    }
}