import styled from "styled-components/native";


export const CardEstado = styled.View`
    width: 95%;
    display: flex;
`;

export const Container = styled.ScrollView`
    width: 100%;
    margin: 20px 0;
    border-radius: 10px;
    background-color: white;
    padding: 0 20px;
`;

export const ContainerModal = styled.View`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ContentModal = styled.View`
    width: 90%;
    height: 70%;
    background-color: #CCC;
    margin: auto;
    padding: 15px;
    border-radius: 10px;
`;

export const ContentModalInfo = styled.ScrollView`
    width: 90%;
    height: 70%;
    background-color: #CCC;
    margin: auto;
    padding: 15px;
    border-radius: 10px;
`;

export const ContentItem = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0 0 0;
`;

export const ContentItemInfo = styled.View`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0 20px 0;
`;

export const ButtonContainer = styled.View`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-itens: center;
    margin: 0 0 20px 0;
`;

export const Button = styled.TouchableOpacity`
    width: 40%;
    margin: 5px auto;
    padding: 2px;
    background-color: #50CDA7;
    border-radius: 5px;
`;

export const TextButton = styled.Text`
    color: #FFF;
    margin: auto;
`;


export const TextContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 0;
`;

export const Content = styled.View`
    width: 100%;
`;


export const TextCard = styled.Text`
    color: white;
`;

export const Label = styled.Text`
    color: #38846B;
    font-size: 22px;
    font-weight: 700;
    margin: 0;
`;

export const TextValue = styled.Text`
    color: #555150 ;
    font-size: 18px;
    font-weight: 700;
    margin: 10px 0;
`;

export const Title = styled.Text`
    color: black;
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    margin: 10px auto;
`;

export const TitleModal = styled.Text`
    color: black;
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    margin: 10px 0;
`;

export const SubTitle = styled.Text`
    color: white;
    font-size: 12px;
`;