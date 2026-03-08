import { useEffect, useState } from "react"
import { CloseIcon } from "../../assets/icons"
import * as Styles from "./SortModal.styles"
import { useTranslation } from "react-i18next"

interface SortMobileProps {
  onClose: () => void
  onSortChange: (type: 'alphabet' | 'birthday') => void
  currentSort: 'alphabet' | 'birthday'
}

export const SortModal: React.FC<SortMobileProps> = ({
  onClose, 
  onSortChange,
  currentSort
}) => {
  const {t} = useTranslation()
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  
  const handleClose = () => {
    setIsClosing(true)
    setTimeout(()=>{
      onClose()
    }, 100)
  }
  
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleSortChangeWithAnimation = (type: 'alphabet' | 'birthday') => {
    setIsClosing(true)
    setTimeout(() => {
      onSortChange(type) 
    }, 100) 
  }
  return (
    <Styles.Overlay onClick={handleOverlayClick} $isClosing={isClosing}>
      <Styles.Modal onClick={(e) => e.stopPropagation()} $isClosing={isClosing}>
        <Styles.DragHandle />
        <Styles.Title>{t('sortTitle')}</Styles.Title>
        <Styles.CloseButton onClick={handleClose}>
          <CloseIcon />
        </Styles.CloseButton>
        <Styles.OptionsContainer>
          <Styles.Option>
            <Styles.RadioInput
              type="radio"
              name="sort"
              value="alphabet"
              checked={currentSort === 'alphabet'}
              onChange={() => handleSortChangeWithAnimation('alphabet')}
            />
            <Styles.CustomRadio checked={currentSort === 'alphabet'} />
            <Styles.OptionText>{t('alphabet')}</Styles.OptionText>
          </Styles.Option>
          <Styles.Option>
            <Styles.RadioInput
              type="radio"
              name="sort"
              value="alphabet"
              checked={currentSort === 'birthday'}
              onChange={() => handleSortChangeWithAnimation('birthday')}
            />
            <Styles.CustomRadio checked={currentSort === 'birthday'}/>
            <Styles.OptionText>{t('birthday')}</Styles.OptionText>
          </Styles.Option>
        </Styles.OptionsContainer>
      </Styles.Modal>
    </Styles.Overlay>
  )
}