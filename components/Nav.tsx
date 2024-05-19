import { GithubIcon } from './icons'
import styles from '../styles/Nav.module.scss'
import { memo } from 'react'

export const Nav = memo(function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.appName}>Typeswift</div>
      <a
        href="https://github.com/Kshitij8241"
        target="_blank"
        rel="noreferrer"
        className={styles.github}
      >
        {GithubIcon}
      </a>
    </nav>
  )
})
