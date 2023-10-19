//styled-components
import styled from 'styled-components';

//images
import rectangle from '../../Assets/rectangle.png';

//styles
export const ContanerArea = styled.div`
    background-image: url(${rectangle});
    display: grid;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const ContainerTextHome = styled.div`
    display: grid;
    font-family: verdana;
    width: 40%;
`;

export const TextFirst = styled.text`
    color: #663128;
    font-size: 54px;
    font-weight: bold;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 45px;
    }
`;

export const TextSecond = styled.text`
    color: #663128;
    text-align: left;
    margin-top: 20px;
    font-size: 20px;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const ButtonHelp = styled.button`
    border: none;
    min-width: 10vw;
    height: 60px;
    border-radius: 100px;
    cursor: pointer;
    color: #663128;
    background-color: #F3CE5E;
    font-weight: bold;
    font-size: 18px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ButtonAbout = styled.button`
    border: none;
    min-width: 10vw;
    height: 60px;
    border-radius: 100px;
    cursor: pointer;
    background-color: #F3CE5E;
    color: #FFFF;
    font-weight: bold;
    font-size: 18px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ImageBear = styled.img`
    max-width: 26vw;
`;

export const ContainerButtom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
`;

export const TextFirstOne = styled.text`
    color: #663128;
    letter-spacing: 5px;
    font-size: 24px;
    text-align: center;
`;

export const AreaBrown = styled.img`
    width: 100%;
    height: 100%;
`;

export const ContainerImage = styled.div``;