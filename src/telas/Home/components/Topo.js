import React from "react";
import { Image, StyleSheet, Text, View, } from "react-native";
import logo from '../../../assets/logo.png';
import { CarregaTopo } from "../../../servicos/carregaDados";

 class Topo extends React.Component{

    state = {
        topo:{
            boasVindas: '',
            legendas: ''
        }
    }


    atualizaTopo(){

        const retorno = CarregaTopo();
        this.setState({topo:retorno})
        console.log(retorno)
      
    }

    componentDidMount(){

       this.atualizaTopo();
    }

    render(){
        return(
            <View style={estilos.topo}>     
              <Image source={logo} style={estilos.imagem}/>
              <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
              <Text style={estilos.legenda}>{this.state.topo.legendas}</Text>
              
            </View>
          );

    }
    
}   

const estilos = StyleSheet.create({
    topo:{
        backgroundColor:'#f6f6f6',
        padding: 16,
    },
    imagem:{
        width:95,
        height:48,
        marginTop: 25,
        marginBottom: 25,
    },
    boasVindas:{
        marginBottom: 15,
        fontSize:26,
        lineHeight:42,
        fontWeight: 'bold'
    },
    legenda:{
        fontSize:16,
        lineHeight:26,
    }
})


export default Topo