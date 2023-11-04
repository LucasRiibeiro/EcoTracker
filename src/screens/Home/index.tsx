import { useEffect, useState } from 'react';
import { FlatList, View, Text, ImageBackground } from 'react-native';
import { Tree } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { CardEstado, TextCard, Container, Title, TextContainer, Label, SubTitle, Content } from './myStyle';
import { Level} from '../../components/Level';
import { Header} from '../../components/Header';
import { QuizCard } from '../../components/QuizCard';

import { styles } from './styles';
import { QUIZZES } from '../../data/quizzes';
import json from '../../data/dados.json';

export function Home() {
  const [quizzes, setQuizzes] = useState(QUIZZES);
  const [selectedLevel, setSelectedLevel] = useState(1); // Nível médio como padrão
  const [listaDeItens, setListaDeItens] = useState([]); // Usando useState para criar a lista

  const { navigate } = useNavigation();
  const co2Dados = json.dados;

  useEffect(() => {
    // Atualize a lista de itens com base no nível selecionado
    const updatedListaDeItens = co2Dados
      .filter((item) => item.Level === selectedLevel)
      .map((item, index) => (
        <CardEstado key={index}>
          <TextContainer>
            <TextCard>{item.Nome}</TextCard>
            <TextCard>{item.Emissao}</TextCard>
          </TextContainer>
        </CardEstado>
      ));
    setListaDeItens(updatedListaDeItens);
  }, [selectedLevel]);

  function handleLevelFilter(level) {
    setSelectedLevel(level); // Atualiza o nível selecionado
  }

  return (
    <View style={styles.container}>
      <Header
        icon={Tree}
        title="Eco Tracker"
        subtitle="Seu App de Consciência Ambiental"
        onPress={() => navigate('history')}
      />

      <View style={styles.levels}>
        <Level title="CO2" type="EASY" onPress={() => handleLevelFilter(1)} isChecked={selectedLevel === 1} />
        <Level title="Poluição" type="MEDIUM" onPress={() => handleLevelFilter(2)} isChecked={selectedLevel === 2} />
      </View>

      {selectedLevel === 1 && (
        <Container>
          <Title>Emissão de CO2 por Estados</Title>
          <SubTitle>*Obs: Os valores apresentados são em toneladas de CO2 emitidos por habitantes</SubTitle>
          <TextContainer>
            <Label>Estado</Label>
            <Label>Emissão</Label>
          </TextContainer>
          {listaDeItens}
        </Container>
      )}
  
    </View>
  );
}
