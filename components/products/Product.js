import styles from "./Product.module.css"
import { Element3, RowVertical } from "iconsax-react"

import { useState } from "react"
import { useEffect } from "react"
import ProductLayout from "./ProductLayout"
import { Spinner } from "react-bootstrap"
import { product } from "../../model/mock"

const ProDuct = () => {
  const [dataProduct, setDataProduct] = useState([])
  const [layout, setLayout] = useState("grid")
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState("")

  useEffect(() => {
    getResponse()
  }, [])
  //  api
  const getResponse = () => {
    setIsLoading(true)
    setDataProduct(product)
    setIsLoading(false)
  }

  const changeLayout = (value) => {
    getResponse()
    if (value === "grid") {
      setLayout(value)
    } else {
      setLayout(value)
    }
  }

  return (
    <>
      <div className={styles.view_product}>
        <div className={styles.count_product}>Products({dataProduct.length})</div>
        <div className={styles.view_type}>
          <button
            onClick={() => changeLayout("grid")}
            className={
              layout == "grid"
                ? styles.column_view_active
                : styles.column_view
            }
          >
            <Element3 size="22" color="#292D32" />
          </button>
          <button
            onClick={() => changeLayout("list")}
            className={
              layout == "list" ? styles.row_view_active : styles.row_view
            }
          >
            <RowVertical size="22" color="#292D32" />
          </button>
        </div>
      </div>
      <div style={{ marginTop: "24px", marginBottom: "24px" }}>
        {(() => {
          if (isLoading) {
            return (
              <div className={styles.msg_error_show}>
                <Spinner animation="border" />
              </div>
            )
          } else {
            if (dataProduct.length > 0) {
              return <ProductLayout dataProduct={dataProduct} layout={layout} />
            } else {
              return <div className={styles.msg_error_show}>{err}</div>
            }
          }
        })()}
      </div>
    </>
  )
}

export default ProDuct
