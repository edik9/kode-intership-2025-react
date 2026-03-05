import styled from "styled-components";
import { colors, typography } from "../../styles/variables";

interface StyledProps {
  variant?: 'list' | 'detail';
}

export const Card = styled.div<StyledProps>`
  cursor: ${props => props.variant === 'list' ? 'pointer' : 'default'};
  padding: ${props => props.variant === 'detail' ? '20px' : '12px 16px'};
  display: flex;
  flex-direction: ${props => props.variant === 'detail' ? 'column' : 'row'};
  align-items: center;
  gap: ${props => props.variant === 'detail' ? '24px' : '12px'};
  transition: background-color 0.3s ease-in-out;
  background-color: ${props => props.variant === "detail" ? colors.bgSecondary : colors.bgPrimary};

  &:hover {
    background-color: ${colors.bgSecondary};
  }
`
export const Avatar = styled.img<StyledProps>`
  width: ${props => props.variant === 'detail' ? '120px' : '72px'};
  height: ${props => props.variant === 'detail' ? '120px' : '72px'};
  border-radius: 50%;
  object-fit: cover;
`

export const InfoContainer = styled.div<StyledProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  ${props => props.variant === 'detail' ? '12px' : '6px'}
`
export const NameContainer = styled.div<StyledProps>`
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: ${props => props.variant === 'detail' ? '12px' : '0px'};
`
export const Name = styled.span<StyledProps>`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${props => props.variant === 'detail' ? typography.fontWeight.bold : typography.fontWeight.semibold};
  font-size: ${props => props.variant === 'detail' ? typography.fontSize.xxxl : typography.fontSize.lg}px;
  line-height: ${props => props.variant === 'detail' ? typography.lineHeight.xxl : typography.lineHeight.lg};
  color: ${colors.textPrimary};
`
export const UserTag = styled.span<StyledProps>`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${props => props.variant === 'detail' ? typography.fontSize.xl : typography.fontSize.sm}px;
  line-height: ${props => props.variant === 'detail' ? typography.lineHeight.lg : typography.lineHeight.sm};
  color: ${colors.textTertiary};
`

export const Position = styled.div<StyledProps>`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  text-align: ${props => props.variant === 'detail' ? "center" : "start"};
  font-size: ${typography.fontSize.xs}px;
  line-height: ${typography.lineHeight.xs};
  color: ${colors.textSecondary};
`

export const BirthdayContainer = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.regular};
  font-size: ${typography.fontSize.sm}px;
  line-height: ${typography.lineHeight.sm};
  color: ${colors.textSecondary};
  min-width: 70px;
  text-align: right;
`