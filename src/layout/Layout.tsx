import styles from './Layout.module.scss'
import Menu from "@/layout/components/Menu/Menu"
import Header from "@/layout/components/Header/Header"
import { Outlet } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { headerStore } from "@/store"

function Layout() {
  return (
    <>
      <div className={styles.menu}>
        <Menu />
      </div>
      <div className={styles.header}>
        <Header title={headerStore.title} />
      </div>
      <div className={styles.page}>
        <Outlet />
      </div>
    </>
  )
}

export default observer(Layout)
