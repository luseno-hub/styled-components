import styled from "styled-components";

export const Hero = styled.article`
  width: 100%;
  height: 47.5rem; //750px
  color: #fff;
  background-color: #667085;
  background-image: url(https://picsum.photos/1920/1080);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeroStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 8rem;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const HeroStatsItem = styled.div`
  flex: 1;
  width: calc(100% / 3);
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  gap: 1rem;
`;

export const HeroStatsItemH1 = styled.h1`
  font-size: 2.8125rem;
  font-weight: 700;
  line-height: 1;
  color: #f7fafc;
  margin-bottom: 1rem;
`;

export const HeroStatsItemText = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2;
  color: #f7fafc;
  margin-bottom: 2rem;
`;

export const HeroStatsItemLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.2;
  color: #f7fafc;
`;

export const HeroStatsItemStat = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1;
  color: #f7fafc;
  text-transform: uppercase;
`;
