import styles from './Menu.module.scss'
import { MdBorderColor } from 'react-icons/md'
import { MdOutlineQueryStats } from "react-icons/md";
import { MdBuild } from "react-icons/md";

function Menu() {

  return (
    <div className={styles.menu}>
      <div><MdBorderColor /></div>
      <div><MdOutlineQueryStats /></div>
      <div><MdBuild /></div>
    </div>
  )

}

export default Menu
