import styled from "styled-components/native";


export const CardEstado = styled.View`
    width: 95%;
    display: flex;
`;

export const Container = styled.ScrollView`
    width: 80%;
    padding: 20px;
    border: 1px solid white;
    margin: 20px 0;
    border-radius: 10px;
`;

export const TextContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Content = styled.View`
    width: 100%;
    heigth: 100vh;
`;


export const TextCard = styled.Text`
    color: white;
`;

export const Label = styled.Text`
    color: white;
    font-weight: 700;
    margin: 10px 0;
`;


export const Title = styled.Text`
    color: white;
    margin: 20px 0;
    font-size: 16px;
`;

export const SubTitle = styled.Text`
    color: white;
    font-size: 12px;
`;