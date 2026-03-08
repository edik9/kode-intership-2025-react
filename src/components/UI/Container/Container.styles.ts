import styled from "styled-components";
import { media } from "../../../styles/variables";

export const Container = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 430px; 
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  ${media.tablet} {        
    max-width: 768px;      
  }

  ${media.desktop} {
    max-width: 1280px;
  }
`