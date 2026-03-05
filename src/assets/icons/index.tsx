// Импортируем как URL
import searchIcon from '../find.svg'
import sortIcon from '../filter.svg'
import closeIcon from '../close.svg'
import starIcon from '../star.svg'
import phoneIcon from '../phone.svg'
import backIcon from '../back.svg'
import nloIcon from '../flying-saucer.svg'
import magnifyingGlassIcon from '../magnifying-glass.svg'
import gooseIcon from '../goose.svg'

export const SearchIcon = () => (
  <img src={searchIcon} alt="search" style={{ width: 20, height: 20,  }} />
)

export const SortIcon = () => (
  <img src={sortIcon} alt="sort" style={{ width: 20, height: 20 }} />
)

export const CloseIcon = () => (
  <img src={closeIcon} alt="back" style={{ width: 10, height: 10 }} />
)

export const StarIcon = () => (
  <img src={starIcon} alt="calendar" style={{ width: 20, height: 20 }} />
)

export const PhoneIcon = () => (
  <img src={phoneIcon} alt="phone" style={{ width: 20, height: 20 }} />
)

export const BackIcon = () => (
  <img src={backIcon} alt="back" style={{ width: 20, height: 20 }} />
)

export const NLOIcon = () => (
  <img src={nloIcon} alt="nlo" style={{ width: 56, height: 56 }} />
)

export const GlassIcon = () => (
  <img src={magnifyingGlassIcon} alt="glass" style={{ width: 56, height: 56 }} />
)

export const GooseIcon = () => (
  <img src={gooseIcon} alt="goose" style={{ width: 72, height: 72 }} />
)