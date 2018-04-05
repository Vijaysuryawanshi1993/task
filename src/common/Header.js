import React from 'react';
import {View,Text,StyleSheet }from 'react-native';

class Header extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                
            </View>
        );
    }
}

export default Header;

const styles=StyleSheet.create({
    container:{
        height:55,
        backgroundColor:'#2979FF',
        elevation:2,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})