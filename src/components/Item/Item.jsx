import { Link } from 'react-router-dom'

import { MdNavigateNext } from 'react-icons/md'

import styles from './Item.module.scss'

function Item({data, ...props}) {

  const locale = "fi-FI"
  const collect_date = new Date(data.collect_date).toLocaleDateString(locale)


    return (

        // 8000 - kokonaismäärän (munat yhteensä S+M+L)
        // 11.02.2025 - keräyspäivämäärä
        // 200 - pieniä S
        // 7700 - keskikokoisia M
        // 100 - suuria L
        // 80 - kuinka moni on huono kokonaismäärästä

      // Alla vanha koodi kommentoituna:
      // <div className={styles.item_type}>Uusi kanala</div>
      // <div className={styles.item_amount}>8000 munaa yhteensä</div> 
      // <div className={styles.item_date}>11.2.2025</div> 
      // <div className={styles.item_amount1}>200 S-munaa</div> 
      // <div className={styles.item_amount1}>7700 M-munaa</div> 
      // <div className={styles.item_amount1}>100 L-munaa</div>
      // <div className={styles.item_amount2}>80 huonoa munaa</div>

      //    <div className={styles.item_average}>? munaa/kk</div>

      <div className={styles.item}>

      <div className={styles.item_data}>
        <div className={styles.item_type}>{data.type}</div>
        <div className={styles.item_amount}>{data.total_amount} munaa yhteensä </div>
        <div className={styles.item_date}>{collect_date}</div>
        <div className={styles.item_amount1}>{data.s_amount} S-pienet</div> 
        <div className={styles.item_amount1}>{data.m_amount} M-keskikokoiset</div> 
        <div className={styles.item_amount1}>{data.l_amount} L-isot</div> 
        <div className={styles.item_amount2}>{data.bad_amount} huonoa munaa</div>
      </div>

      <div className={styles.item_edit}>
        <Link to={"/edit/" + data.id}><MdNavigateNext /></Link>
      </div>


      </div>
    )
  }
  
  export default Item
  