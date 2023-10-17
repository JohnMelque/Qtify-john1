import React from 'react'
import styles from "./Search.module.css"
import { ReactComponent as SeachIcon } from '../../assest/search-icon.svg'

export const Search = () => {
  return (
    <form  className={styles.wrapped}>
      <input type="text"  className={styles.search} placeholder='Search a album of your choice' />
      <button className={styles.searchbtn}>
      <SeachIcon/>
      </button>
   </form>
  )
}
