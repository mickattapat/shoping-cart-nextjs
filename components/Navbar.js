import Image from "next/image"
import Link from "next/link"
import { BagHappy } from "iconsax-react"
import { HambergerMenu } from "iconsax-react"
import Dropdown from "react-bootstrap/Dropdown"
import styles from "../styles/Layout.module.css"
import { useSelector } from "react-redux"

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart)

  const paht = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "New Product",
      path: "/",
    },
    {
      name: "Women",
      path: "/",
    },
    {
      name: "Men",
      path: "/",
    },
    {
      name: "Kid",
      path: "/",
    },
    {
      name: "Accessories",
      path: "/",
    },
  ]

  const routerList = paht.map((item, index) => {
    return (
      <li key={index}>
        <Link href={item.path}>{item.name}</Link>
      </li>
    )
  })

  return (
    <>
      <style type="text/css">
        {`
            .btn {
              padding: 0;
            }
            .btn-primary {
              background: #FF6F61 !important;
              border: none;
            }
            .dropdown-toggle::after {
                content: none;
            }
            .btn:focus, .btn:active:focus {
              box-shadow: none;
            }
        `}
      </style>
      <div className={styles.top_header}>
        <div className={styles.nav_header}>
          <Link href="/">
              {/* <Image
                className={styles.logo}
                src="/img/cob-logo.webp"
                alt="logo"
                width="77px"
                height="36px"
              ></Image> */}
              <h3 style={{color:"white",cursor:'pointer'}}>ATP SHOP</h3>
          </Link>
          <ul className={styles.nav_link}>{routerList}</ul>
          <Link href="/cart">
            <div className={styles.cart}>
              <BagHappy size="30" color="#FFFFFF" />
              <span>Cart</span>
              <div className={styles.total_item}>{ cart.length }</div>
            </div>
          </Link>
        </div>
        <div className={styles.nav_mobile}>
          <Link href="/">
            <div>
              {/* <Image
                className={styles.logo}
                src="/img/cob-logo.webp"
                alt="logo"
                width="77px"
                height="36px"
              ></Image> */}
              <h3 style={{color:"white"}}>ATP SHOP</h3>
            </div>
          </Link>
          <div className={styles.right_nav}>
          <Link href="/cart">
            <div className={styles.cart}>
              <BagHappy size="30" color="#FFFFFF" />
              <div className={styles.total_item_mobile}>{ cart.length }</div>
            </div>
          </Link>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <HambergerMenu size="30" color="#FFFFFF" />
            </Dropdown.Toggle>

            <Dropdown.Menu align="end">
              {paht.map((item, index) => {
                return (
                  <Dropdown.Item key={index}>
                    <Link href={item.path}>
                      <div>{item.name}</div>
                    </Link>
                  </Dropdown.Item>
                )
              })}
            </Dropdown.Menu>
          </Dropdown>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar
