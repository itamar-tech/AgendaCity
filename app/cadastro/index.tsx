import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useRouter } from 'expo-router';

export default function CadastroEvento() {
  const router = useRouter();

  const [form, setForm] = useState({
    nome: '',
    dataHora: new Date(),
    localizacao: '',
    descricao: '',
    responsavel: '',
    documento: null
  });

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleConfirmDate = (selectedDate: Date) => {
    setShowDatePicker(false);
    setForm({ ...form, dataHora: selectedDate });
  };

  const handleCadastro = () => {
    console.log('📦 Dados enviados:', form);
    Alert.alert('Evento enviado!', 'Redirecionando para tela de sucesso...');

    setTimeout(() => {
      router.push('/cadastro/sucesso');
    }, 1000); // delay pequeno só pra ver o alert (opcional)
  };

  return (
    <LinearGradient colors={['#1A1A40', '#2D2D7A']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Cadastrar Novo Evento</Text>

        {/* Nome do Evento */}
        <View style={styles.inputContainer}>
          <Ionicons name="pricetag" size={20} color="#6C63FF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Nome do evento"
            placeholderTextColor="#999"
            value={form.nome}
            onChangeText={(text) => setForm({ ...form, nome: text })}
          />
        </View>

        {/* Data/Hora */}
        <View style={styles.inputContainer}>
          <Ionicons name="calendar" size={20} color="#6C63FF" style={styles.icon} />
          <TouchableOpacity
            onPress={() => setShowDatePicker(true)}
            style={{ flex: 1 }}>
            <Text style={styles.dateText}>
              {form.dataHora.toLocaleString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </Text>
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={showDatePicker}
          mode="datetime"
          date={form.dataHora}
          onConfirm={handleConfirmDate}
          onCancel={() => setShowDatePicker(false)}
          locale="pt_BR"
        />

        {/* Local */}
        <View style={styles.inputContainer}>
          <Ionicons name="location" size={20} color="#6C63FF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Local do evento"
            placeholderTextColor="#999"
            value={form.localizacao}
            onChangeText={(text) => setForm({ ...form, localizacao: text })}
          />
        </View>

        {/* Descrição */}
        <View style={styles.inputContainer}>
          <Ionicons name="document-text" size={20} color="#6C63FF" style={styles.icon} />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descrição detalhada"
            placeholderTextColor="#999"
            multiline
            numberOfLines={4}
            value={form.descricao}
            onChangeText={(text) => setForm({ ...form, descricao: text })}
          />
        </View>

        {/* Responsável */}
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={20} color="#6C63FF" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Responsável (contato)"
            placeholderTextColor="#999"
            value={form.responsavel}
            onChangeText={(text) => setForm({ ...form, responsavel: text })}
          />
        </View>

        {/* Botão de Publicar */}
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
  dateText: {
    color: 'white',
    fontSize: 16,
    paddingVertical: 18,
    fontFamily: 'Poppins_400Regular',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
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
