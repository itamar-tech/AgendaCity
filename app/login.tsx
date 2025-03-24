import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
  
    if (email === 'admin@agendacity.com') {
      router.replace('/admin/aprovacoes'); // Vai direto para a tela administrativa
    } else {
      router.replace('/home'); // Usuário casual vai para a home
    }
  };

  
  return (
    <LinearGradient colors={['#1A1A40', '#2D2D7A']} style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.innerContainer}>
        
        <Ionicons name="log-in" size={64} color="#6C63FF" style={styles.icon} />

        <Text style={styles.title}>Bem-vindo ao AgendaCity</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="#6C63FF" style={styles.iconLeft} />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#999"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed" size={20} color="#6C63FF" style={styles.iconLeft} />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <LinearGradient colors={['#6C63FF', '#4A47FF']} style={styles.gradientButton}>
            <Ionicons name="arrow-forward" size={20} color="white" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Entrar</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
  <Text style={styles.registerText}>Não tem conta?</Text>
  <TouchableOpacity onPress={() => router.push('/registro')}>
    <Text style={styles.registerLink}>Cadastre-se</Text>
  </TouchableOpacity>
</View>

      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#bbb',
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  iconLeft: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    paddingVertical: 18,
    fontFamily: 'Poppins_400Regular',
  },
  button: {
    borderRadius: 14,
    overflow: 'hidden',
    marginTop: 20,
  },
  gradientButton: {
    paddingVertical: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  registerText: {
    color: '#ccc',
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    marginRight: 6,
  },
  registerLink: {
    color: '#6C63FF',
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    textDecorationLine: 'underline',
  },
  
});
