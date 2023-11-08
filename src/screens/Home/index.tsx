import { useEffect, useState } from 'react';
import { FlatList, View, Text, ImageBackground, Image, TouchableOpacity, Modal } from 'react-native';
import { Tree } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { CardEstado, TextCard, Container, Title, TextContainer, Label, ContainerModal, ContentModal, ContentItem, TitleModal, TextValue, ContentModalInfo, ContentItemInfo, ButtonContainer, Button, TextButton } from './myStyle';
import { Level} from '../../components/Level';
import { Header} from '../../components/Header';
import { QuizCard } from '../../components/QuizCard';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { QUIZZES } from '../../data/quizzes';
import json from '../../data/dados.json';

export function Home() {
  const [selectedLevel, setSelectedLevel] = useState(1); // Nível médio como padrão
  const { navigate } = useNavigation();
  const co2Dados = json.dados;

  const [selectedState, setSelectedState] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [listaDeItens, setListaDeItens] = useState([]);
  const [selectedItemData, setSelectedItemData] = useState(null);
  const [isCO2InfoVisible, setCO2InfoVisible] = useState(false);
  const [isImpactInfoVisible, setImpactInfoVisible] = useState(false);
  const [isReductionInfoVisible, setReductionInfoVisible] = useState(false);

  const openModal = (itemData) => {
    const placement = co2Dados.findIndex((state) => state.Nome === itemData.Nome) + 1;
    setSelectedItemData({ ...itemData, placement }); // Adicione a colocação ao item de dados
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openCO2Info = () => {
    setCO2InfoVisible(true);
  };

  const closeCO2Info = () => {
    setCO2InfoVisible(false);
  };

  const openImpactInfo = () => {
    setImpactInfoVisible(true);
  };

  const closeImpactInfo = () => {
    setImpactInfoVisible(false);
  };

  const openReductionInfo = () => {
    setReductionInfoVisible(true);
  };

  const closeReductionInfo = () => {
    setReductionInfoVisible(false);
  };


  useEffect(() => {
    // Atualize a lista de itens com base no nível selecionado
    const updatedListaDeItens = co2Dados
      .filter((item) => item.Level === selectedLevel)
      .map((item, index) => (
        <TouchableOpacity
          key={item.Nome}  // Substitua 'item.id' pelo identificador único do seu item
          onPress={() => openModal(item)}
          style={{ position: 'absolute', left: item.Left, top: item.Top, width: item.Width, height: item.Height}}
        ></TouchableOpacity>
      ));
    setListaDeItens(updatedListaDeItens);
  }, [selectedLevel]);

  function handleLevelFilter(level) {
    setSelectedLevel(level);
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
          <Image
            source={require('./../../assets/mapaBrasil.jpg')} // Substitua pelo caminho da sua imagem do mapa
            style={{ width: 350, height: 360 }}
          />
          {listaDeItens}
          <ButtonContainer>
            <Button onPress={openImpactInfo}>
              <TextButton>Impactos do CO2</TextButton>
            </Button>
            <Button onPress={openReductionInfo}>
              <TextButton>Como Reduzir a emissão?</TextButton>
            </Button>
            </ButtonContainer>
        </Container>
      )}

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <ContainerModal>
          <ContentModal>
          <ContentItem>
          <TitleModal>Dados sobre emissão de CO2</TitleModal>
          <TouchableOpacity onPress={closeModal}><Icon name="close" size={30} color="black" /></TouchableOpacity>
          </ContentItem>
          <Image
      source={{ uri: selectedItemData?.Bandeira }} // Use a URL da imagem
      style={{ width: 150, height: 100 }}
    />
            <ContentItem><Label>Estado: <TextValue>{selectedItemData?.Nome}</TextValue></Label></ContentItem>
            <ContentItem><Label>Emissão de CO2: <TextValue>{selectedItemData?.Emissao} toneladas por habitante</TextValue></Label></ContentItem>
            <TextValue>Esse Estado foi o #{co2Dados.findIndex((state) => state.Nome === selectedItemData?.Nome) + 1} em emissão de carbono no Brasil</TextValue>
          </ContentModal>
        </ContainerModal>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isImpactInfoVisible}
        onRequestClose={closeImpactInfo}
      >
        <ContainerModal>
    <ContentModalInfo>
      <ContentItem>
        <TitleModal>Como reduzir a emissão de CO2?</TitleModal>
        <TouchableOpacity onPress={closeImpactInfo}><Icon name="close" size={30} color="black" /></TouchableOpacity>
      </ContentItem>
      <ContentItemInfo>
        <TextValue>Definição do CO2 (Dióxido de Carbono):</TextValue>
        <TextContainer>
          <Text> - O CO2, ou dióxido de carbono, é um gás composto por um átomo de carbono (C) e dois átomos de oxigênio (O).</Text>
          </TextContainer>
          <TextContainer>
          <Text> - É um gás incolor e inodoro que desempenha um papel fundamental na regulação do clima da Terra.</Text>
          </TextContainer>            
      </ContentItemInfo>
      <ContentItemInfo>
        <TextValue>Impactos da Alta Emissão de CO2:</TextValue>
        <TextContainer>
          <Text> - A alta emissão de CO2 é um fator chave para o aumento da temperatura média da Terra, levando ao aquecimento global.</Text>
          </TextContainer>
          <TextContainer>
          <Text> - O CO2 atua como um gás estufa, retendo o calor na atmosfera e contribuindo para o aumento das temperaturas.</Text>
          </TextContainer>
          <TextContainer>
          <Text> - O aumento da concentração de CO2 na atmosfera está associado a eventos climáticos extremos, como ondas de calor, tempestades mais intensas e secas prolongadas.</Text>
          </TextContainer>  
          <TextContainer>
          <Text> - A poluição do ar decorrente da queima de combustíveis fósseis, que emite CO2, está ligada a problemas de saúde, como doenças respiratórias e cardiovasculares.</Text>
          </TextContainer>       
          <TextContainer>
          <Text> - O aumento da temperatura causado pelo CO2 contribui para o derretimento das calotas polares e geleiras, o que resulta em um aumento do nível do mar e ameaça regiões costeiras.</Text>
          </TextContainer>       
      </ContentItemInfo>
    </ContentModalInfo>
  </ContainerModal>
      </Modal>

      {/* Modal para "Como Reduzir a emissão?" */}
