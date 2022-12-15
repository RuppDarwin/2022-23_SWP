import React from 'react'
import styles from './index.module.css'

export default function Card(props) {
  return (
    <div className={styles.general}>
      <img className={styles.img} src={props.link} alt="Profil_Picture"/>
      <div className={styles.caption}>
        <h4>{props.name}</h4>
        <p>{props.job}</p>
      </div>
    </div>
  )
}
