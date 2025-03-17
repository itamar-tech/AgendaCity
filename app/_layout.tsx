import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: 'AgendaCity' }} />
      <Stack.Screen name="cadastro" options={{ title: 'Cadastro de Eventos' }} />
      <Stack.Screen name="explore" options={{ title: 'Explorar Eventos' }} />
    </Stack>
  );
}