<Modal
  animationType="slide"
  transparent={true}
  visible={isReductionInfoVisible}
  onRequestClose={closeReductionInfo}
>
  <ContainerModal>
    <ContentModalInfo>
      <ContentItem>
        <TitleModal>Como reduzir a emissão de CO2?</TitleModal>
        <TouchableOpacity onPress={closeReductionInfo}><Icon name="close" size={30} color="black" /></TouchableOpacity>
      </ContentItem>
      <ContentItemInfo>
        <TextValue>Economize energia em casa:</TextValue>
        <TextContainer>
          <Text> - Utilize lâmpadas LED de baixo consumo de energia.</Text>
          </TextContainer>
          <TextContainer>
          <Text> - Melhore o isolamento da sua casa para reduzir a necessidade de aquecimento e refrigeração.</Text>
          </TextContainer>
          <TextContainer>
          <Text> - Desligue aparelhos eletrônicos quando não estiverem em uso e use uma régua de energia para desligar vários dispositivos de uma só vez.</Text>
          </TextContainer>              
      </ContentItemInfo>
      <ContentItemInfo>
        <TextValue>Opte por fontes de energia renovável:</TextValue>
        <TextContainer>
          <Text> - Se possível, escolha uma empresa de energia que forneça energia 100% renovável.</Text>
          </TextContainer>
          <TextContainer>
          <Text> - Considere a instalação de painéis solares em sua casa.</Text>
          </TextContainer>
          <TextContainer>
          <Text> - Desligue aparelhos eletrônicos quando não estiverem em uso e use uma régua de energia para desligar vários dispositivos de uma só vez.</Text>
          </TextContainer>        
      </ContentItemInfo>
      <ContentItemInfo>
        <TextValue>Reduza o consumo de água quente:</TextValue>
        <TextContainer>
          <Text> - Instale um aquecedor de água eficiente.</Text>
        </TextContainer>
        <TextContainer>
          <Text> - Tome banhos mais curtos e use água morna em vez de quente sempre que possível.</Text>
        </TextContainer>
      </ContentItemInfo>
      <ContentItemInfo>
        <TextValue>Escolha transporte sustentável:</TextValue>
        <TextContainer>
          <Text> - Use o transporte público, carpooling ou ande de bicicleta sempre que possível.</Text>
        </TextContainer>
        <TextContainer>
        <Text> - Opte por veículos híbridos ou totalmente elétricos se puder.</Text>
        </TextContainer>
      </ContentItemInfo>
      <ContentItemInfo>
        <TextValue>Reduza o consumo de carne e produtos de origem animal:</TextValue>
        <TextContainer>
          <Text> - Consuma menos carne vermelha e produtos de origem animal, pois a produção de carne é uma das principais fontes de emissões de CO2.</Text>
        </TextContainer>
      </ContentItemInfo>
      <ContentItemInfo>
        <TextValue>Compre produtos locais e sazonais:</TextValue>
        <TextContainer>
          <Text> - Reduza a pegada de carbono associada ao transporte de alimentos comprando produtos locais e da estação.</Text>
        </TextContainer>
      </ContentItemInfo>
      <ContentItemInfo>
        <TextValue>Reduza o desperdício de alimentos:</TextValue>
        <TextContainer>
          <Text> - Planeje suas refeições e use sobras de forma eficiente.</Text>
        </TextContainer>
        <TextContainer>
        <Text> - Composte os resíduos orgânicos em vez de enviá-los para o aterro.</Text>
        </TextContainer>
      </ContentItemInfo>
      <ContentItemInfo>
        <TextValue>Recicle e reduza o uso de plástico:</TextValue>
        <TextContainer>
          <Text> - Recicle materiais sempre que possível e evite produtos de plástico de uso único.</Text>
        </TextContainer>
      </ContentItemInfo>
    </ContentModalInfo>
  </ContainerModal>
</Modal>
    </View>
  );
}
