import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

type Evento = {
  id: number;
  titulo: string;
  data: string;
  local: string;
  status: 'pendente' | 'aprovado' | 'rejeitado';
};



const eventosFicticios: Evento[] = [
  { id: 1, titulo: 'Festival de Inverno', data: '15 Jul 2024', local: 'Parque Central', status: 'pendente' },
  { id: 2, titulo: 'Feira de Tecnologia', data: '22 Ago 2024', local: 'Centro de Convenções', status: 'pendente' },
  { id: 3, titulo: 'Mostra de Arte Moderna', data: '05 Set 2024', local: 'Museu Municipal', status: 'pendente' },
];

export default function Aprovacoes() {
  const [eventos, setEventos] = useState<Evento[]>(eventosFicticios);

  const atualizarStatus = (id: number, novoStatus: 'aprovado' | 'rejeitado') => {
    const atualizados = eventos.map(evento =>
      evento.id === id ? { ...evento, status: novoStatus } : evento
    );
    setEventos(atualizados);
  };

  return (
    <LinearGradient colors={['#1A1A40', '#2D2D7A']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.tituloPrincipal}>Moderação de Eventos</Text>

        {eventos.map(evento => (
          <View key={evento.id} style={styles.card}>
            <Text style={styles.titulo}>{evento.titulo}</Text>
            <Text style={styles.texto}>📅 {evento.data}</Text>
            <Text style={styles.texto}>📍 {evento.local}</Text>
            <Text style={[styles.status, styles[`status_${evento.status}`]]}>
              {evento.status.toUpperCase()}
            </Text>

            {evento.status === 'pendente' && (
              <View style={styles.botoes}>
                <TouchableOpacity
                  style={[styles.botao, styles.botaoAprovar]}
                  onPress={() => atualizarStatus(evento.id, 'aprovado')}>
                  <Ionicons name="checkmark-circle" size={20} color="white" />
                  <Text style={styles.botaoTexto}>Aprovar</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.botao, styles.botaoRejeitar]}
                  onPress={() => atualizarStatus(evento.id, 'rejeitado')}>
                  <Ionicons name="close-circle" size={20} color="white" />
                  <Text style={styles.botaoTexto}>Rejeitar</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  tituloPrincipal: {
    fontSize: 24,
    fontFamily: 'Poppins_600SemiBold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 14,
    padding: 20,
    marginBottom: 20,
  },
  titulo: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 6,
  },
  texto: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 4,
  },
  status: {
    marginTop: 8,
    marginBottom: 12,
    fontSize: 12,
    fontFamily: 'Poppins_600SemiBold',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  status_pendente: {
    backgroundColor: '#FFCC00',
    color: '#1A1A40',
  },
  status_aprovado: {
    backgroundColor: '#6CFFB8',
    color: '#1A1A40',
  },
  status_rejeitado: {
    backgroundColor: '#FF6B6B',
    color: '#1A1A40',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  botaoAprovar: {
    backgroundColor: '#4CAF50',
  },
  botaoRejeitar: {
    backgroundColor: '#F44336',
  },
  botaoTexto: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    marginLeft: 8,
  },
});
