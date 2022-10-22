import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../views/Home/HomeScreen';
import Repositorios from '../views/Repositorios/Repositorios';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Repositorios" component={Repositorios} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}