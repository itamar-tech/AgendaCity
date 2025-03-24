import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function DetalhesEvento() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Dados fictícios por enquanto
  const evento = {
    id,
    titulo: "Festival de Inverno",
    data: "15 Jul 2024 - 18:00h",
    local: "Parque Central",
    categoria: "Música",
    imagem: require('../../assets/evento1.jpg'),
    descricao:
      "O Festival de Inverno traz uma experiência única com artistas renomados, praça de alimentação completa e espaço para toda a família. Participe dessa celebração cultural na cidade!",
  };

  return (
    <LinearGradient colors={['#1A1A40', '#2D2D7A']} style={styles.container}>
      <ScrollView>
        <Image source={evento.imagem} style={styles.imagemEvento} />
        <View style={styles.infoContainer}>
          <Text style={styles.categoria}>{evento.categoria}</Text>
          <Text style={styles.titulo}>{evento.titulo}</Text>

          <View style={styles.linha}>
            <Ionicons name="calendar" size={18} color="#6C63FF" />
            <Text style={styles.texto}>{evento.data}</Text>
          </View>

          <View style={styles.linha}>
            <Ionicons name="location" size={18} color="#6C63FF" />
            <Text style={styles.texto}>{evento.local}</Text>
          </View>

          <Text style={styles.descricao}>{evento.descricao}</Text>

          <TouchableOpacity onPress={() => router.back()} style={styles.botaoVoltar}>
            <Ionicons name="arrow-back" size={20} color="white" />
            <Text style={styles.textoVoltar}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagemEvento: {
    width: '100%',
    height: 250,
  },
  infoContainer: {
    padding: 20,
  },
  categoria: {
    color: '#6C63FF',
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 10,
  },
  titulo: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'Poppins_700Bold',
    marginBottom: 15,
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  texto: {
    color: '#ddd',
    marginLeft: 8,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  descricao: {
    color: '#ccc',
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    marginTop: 20,
    lineHeight: 22,
  },
  botaoVoltar: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#6C63FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  textoVoltar: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    marginLeft: 8,
  },
});
