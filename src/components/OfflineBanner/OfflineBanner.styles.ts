import styled from "styled-components";
import { colors, typography } from "../../styles/variables";

export const Container = styled.div`
  background-color: #F44336;
  padding: 16px 24px;
  width: 100%;
`

export const Label = styled.p`
  font-size: 24px;
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.bold};
  line-height: ${typography.lineHeight.xxl};
  color: ${colors.bgPrimary};
  margin: 0 0 20px 0;
`

export const Text = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: 13px;
  line-height: ${typography.lineHeight.xs};
  color: ${colors.bgPrimary};
  margin: 0;
`