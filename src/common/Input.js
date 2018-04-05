import React from 'react';
import {View,Text,StyleSheet,TextInput }from 'react-native';

class Input extends React.Component{
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

export default Input;

const styles=StyleSheet.create({
    container:{
        padding:4
    },
    editText:{
        padding:4,
        justifyContent:'center',
        alignSelf:'stretch',
        alignItems:'flex-start'
    }
})