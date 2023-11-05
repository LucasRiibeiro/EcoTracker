import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { HouseLine } from 'phosphor-react-native';

import { Header } from '../../components/Header';
import { HistoryCard, HistoryProps } from '../../components/HistoryCard';

import { styles } from './styles';
import { historyGetAll} from '../../storage/quizHistoryStorage';
import { Loading } from '../../components/Loading';

export function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState<HistoryProps[]>([]);

  const { goBack } = useNavigation();

  async function fetchHistory() {
    const response = await historyGetAll();
    setHistory(response);
    setIsLoading(false);
  }
  
  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Header
        title="O Rastrador Ecológico"
        subtitle={`Um Tracker geral sobre o tema`}
        icon={HouseLine}
        onPress={goBack}
      />

      <ScrollView
        contentContainerStyle={styles.history}
        showsVerticalScrollIndicator={false}
      >
      </ScrollView>
    </View>
  );
}