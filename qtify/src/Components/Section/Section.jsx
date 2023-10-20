import React, { useState } from 'react'
import styles from './Section.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../../Components/Card/Card';
import Carousal from '../Carousal/Carousal';

const Section = ({ data, title, type }) => {
  
  const [carousalToggle, setCarousalToggle] = useState(true);

  const handelCarousal=() => {
    setCarousalToggle(!carousalToggle);
  }

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggletext} onClick={handelCarousal}>
          {!carousalToggle?"Collapse All": "Show all"}
        </h4>
      </div>
      {data.length === 0 ? (<CircularProgress />) : (
        <div className={styles.cardwWrapper}>
          {
            !carousalToggle ? (
              <div className={styles.wrapper}>
                {data.map(item => (
                  <Card data={ item} type={type} />
                 
                ))}
              </div>
            ) :
              <Carousal data={data} reactComponent={(data) =>
                <Card data={data} type={type} />
              } />
            
          }
        </div>
     )}

    </div>
  )
}

export default Section