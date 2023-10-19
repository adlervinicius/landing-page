//styles
import { 
    Container,
    TextArea,
    ContainerAreaDivs,
    AreaServices,
    ContainerButtom,
    Buttom,
    ImageItem,
} from './ContactusStyles';

//imagens
import image1 from '../../Assets/image1.png';
import image2 from '../../Assets/image2.png';
import image3 from '../../Assets/image3.png';
import image4 from '../../Assets/image4.png';
import image5 from '../../Assets/image5.png';
import image6 from '../../Assets/image6.png';
import image7 from '../../Assets/image7.png';
import image8 from '../../Assets/image8.png'; 

//main
export const Contactus = () => {

    const HandleServices = (image: any) => {
        return (
            <>
                <AreaServices>
                    <ImageItem src={image} />
                </AreaServices>
            </>
        )
    }

    return (
        <Container>
            <TextArea>SERVICES</TextArea>
            <ContainerAreaDivs>
                {HandleServices(image1)}
                {HandleServices(image2)}
                {HandleServices(image3)}
                {HandleServices(image4)}
                {HandleServices(image5)}
                {HandleServices(image6)}
                {HandleServices(image7)}
                {HandleServices(image8)}
            </ContainerAreaDivs>
            <ContainerButtom>
                <Buttom>Help Me</Buttom>
            </ContainerButtom>
        </Container>
    )
}

export default Contactus;