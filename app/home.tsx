import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#1A1A40', '#2D2D7A', '#4A4AC4']}
      style={styles.container}>
      
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>AgendaCity</Text>
      <Text style={styles.subtitle}>Encontre os melhores eventos da sua cidade</Text>

      <View style={styles.buttonContainer}>
        <Link href="/cadastro" asChild>
          <TouchableOpacity style={styles.button}>
            <LinearGradient colors={['#6C63FF', '#4A47FF']} style={styles.gradientButton}>
              <Ionicons name="add-circle" size={24} color="white" />
              <Text style={styles.buttonText}>Cadastrar Evento</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Link>

        <Link href="/explore" asChild>
          <TouchableOpacity style={styles.button}>
            <LinearGradient colors={['#FF6B6B', '#FF4757']} style={styles.gradientButton}>
              <Ionicons name="search" size={24} color="white" />
              <Text style={styles.buttonText}>Explorar Eventos</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.socialContainer}>
        <Ionicons name="logo-facebook" size={24} color="rgba(255,255,255,0.7)" />
        <Ionicons name="logo-instagram" size={24} color="rgba(255,255,255,0.7)" style={styles.socialIcon} />
        <Ionicons name="logo-twitter" size={24} color="rgba(255,255,255,0.7)" />
      </View>
      <Link href={{ pathname: '/relatorio' }} asChild>
    <TouchableOpacity style={styles.adminButton}>
        <Ionicons name="stats-chart" size={28} color="white" />
      </TouchableOpacity>
    </Link>



    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: 'white',
    marginBottom: 8,
    fontFamily: 'Poppins_700Bold',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: 'Poppins_400Regular',
    maxWidth: 300,
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  gradientButton: {
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Poppins_600SemiBold',
  },
  socialContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    marginHorizontal: 20,
  },
  adminButton: {
    position: 'absolute',
    bottom: 35,
    right: 25,
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 12,
    borderRadius: 50,
  },
});
