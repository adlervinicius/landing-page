//styles
import { 
    ContanerArea,
    TextTestymonials,
    AreaTestymonials,
    TextHeader,
    TextAll,
    ImageItem,
    AreaContainer,
    ContainerButtom,
    Buttom,
} from './TestymonialsStyles';

//images
import star from '../../Assets/star.png'

//main
export const TestymonialsPage = () => {
    const HandleTestymonials = () => {
        return (
            <>
                <AreaTestymonials>
                    <TextHeader>Kathryn Murphy</TextHeader>
                    <TextAll>
                        Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry. Lorem Ipsum has been the industrys 
                        standard dummy text ever since the 1500s, when an unknown 
                        printer took a galley of type and scrambled
                    </TextAll>
                    <ImageItem src={star} />
                </AreaTestymonials>
            </>
        )
    }

    return (
        <ContanerArea>
            <TextTestymonials>TESTYMONIALS</TextTestymonials>
            <AreaContainer>
                {HandleTestymonials()}
                {HandleTestymonials()}
                {HandleTestymonials()}
                {HandleTestymonials()}
            </AreaContainer>
            <ContainerButtom>
                <Buttom>Help Me</Buttom>
            </ContainerButtom>
        </ContanerArea>
    )
}

export default TestymonialsPage;