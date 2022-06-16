import React from "react";
import { Container } from "./styles/Container.style";
import { Button } from "./styles/Button.style";
import {
  Hero,
  HeroStats,
  HeroStatsItem,
  HeroStatsItemH1,
  HeroStatsItemText,
} from "./styles/Hero.style";
import { FlexRow } from "./styles/FlexRow.style";
import HeroStatsItemLabelEl from "./HeroStatsItemLabelEl";
import HeroStatsItemStatEl from "./HeroStatsItemStatEl";

function HeroSection() {
  return (
    <Hero>
      <HeroStatsItemH1>Earn Money Freelancing</HeroStatsItemH1>
      <HeroStatsItemText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
      </HeroStatsItemText>
      <Button>Become a seller</Button>
      <HeroStats>
        <Container>
          <FlexRow>
            <HeroStatsItem>
              <HeroStatsItemLabelEl content="A gig is won every" />
              <HeroStatsItemStatEl content="10 Min" />
            </HeroStatsItem>
            <HeroStatsItem>
              <HeroStatsItemLabelEl content="Transactions" />
              <HeroStatsItemStatEl content="6.4m+" />
            </HeroStatsItem>
            <HeroStatsItem>
              <HeroStatsItemLabelEl content="Price Range" />
              <HeroStatsItemStatEl content="$5k - $12k" />
            </HeroStatsItem>
          </FlexRow>
        </Container>
      </HeroStats>
    </Hero>
  );
}

export default HeroSection;
