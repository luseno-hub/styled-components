import { GlobalStyle } from "./components/styles/GlobalStyle.style";
import HeroSection from "./components/HeroSection";
import { Button } from "./components/styles/Button.style";
import { Container } from "./components/styles/Container.style";
import ButtonTemplate from "./components/Buttons/ButtonTemplate";
import PrimaryButton from "./components/Buttons/PrimaryButton";
// import { MenuLabel, Icon } from "./components/MenuLabel/MenuLabel.styled";
import MenuToggle from "./components/MenuLabel/MenuLabel";
import { StyledTooltip } from "./components/MouseTracker/MouseTracker.styled";

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
            <StyledTooltip>ToolTip Goes Here</StyledTooltip>
            <li>Contact Us</li>
          </ul>
        </nav>
        <Button>Seventy Seven</Button>
        <ButtonTemplate>Template</ButtonTemplate>
        <PrimaryButton>Primary</PrimaryButton>
      </Container>

      {/* <MenuLabel htmlFor="navi-toggle">
        <Icon>&nbsp;</Icon>
      </MenuLabel> */}
      <MenuToggle />
      <StyledTooltip>ToolTip Goes Here</StyledTooltip>
    </>
  );
}

export default App;
