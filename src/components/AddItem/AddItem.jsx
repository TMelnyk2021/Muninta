import ItemForm from '../ItemForm/ItemForm'
import styles from './AddItem.module.scss'

function AppItem(props) {

  return (
    <div className={styles.additem}>
      <h2>Uuden merkinnän lisääminen
      <ItemForm />
      </h2>
    </div> 
  )

}

export default AppItem
