import React from 'react';
import {View,Text,StyleSheet }from 'react-native';
import Input from './Input';

class Picker extends React.Component{
    render(){
        return(
            <TouchableOpacity style={styles.container}
                onPress={this.props.onPress}
            >
                <TextInput style={styles.editText}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                >
                </TextInput>
            </TouchableOpacity>
        );
    }
}

export default Picker;

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