import React from 'react'
import Button from "../Button/Button"
import styles from "./Navbar.module.css"
import Logo from '../Logo/logo'
import { Search } from '../Search/Search'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <Search/>
      <Button child="Give Feedback"/>
    </nav>
  )
}
