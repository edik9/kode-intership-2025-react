import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 12px;
  margin-bottom: 24px;
`;

interface LangButtonProps {
  $active: boolean;
}

export const LangButton = styled.button<LangButtonProps>`
  background: none;
  border: none;
  font-size: 14px;
  font-weight: ${props => props.$active ? 600 : 400};
  color: ${({ theme, $active }) => 
    $active ? theme.colors.active : theme.colors.textTertiary};
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.active};
  }
`;