import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

export default function CadastroEvento() {
  const [nome, setNome] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [documento, setDocumento] = useState(null);


  const handleCadastro = () => {
    // Implementar validação e submissão
    console.log({ nome, dataHora, localizacao, descricao, responsavel, documento });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nome do Evento *</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Nome do evento" />

      <Text style={styles.label}>Data e Hora *</Text>
      <TextInput style={styles.input} value={dataHora} onChangeText={setDataHora} placeholder="DD/MM/AAAA HH:mm" />

      <Text style={styles.label}>Localização *</Text>
      <TextInput style={styles.input} value={localizacao} onChangeText={setLocalizacao} placeholder="Local do evento" />

      <Text style={styles.label}>Descrição Detalhada *</Text>
      <TextInput style={styles.textArea} multiline numberOfLines={4} value={descricao} onChangeText={setDescricao} placeholder="Detalhes do evento" />

      <Text style={styles.label}>Responsável e Contato *</Text>
      <TextInput style={styles.input} value={responsavel} onChangeText={setResponsavel} placeholder="Nome e telefone/email" />


      <Button title="Cadastrar Evento" onPress={handleCadastro} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  label: { marginVertical: 8, fontWeight: 'bold' },
  input: { borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 10 },
  textArea: { borderWidth: 1, padding: 10, borderRadius: 5, height: 100, marginBottom: 10 }
});
