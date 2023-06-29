import Footer from "./Footer"
import Navbar from "./Navbar"
import styles from "../styles/Layout.module.css"


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.content}>
       { children }
      </div>
      <Footer />
    </>
  )
}

export default Layout
