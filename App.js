import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {
  const [ name, setName ] = useState('');
  const [ idade, setIdade ] = useState(0);
  const [ sexo, setSexo ] = useState(0);
  const [ limite, setLimite ] = useState(500);
  const [ estudante, setEstudante ] = useState(false);

  const sexos = [
    { sexo: 'Masculino' },
    { sexo: 'Feminino' },
  ];

  function abrirConta() {
    alert(
      `
      Nome: ${ name },
      Idade: ${ idade },
      Sexo: ${ sexos[ sexo ].sexo },
      Limite: R$ ${ limite.toFixed(0) },
      Estudante:  ${ estudante ? 'Sim' : 'Não' }
      `
    );
  }

  let sexoItem = sexos.map((valueItem, keyItem) => {
    return <Picker.Item key={ keyItem } value={ keyItem } label={ valueItem.sexo } />
  });

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' />
      <View style={ styles.container }>
        <Text style={ styles.title }>Banco Sujeito</Text>

        <View style={ styles.viewInput }>
          <TextInput
            placeholder='Seu nome'
            style={ [ styles.input, styles.inputNome ] }
            onChangeText={ (input) => setName(input) }
          />
        </View>

        <View style={ [ styles.viewInput, styles.idadeSexo ] }>
          <TextInput
            placeholder='Idade'
            keyboardType='numeric'
            style={ [ styles.input, styles.inputIdade ] }
            onChangeText={ (input) => setIdade(input) }
          />
          <Picker
            style={ { width: '40%' } }
            selectedValue={ sexo }
            onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }
            prompt='Sexo'
          >
            { sexoItem }
          </Picker>

          <Text>Estudante?</Text>
          <Switch
            value={ estudante }
            onValueChange={ (estadoSelecionado) => setEstudante(estadoSelecionado) }
          />
        </View>

        <View style={ styles.viewInput }>
          <Slider
            minimumValue={ 50 }
            maximumValue={ 3000 }
            value={ limite }
            onValueChange={ (itemValue) => setLimite(itemValue) }
          />
          <Text style={ styles.txtLimite }>Limite: R$ { limite.toFixed(0) }</Text>
        </View>

        <TouchableOpacity
          style={ styles.btnEnviar }
          onPress={ () => abrirConta() }
        >
          <Text style={ styles.btnText }>ABRIR CONTA</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 25,
    marginBottom: 20
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    fontSize: 18,
  },
  inputNome: {
    width: '100%',
  },
  inputIdade: {
    width: '20%',
  },
  viewInput: {
    width: '100%',
    marginVertical: 15,
  },
  idadeSexo: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  txtLimite: {
    textAlign: 'center',
  },

  btnEnviar: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 8
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
