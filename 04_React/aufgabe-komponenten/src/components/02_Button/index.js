import React from 'react'
import styles from './index.module.css'

export default function Button(props) {
  return (
    <div 
      onclick={() => window.open(props.link, "_blank")}
      className={styles.general}
    >
      {props.btnText}
    </div>
  )
}


