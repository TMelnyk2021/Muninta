import { NavLink } from 'react-router-dom'
import styles from './Menu.module.scss'
import { MdBorderColor } from 'react-icons/md'
import { MdOutlineQueryStats } from "react-icons/md";
import { MdBuild } from "react-icons/md";

function Menu() {

  return (
    <div className={styles.menu}>
      <div><NavLink to=""><MdBorderColor /></NavLink></div>
      <div><NavLink to="/stats"><MdOutlineQueryStats /></NavLink></div>
      <div><NavLink to="/settings"><MdBuild /></NavLink></div>
    </div>
  )

}

export default Menu
