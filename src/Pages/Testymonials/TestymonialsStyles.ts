//styled-component
import styled from 'styled-components';

//images
import rectangle from '../../Assets/rectangle.png';

//styles
export const ContanerArea = styled.div`
    background-image: url(${rectangle});
    min-height: 100vh;
    display: grid;
    justify-content: center;
    aling-items: center;
    font-family: verdana;
`;
export const TextTestymonials = styled.text`
    color: #7C4032;
    font-size: 54px;
    font-weight: bold;
    text-align: center;
    margin-top: 5px;

    @media (max-width: 850px) {
        font-size: 45px;
    }
    
    @media (max-width: 400px) {
        font-size: 35px;
    }
`;

export const AreaTestymonials = styled.div`
    width: 30%;
    height: 150px;
    background-color: #fff;
    display: grid;
    padding: 20px 40px;
    border-radius: 30px;
    border: 1px solid #7C4032;
    margin: 10px;

    @media (max-width: 850px) {
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        padding-bottom: 10px;
    }

`

export const TextHeader = styled.text`
    color: #7C4032;
    font-weight: bold;
`;

export const TextAll = styled.text`
    font-size: 14px;
`;

export const ImageItem = styled.img`
    margin-top: 10px;
`;

export const AreaContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ContainerButtom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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