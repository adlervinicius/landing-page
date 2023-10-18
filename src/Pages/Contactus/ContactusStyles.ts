//styled-components 
import styled from 'styled-components';

//styles
export const Container = styled.div`
    background-color: #7C4032;
    min-height: 100vh;
    display: grid;
    justify-content: center;
    aling-items: center;
    font-family: verdana;
`;

export const TextArea = styled.text`
    color: #FFFF;
    font-size: 54px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;
`;

export const ContainerAreaDivs = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
`;

export const AreaServices = styled.div`
    width: 300px;
    height: 250px;
    background-color: #FFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    border-radius: 20px;
`;

export const ContainerButtom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
`;

export const Buttom = styled.button`
    border: none;
    min-width: 10vw;
    height: 60px;
    border-radius: 100px;
    cursor: pointer;
    color: #663128;
    background-color: #F3CE5E;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0px 0px 5px 2px #F3CE5E;
`;

export const ImageItem = styled.img`
        width: 200px;
`;