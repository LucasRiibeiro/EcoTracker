import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import { GlobeHemisphereWest as globe } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { QuizCard } from '../../components/QuizCard';

import { styles } from './styles';
import { QUIZZES } from '../../data/quizzes';

export function Begin() {
  const [quizzes, setQuizzes] = useState(QUIZZES);

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        icon={globe} 
        title="ECO Tracker"
        subtitle="Para um mundo melhor"
        onPress={() => navigate('history')}
      />

      <FlatList
        data={quizzes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <QuizCard
            data={item}
            onPress={() => navigate('quiz', { id: item.id })}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.cards}
      />
    </View>
  );
}