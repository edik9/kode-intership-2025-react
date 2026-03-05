import styled from "styled-components";
import { colors, typography } from "../../styles/variables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  width: 100%;
  padding: 24px;
  text-align: center;
`

export const IconWrapper = styled.div`
  margin-bottom: 16px;
`

export const Title = styled.h3`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semibold};
  font-size: ${typography.fontSize.xl}px;
  line-height: ${typography.lineHeight.lg};
  color: ${colors.textPrimary};
  margin: 0 0 10px 0;
`

export const Description = styled.p`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.lg}px;
  line-height: ${typography.lineHeight.md};
  color: ${colors.textTertiary};
  margin: 0 0 10px 0;
  max-width: 280px;
`

export const RetryButton = styled.a`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semibold};
  font-size: ${typography.fontSize.lg}px;
  line-height: ${typography.lineHeight.md};
  color: ${colors.active};
  border: none;
  cursor: pointer;
  background-color: ${colors.bgPrimary};
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`