import * as Styles from "./Container.styles"

interface ContainerProps {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({children}) =>{
  return <Styles.Container>{children}</Styles.Container>
}