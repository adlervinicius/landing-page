//styles
import { 
    Container,
    FooterArea,
    AreaContact,
    InputArea,
    AreaContactAcess,
    AreaIcon,
    IconItem,
    TextIcon,
    ButtomSend,
    AreaButtom,
} from './FooterStyles';

//image
import location from '../../Assets/location.png'
import email from '../../Assets/email.png'
import tell from '../../Assets/tell.png'

//main
export const FooterPage = () => {

    const ContactArea = (image: any, text: string) => {
        return(
            <>
                <AreaIcon>
                    <IconItem src={image} />
                    <TextIcon>{text}</TextIcon>
                </AreaIcon>
            </>
        )
    }

    return (
        <>
            <Container>
                <AreaContact>
                    <InputArea placeholder="Digite seu nome" />
                    <InputArea placeholder="Digite seu e-mail" />
                    <InputArea placeholder="Digite seu numero de telefone" />
                    <AreaButtom>
                        <ButtomSend>To send</ButtomSend>
                    </AreaButtom>
                </AreaContact>
                <AreaContactAcess>
                    {ContactArea(email, 'teste@gmail.com')}
                    {ContactArea(tell, '(00) 0000-0000')}
                    {ContactArea(location, 'Rua K, 886')}
                </AreaContactAcess>      
            </Container>
            <FooterArea>Copyright © 2023 </FooterArea>
        </>

    )
}

export default FooterPage;