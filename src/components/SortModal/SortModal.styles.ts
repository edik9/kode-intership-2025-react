import styled, { keyframes } from "styled-components";
import { breakpoints, typography } from "../../styles/variables";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`

const fadeInOverlay = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const slideUp = keyframes`
  from {
    transform: translateX(-50%) translateY(100%);
  }
  to {
    transform: translateX(-50%) translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
`;

const fadeOutOverlay = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateX(-50%) translateY(0);
  }
  to {
    transform: translateX(-50%) translateY(100%);
  }
`;

interface ModalProps {
  $isClosing?: boolean;
}

export const Overlay = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({theme}) => theme.colors.bgTransparent};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${props => props.$isClosing ? fadeOutOverlay : fadeInOverlay} 0.2s ease;

  @media (max-width: ${breakpoints.mobile}) {
    align-items: flex-end;  
  }
`

export const Modal = styled.div<ModalProps>`
  width: 375px;
  height: 192px;
  background-color: ${({theme}) => theme.colors.bgPrimary};
  border-radius: 20px;
  padding: 24px;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  animation: ${props => props.$isClosing ? fadeOut : fadeIn} 0.3s ease;

  @media (max-width: 440px) {
    width: 359px;
    height: auto;
    min-height: 214px;        
    max-height: 80vh;
    padding: 16px;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 20px 20px 0 0;
    margin: 0;
    overflow-y: auto;
    animation: ${props => props.$isClosing ? slideDown : slideUp} 0.3s ease-out;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 23px;
  width: 24px;
  height: 24px;
  padding: 7px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.bgSecondary};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: background-color 0.4s ease-in-out;

  img {
    width: 10px;
    height: 10px;
  }

  &:hover {
    background-color: ${({theme}) => theme.colors.contentDefaultSecondary};
    
    img {
      filter: invert(11%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(97%) contrast(103%); /* черный */
    }
  }

  @media (max-width: 430px) {
    display: none;  
  }
`
export const DragHandle = styled.div`
  display: none; 

  @media (max-width: 430px) {
    display: block;
    width: 56px;
    height: 4px;
    background-color: #C3C3C6;
    border-radius: 2px;
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
    cursor: grab;
    
    &:active {
      cursor: grabbing;
    }
  }
`

export const Title = styled.div`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.semibold};
  font-size: ${typography.fontSize.xxl}px;
  line-height: ${typography.lineHeight.xl};
  color: ${({theme}) => theme.colors.textPrimary};
  text-align: center;
  margin: 0 0 24px 0;

  @media (max-width: 430px) {
    margin-top: 12px;  
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Option = styled.label`
  display: flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  width: fit-content;
`

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`

export const CustomRadio = styled.span<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.checked ? props.theme.colors.active : props.theme.colors.active};
  background-color: ${props => props.checked ? props.theme.colors.active : 'transparent'};
  position: relative;
  transition: all 0.2s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: white;
    display: ${props => props.checked ? 'block' : 'none'};
  }
`

export const OptionText = styled.span`
  font-family: ${typography.fontFamily.primary};
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.lg}px;
  line-height: ${typography.lineHeight.md};
  color: ${({theme}) => theme.colors.textPrimary};
`