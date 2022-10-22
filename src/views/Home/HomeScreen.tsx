import { View, Text, Button, TextInput, Image } from 'react-native'
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { baseAxios } from '../../configs/baseAxios';

import imagemGithub from '../../../assets/searchGithub.png'


import { styles } from './styles';

interface iUsuario {
    id: string,
    name: string,
    svn_url: string
}


export default function HomeScreen({ navigation }: any) {

    const [user, setUser] = useState<string>('');
    const [notExistsUser, setNotExistsUser] = useState<boolean>(false);


    function buscaGithub(usuario: string) {

        const url = `${usuario}/repos`;


        let arrayName: iUsuario[] = [];

        baseAxios.get(url).then(dados => {
            setNotExistsUser(false);
            dados.data.map((element: iUsuario) => {
                const objJSON = {
                    id: element.id,
                    name: element.name,
                    svn_url: element.svn_url
                }

                arrayName.push(objJSON);
            })

            storeData(arrayName);
            setUser('');

        }).catch(err => {
            setNotExistsUser(true);
        })




    }
    const storeData = async (value: iUsuario[]) => {

        try {
            await AsyncStorage.setItem('usuario', JSON.stringify(value))
            navigation.navigate('Repositorios');
        } catch (e) {
            // saving error
        }
    }
    return (
        <View style={styles.container}>
            <Image source={imagemGithub} style={{ height: 200, width: 220 }}></Image>
            <View style={styles.containerInput}>
                <Text style={styles.text}> Usuario </Text>
                <TextInput style={styles.input} placeholder='Digite o usuário ' onChangeText={setUser} value={user}></TextInput>
            </View>

            {notExistsUser ? <Text style={styles.textAlert}>Usuário não encontrado</Text> : null}
            <Button title='Buscar' onPress={() => buscaGithub(user)}></Button>
        </View>
    );
}