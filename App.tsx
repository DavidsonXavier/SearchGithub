import { StyleSheet } from 'react-native';

import { Navigation } from './src/components/Navegacao/Navigation';
import Rotas from './src/configs/Rotas'
const image = require('./src/assets/background-galaxy.png');


export default function App() {
  return (
    <>
      <Rotas />
    </>


  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },

})
