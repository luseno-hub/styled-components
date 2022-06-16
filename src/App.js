import { GlobalStyle } from "./components/styles/GlobalStyle.style";
import HeroSection from "./components/HeroSection";
import { Button } from "./components/styles/Button.style";
import { Container } from "./components/styles/Container.style";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <Container>
        <h1>Brand</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Pages</li>
            <li>Contact Us</li>
          </ul>
        </nav>
        <Button>Seventy Seven</Button>
      </Container>
    </>
  );
}

export default App;
