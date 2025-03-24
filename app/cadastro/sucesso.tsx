import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function SucessoCadastro() {
  return (
    <LinearGradient colors={['#1A1A40', '#2D2D7A']} style={styles.container}>
      <Ionicons name="checkmark-circle" size={120} color="#6CFFB8" style={styles.icon} />

      <Text style={styles.title}>Evento enviado com sucesso!</Text>
      <Text style={styles.subtitle}>Aguarde a aprovação da prefeitura para publicação.</Text>

      <View style={styles.buttonsContainer}>
        <Link href={{ pathname: '/' }} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="home" size={20} color="white" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Voltar ao Início</Text>
          </TouchableOpacity>
        </Link>

        <Link href={{ pathname: '/cadastro' }} asChild>
          <TouchableOpacity style={[styles.button, styles.secondaryButton]}>
            <Ionicons name="add-circle" size={20} color="white" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Cadastrar outro</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  icon: {
    marginBottom: 30,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ccc',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  buttonsContainer: {
    width: '100%',
    gap: 16,
  },
  button: {
    backgroundColor: '#6C63FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
  },
  secondaryButton: {
    backgroundColor: '#4A47FF',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonIcon: {
    marginRight: 10,
  },
});
