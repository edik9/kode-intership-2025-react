import styled from "styled-components";
import { colors, typography } from "../../styles/variables";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px 16px;
`
export const Line = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${colors.contentDefaultSecondary};
  &:first-child {
    margin-right: 60px;
  }
  
  &:last-child {
    margin-left: 60px; 
`

export const Year = styled.span`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.md}px;
  line-height: ${typography.lineHeight.md};
  color: ${colors.contentDefaultSecondary};
  white-space: nowrap;
`