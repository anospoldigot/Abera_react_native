import { StyleSheet, Text, View, TouchableHighlight, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { StackActions } from '@react-navigation/native'

import User from '../assets/login/user.png'
import Lock from '../assets/login/lock.png'
import People from '../assets/login/people.png'


export default function Login({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleMasuk = () => {
        if(username == 'test' && password == '123'){
            navigation.dispatch(StackActions.replace('Home'))
        }else{
            Alert.alert('Username atau Password Salah')
            console.log([username, password])
        }
    }

    return (
        <View style={styles.screen}>
            <View style={styles.imageLoginContainer}>
                <Image source={require('../assets/Login.png')} />
            </View>
            <View style={styles.title}>
                <Image source={People} style={{marginRight: 10}} />
                <Text >Konsultasi & Pengaduan</Text>
            </View>
            <View>
                <View style={styles.textInputWrap}>
                    <Image source={User} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Nama Pengguna"
                        onChangeText={val => setUsername(val)}
                        // defaultValue={text}
                    />
                </View>
                <View style={styles.textInputWrap}>
                    <Image source={Lock} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Kata Sandi"
                        onChangeText={val => setPassword(val)}
                        secureTextEntry={true}
                        // defaultValue={text}
                    />
                </View>
            </View>
            <View>
                <TouchableHighlight style={styles.touchableButton} onPress={handleMasuk}>
                    <Text style={styles.button}>Masuk</Text>
                </TouchableHighlight>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: '#F8F9FA',
        flex: 1
    },
    touchableButton: {
        borderRadius: 6,
    },
    button: {
        backgroundColor: '#4166F5',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 6,
        color: 'white',
        letterSpacing: 1,
        fontWeight: '500',
        elevation: 2,
        textAlign: 'center'
    },
    imageLoginContainer: {
        alignItems: 'center'
    },
    title: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 100,
        elevation: 3,
        marginBottom: 20
    },
    textInputWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingVertical: 5,
        borderRadius: 6,
        elevation: 3,
        marginBottom: 15,
        paddingHorizontal: 20
    },
    textInput: {
        height: 40,
        padding: 10,
        flexGrow: 1
        
        // borderWidth: 1
    }
})