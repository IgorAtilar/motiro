import { PressableScale } from '@/components/buttons/PressableScale';
import { ShoppingListCard } from '@/components/cards/ShoppingListCard';
import { Icon } from '@/components/icon/Icon';
import { HeadingText } from '@/components/text/HeadingText';
import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import { StyleSheet, ScrollView, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Lista de compras',
    description: 'Lista de compras para a semana',
  },
  {
    id: '2',
    title: 'Lista de compras pro churrasco',
    description: 'Lista de compras para o churrasco do fim de semana',
  },
  {
    id: '3',
    title: 'Lista de compras pro nosso RPG de quinta',
    description: 'Lista de compras para o RPG de quinta-feira',
  },
  {
    id: '4',
    title: 'Lista de compras pra nossa viagem para a praia no feriado',
    description: 'Lista de compras para a viagem para a praia no feriado',
  },
  {
    id: '5',
    title: 'Lista de compras',
    description: 'Lista de compras para a semana',
  },
  {
    id: '6',
    title: 'Lista de compras pro churrasco',
    description: 'Lista de compras para o churrasco do fim de semana',
  },
  {
    id: '7',
    title: 'Lista de compras pro nosso RPG de quinta',
    description: 'Lista de compras para o RPG de quinta-feira',
  },
  {
    id: '8',
    title: 'Lista de compras pra nossa viagem para a praia no feriado',
    description: 'Lista de compras para a viagem para a praia no feriado',
  },
  {
    id: '9',
    title: 'Lista de compras',
    description: 'Lista de compras para a semana',
  },
  {
    id: '10',
    title: 'Lista de compras pro churrasco',
    description: 'Lista de compras para o churrasco do fim de semana',
  },
  {
    id: '11',
    title: 'Lista de compras pro nosso RPG de quinta',
    description: 'Lista de compras para o RPG de quinta-feira',
  },
  {
    id: '12',
    title: 'Lista de compras pra nossa viagem para a praia no feriado',
    description: 'Lista de compras para a viagem para a praia no feriado',
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <HeadingText style={styles.heading}>Minhas listas</HeadingText>
          {DATA.map((item) => (
            <Link key={item.id} href='/edit-shopping-list' asChild>
              <ShoppingListCard
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                onDelete={() => {
                  Alert.alert(
                    'Deletar lista',
                    'Deseja realmente deletar a lista?',
                    [
                      {
                        text: 'Cancelar',
                        style: 'cancel',
                      },
                      {
                        text: 'Deletar',
                        style: 'destructive',
                      },
                    ]
                  );
                }}
              />
            </Link>
          ))}
        </ScrollView>
        <Link href='/create-shopping-list' asChild>
          <PressableScale style={styles.fab} onPress={() => {}}>
            <Icon name='plus' size={32} color={Colors.beta} />
          </PressableScale>
        </Link>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingBottom: 120,
  },
  heading: {
    paddingHorizontal: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 16,
    right: 12,
    borderRadius: 32,
    backgroundColor: Colors.alfa,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
