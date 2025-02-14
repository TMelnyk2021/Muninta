import { MdNavigateNext } from 'react-icons/md'

import styles from './Item.module.scss'

function Item() {

    return (

        // 8000 - kokonaismäärän (munat yhteensä S+M+L)
        // 11.02.2025 - keräyspäivämäärä
        // 200 - pieniä S
        // 7700 - keskikokoisia M
        // 100 - suuria L
        // 80 - kuinka moni on huono kokonaismäärästä
    <div className={styles.item}>
      <div className={styles.item_data}>
      <div className={styles.item_type}>Uusi kanala</div>
      <div className={styles.item_amount}>8000 munaa yhteensä</div> 
      <div className={styles.item_date}>11.2.2025</div> 
      <div className={styles.item_amount1}>200 S-munaa</div> 
      <div className={styles.item_amount1}>7700 M-munaa</div> 
      <div className={styles.item_amount1}>100 L-munaa</div>
      <div className={styles.item_amount2}>80 huonoa munaa</div>
        </div>
        <div className={styles.item_edit}>
        <MdNavigateNext />
      </div>
      </div>
    )
  }
  
  export default Item
  