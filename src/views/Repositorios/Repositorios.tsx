import { View, FlatList } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react'

import Item from '../../components/item/Item';


export default function Repositorios() {
    const renderItem = ({ item }: any) => (
        <Item title={item.name} link={item.svn_url} />
    );
    const [user, setUser] = useState();
    useEffect(() => {
        const getData = async () => {
            try {
                const value = await AsyncStorage.getItem('usuario')
                if (value !== null) {
                    const valor = JSON.parse(value);
                    // console.log(JSON.parse(valor));
                    setUser(valor)

                }
            } catch (e) {
                return null
            }
        }
        getData();

    }, [])
    return (

        <View style={{ flex: 1 }}>
            <FlatList
                data={user}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

        </View>


    );
}