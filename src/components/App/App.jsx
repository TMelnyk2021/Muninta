import { ButtonContainer } from '../../shared/buttons'
import { FloatingButton } from '../../shared/buttons'
import Content from '../Content'
import styles from './App.module.scss'
import Item from '../Item'
import Header from '../Header'
import Menu from '../Menu'



function App() {

  return (
    <>
      <ButtonContainer>
      <div className={styles.app}>
        <Header />
        <Content>
          <Item />
          <Item />
          <Item />
          <Item />
          <FloatingButton secondary>+</FloatingButton>
        </Content>
        <Menu />
      </div>
      </ButtonContainer>
    </>
  )


}

export default App
