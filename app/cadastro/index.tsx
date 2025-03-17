import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';

export default function CadastroEvento() {
  const [form, setForm] = useState({
    nome: '',
    dataHora: '',
    localizacao: '',
    descricao: '',
    responsavel: '',
    documento: null
  });

 

  const handleCadastro = () => {
    console.log(form);
  };

  return (
    <LinearGradient colors={['#1A1A40', '#2D2D7A']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Cadastrar Novo Evento</Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="pricetag" size={20} color="#6C63FF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nome do evento"
            placeholderTextColor="#999"
            value={form.nome}
            onChangeText={text => setForm({...form, nome: text})}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="calendar" size={20} color="#6C63FF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="DD/MM/AAAA HH:mm"
            placeholderTextColor="#999"
            value={form.dataHora}
            onChangeText={text => setForm({...form, dataHora: text})}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="location" size={20} color="#6C63FF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Local do evento"
            placeholderTextColor="#999"
            value={form.localizacao}
            onChangeText={text => setForm({...form, localizacao: text})}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="document-text" size={20} color="#6C63FF" style={styles.icon} />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descrição detalhada"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            value={form.descricao}
 
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#6C63FF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Responsável (contato)"
            placeholderTextColor="#999"
            value={form.responsavel}
            onChangeText={text => setForm({...form, responsavel: text})}
          />
        </View>

  

        <TouchableOpacity style={styles.button} onPress={handleCadastro}>
          <LinearGradient
            colors={['#6C63FF', '#4A47FF']}
            style={styles.gradientButton}>
            <Text style={styles.buttonText}>Publicar Evento</Text>
            <Ionicons name="rocket" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 25,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    color: 'white',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    paddingVertical: 18,
    fontFamily: 'Poppins_400Regular',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(108,99,255,0.2)',
    borderRadius: 12,
    padding: 18,
    marginVertical: 10,
  },
  uploadText: {
    color: '#6C63FF',
    marginLeft: 10,
    fontFamily: 'Poppins_500Medium',
  },
  button: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 30,
    shadowColor: '#6C63FF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  gradientButton: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 18,
    marginRight: 10,
  },
});