import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const eventosFicticios = [
  {
    id: 1,
    titulo: "Festival de Inverno",
    data: "15 Jul 2024 - 18:00h",
    local: "Parque Central",
    categoria: "Música",
    imagem: require('../assets/evento1.jpg'),
    descricao: "Maior festival de inverno da região com atrações nacionais e internacionais"
  },
  {
    id: 2,
    titulo: "Feira de Tecnologia",
    data: "22 Ago 2024 - 09:00h",
    local: "Centro de Convenções",
    categoria: "Tecnologia",
    imagem: require('../assets/evento2.jpg'),
    descricao: "Novidades tech e palestras com especialistas do setor"
  },
  {
    id: 3,
    titulo: "Mostra de Arte Moderna",
    data: "05 Set 2024 - 14:00h",
    local: "Museu Municipal",
    categoria: "Arte",
    imagem: require('../assets/evento3.jpg'),
    descricao: "Exposição interativa de artistas contemporâneos"
  },
];

export default function ExploreEventos() {
  return (
    <LinearGradient colors={['#1A1A40', '#2D2D7A']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.tituloPrincipal}>Eventos em Destaque</Text>
        
        {/* Barra de Pesquisa */}
        <View style={styles.barraPesquisa}>
          <Ionicons name="search" size={24} color="#6C63FF" />
          <Text style={styles.textoPesquisa}>Pesquisar eventos...</Text>
        </View>

        {/* Lista de Eventos */}
        {eventosFicticios.map((evento) => (
          <TouchableOpacity key={evento.id} style={styles.cardEvento}>
            <Image source={evento.imagem} style={styles.imagemEvento} />
            
            <View style={styles.infoContainer}>
              <LinearGradient
                colors={['#6C63FF', '#4A47FF']}
                style={styles.categoriaTag}>
                <Text style={styles.textoCategoria}>{evento.categoria}</Text>
              </LinearGradient>
              
              <Text style={styles.tituloEvento}>{evento.titulo}</Text>
              
              <View style={styles.detalhesContainer}>
                <Ionicons name="calendar" size={16} color="#6C63FF" />
                <Text style={styles.textoDetalhe}>{evento.data}</Text>
              </View>
              
              <View style={styles.detalhesContainer}>
                <Ionicons name="location" size={16} color="#6C63FF" />
                <Text style={styles.textoDetalhe}>{evento.local}</Text>
              </View>
              
              <Text style={styles.descricaoEvento}>{evento.descricao}</Text>
              
              <TouchableOpacity style={styles.botaoSaibaMais}>
                <Text style={styles.textoBotao}>Saiba Mais</Text>
                <Ionicons name="arrow-forward" size={20} color="#6C63FF" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    color: 'white',
    marginBottom: 25,
    textAlign: 'center',
  },
  barraPesquisa: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    padding: 18,
    marginBottom: 25,
  },
  textoPesquisa: {
    color: '#999',
    marginLeft: 10,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  cardEvento: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  imagemEvento: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 20,
  },
  categoriaTag: {
    alignSelf: 'flex-start',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  textoCategoria: {
    color: 'white',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
  },
  tituloEvento: {
    color: 'white',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 20,
    marginBottom: 10,
  },
  detalhesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  textoDetalhe: {
    color: '#ddd',
    marginLeft: 8,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
  },
  descricaoEvento: {
    color: '#ccc',
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    lineHeight: 20,
    marginVertical: 12,
  },
  botaoSaibaMais: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  textoBotao: {
    color: '#6C63FF',
    fontFamily: 'Poppins_600SemiBold',
    marginRight: 8,
  },
});