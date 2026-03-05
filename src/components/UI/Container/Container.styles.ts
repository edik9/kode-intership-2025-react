import styled from "styled-components";
import { media } from "../../../styles/variables";

export const Container = styled.div`
  width: 100%;
  max-width: 375px; 
  margin: 0 auto;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgPrimary};

  ${media.desktop} {
    max-width: 1024px;
  }
`