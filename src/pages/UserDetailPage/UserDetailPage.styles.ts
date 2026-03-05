import styled from "styled-components";
import { colors, typography } from "../../styles/variables";

export const InfoSection = styled.div`
  margin: auto 0;
  text-align: left;
`
export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 16px;
  position: relative;
  gap: 13px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 16px;  
    right: 16px;
    height: 1px;
    background-color: ${colors.bgSecondary};
  }
  
  &:last-child::after {
    display: none;
  }
`

export const Icon = styled.span`
  font-size: 20px;
  color: ${colors.textTertiary};
  display: flex;
  align-items: center;
  justify-content: start;
`

export const InfoContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfoText = styled.span`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.lg}px;
  line-height: ${typography.lineHeight.md};
  color: ${colors.textPrimary};
`

export const AgeText = styled.span`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.md}px;
  line-height: ${typography.lineHeight.md};
  color: ${colors.textTertiary};
`