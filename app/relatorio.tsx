import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const eventosMock = [
  {
    id: 1,
    titulo: 'Festival de Inverno',
    categoria: 'Música',
    tipo: 'público',
    data: '15/07/2024',
  },
  {
    id: 2,
    titulo: 'Feira de Tecnologia',
    categoria: 'Tecnologia',
    tipo: 'privado',
    data: '22/08/2024',
  },
  {
    id: 3,
    titulo: 'Mostra de Arte Moderna',
    categoria: 'Arte',
    tipo: 'público',
    data: '05/09/2024',
  },
];

export default function Relatorios() {
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroTipo, setFiltroTipo] = useState('');

  const eventosFiltrados = eventosMock.filter((evento) => {
    const categoriaOk = filtroCategoria ? evento.categoria === filtroCategoria : true;
    const tipoOk = filtroTipo ? evento.tipo === filtroTipo : true;
    return categoriaOk && tipoOk;
  });

  return (
    <LinearGradient colors={['#1A1A40', '#2D2D7A']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Relatórios de Eventos</Text>

        <View style={styles.filtrosContainer}>
          <Text style={styles.filtrosLabel}>Filtrar por categoria:</Text>
          <View style={styles.filtros}>
            {['Música', 'Tecnologia', 'Arte'].map((cat) => (
              <TouchableOpacity
                key={cat}
                style={[
                  styles.filtroBotao,
                  filtroCategoria === cat && styles.filtroSelecionado,
                ]}
                onPress={() =>
                  setFiltroCategoria(filtroCategoria === cat ? '' : cat)
                }>
                <Text style={styles.filtroTexto}>{cat}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.filtrosLabel}>Tipo de evento:</Text>
          <View style={styles.filtros}>
            {['público', 'privado'].map((tipo) => (
              <TouchableOpacity
                key={tipo}
                style={[
                  styles.filtroBotao,
                  filtroTipo === tipo && styles.filtroSelecionado,
                ]}
                onPress={() => setFiltroTipo(filtroTipo === tipo ? '' : tipo)}>
                <Text style={styles.filtroTexto}>{tipo}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={styles.resultadoTexto}>
          Total: {eventosFiltrados.length} evento(s)
        </Text>

        {eventosFiltrados.map((evento) => (
          <View key={evento.id} style={styles.card}>
            <Text style={styles.cardTitulo}>{evento.titulo}</Text>
            <Text style={styles.cardInfo}>Categoria: {evento.categoria}</Text>
            <Text style={styles.cardInfo}>Tipo: {evento.tipo}</Text>
            <Text style={styles.cardInfo}>Data: {evento.data}</Text>
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
  titulo: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 20,
    textAlign: 'center',
  },
  filtrosContainer: {
    marginBottom: 20,
  },
  filtrosLabel: {
    color: '#ccc',
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
    marginBottom: 6,
  },
  filtros: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 12,
  },
  filtroBotao: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  filtroSelecionado: {
    backgroundColor: '#6C63FF',
  },
  filtroTexto: {
    color: 'white',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
  resultadoTexto: {
    color: '#bbb',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 10,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitulo: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 4,
  },
  cardInfo: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
  },
});
