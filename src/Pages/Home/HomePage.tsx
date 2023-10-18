//styles
import {
    Container,
    ContainerTextHome,
    TextFirst,
    TextSecond,
    ButtonHelp,
    ButtonAbout,
    ContainerImage,
    ImageBear,
    ContainerButtom,
    TextFirstOne,
    AreaBrown,
    ContanerArea,
} from './HomeStyles';

//images
import bear from '../../Assets/bear.png';
import brown from '../../Assets/brown.png';
import browntop from '../../Assets/browntop.png';

//main
export const HomePage = () => {
    return (
        <ContanerArea>
            <AreaBrown src={browntop} alt='brown' />
            <Container>
                <ContainerTextHome>
                    <TextFirst>What the</TextFirst>
                    <TextFirstOne>Bear Bears</TextFirstOne>
                    <TextSecond>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy text ever since the
                    </TextSecond>
                    <ContainerButtom>
                        <ButtonHelp>Help Me</ButtonHelp>
                        <ButtonAbout>About us</ButtonAbout>
                    </ContainerButtom>
                </ContainerTextHome>
                <ContainerImage>
                    <ImageBear src={bear} alt='bear'/>
                </ContainerImage>
            </Container>
            <AreaBrown src={brown} alt='brown' />
        </ContanerArea>
    )
}

export default HomePage;