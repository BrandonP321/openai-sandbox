import React from 'react'
import styles from "./MainHeader.module.scss";

type MainHeaderProps = {}

export default function MainHeader({}: MainHeaderProps) {
  return (
    <header className={styles.header}></header>
  )
}