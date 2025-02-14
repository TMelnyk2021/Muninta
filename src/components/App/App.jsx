import Button from '../../shared/buttons'
import Content from '../Content'
import styles from './App.module.scss'
import Item from '../Item'
import Header from '../Header'
import Menu from '../Menu'



function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Content>
          <Item />
          <Item />
          <Item />
          <Item />
          <Button primary>LISÄÄ UUSI RIVI</Button>
        </Content>     
        <Menu />
      </div>
    </>
  )



}

export default App
