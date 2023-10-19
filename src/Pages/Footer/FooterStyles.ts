//styled-component
import styled from 'styled-components';

//styles
export const Container = styled.div`
    background-color: #fff;
    min-height: 50vh;
    font-family: verdana;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    @media (max-width: 600px) {
        display: grid;
    }
`;

export const FooterArea = styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #55352D;
    color: #FFFF;
    text-align: center;
    font-family: verdana;
`;

export const InputArea = styled.input`
    background-color: #E5AF99;
    border: none;
    border-radius: 20px;
    margin: 10px;
    width: 374px;
    height: 50px;
    font-size: 16px;
    padding-left: 12px;

    @media (max-width: 600px) {
            width: 300px;
    }
`;

export const AreaContact = styled.div`
    display: grid;
    font-family: verdana;
`;

export const AreaContactAcess = styled.div`
    display: grid;
    justify-content: space-around;
    align-items: center;
`;

export const AreaIcon = styled.div`
    display: flex;
    align-items: center;
`;

export const IconItem = styled.img`
    width: 25px;
`;

export const TextIcon = styled.text`
    padding: 10px;
    font-size: 16px;
`;

export const ButtomSend = styled.button`
    width: 168px;
    height: 56px;
    border: 3px solid #7C4032;
    border-radius: 50px;
    background-color: #FFFF;
    font-size: 18px;
    margin-top: 10px;
`;

export const AreaButtom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;