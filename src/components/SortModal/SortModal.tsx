import { useEffect } from "react"
import { CloseIcon } from "../../assets/icons"
import * as Styles from "./SortModal.styles"

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

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <Styles.Overlay onClick={handleOverlayClick}>
      <Styles.Modal onClick={(e) => e.stopPropagation()}>
        <Styles.DragHandle />
        <Styles.Title>Сортировка</Styles.Title>
        <Styles.CloseButton onClick={onClose}>
          <CloseIcon />
        </Styles.CloseButton>
        <Styles.OptionsContainer>
          <Styles.Option>
            <Styles.RadioInput
              type="radio"
              name="sort"
              value="alphabet"
              checked={currentSort === 'alphabet'}
              onChange={() => onSortChange('alphabet')}
            />
            <Styles.CustomRadio checked={currentSort === 'alphabet'} />
            <Styles.OptionText>По алфавиту</Styles.OptionText>
          </Styles.Option>
          <Styles.Option>
            <Styles.RadioInput
              type="radio"
              name="sort"
              value="alphabet"
              checked={currentSort === 'birthday'}
              onChange={() => onSortChange('birthday')}
            />
            <Styles.CustomRadio checked={currentSort === 'birthday'}/>
            <Styles.OptionText>По дню рождения</Styles.OptionText>
          </Styles.Option>
        </Styles.OptionsContainer>
      </Styles.Modal>
    </Styles.Overlay>
  )
}