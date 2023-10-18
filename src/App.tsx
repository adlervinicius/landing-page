//pages
import { HomePage } from './Pages/Home/HomePage';
import { Contactus } from './Pages/Contactus/Contactus';
import { TestymonialsPage } from './Pages/Testymonials/Testymonials';
import { FooterPage } from './Pages/Footer/Footer';

//styles
import { Container } from './App.styles';

//main
function App() {
  return (
    <Container >
      <HomePage />
      <Contactus />
      <TestymonialsPage />
      <FooterPage />
    </Container>
  );
}

export default App;
