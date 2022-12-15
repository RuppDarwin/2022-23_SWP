import React from 'react'
import styles from './index.module.css'

export default function Liste(props) {
  return (
    <div className={styles.general}>
        <p className={styles.paragraph}>{props.textTop}</p>
        <p className={styles.paragraph}>{props.textMid}</p>
        <p className={styles.paragraph}>{props.textBot}</p>
    </div>
  )
}
