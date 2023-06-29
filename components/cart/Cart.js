import Image from "next/image"
import { Button, Card, Table } from "react-bootstrap"
import { useSelector } from "react-redux"
import styles from "./Cart.module.css"
// import dataMockup from "./mock"

const CartProduct = () => {
  const productTitle = ["PRODUCT NAME", "PRICE", "QUANTITY", "TOTAL"]
  const cart = useSelector((state) => state.cart.cart)
  let total = 0
  return (
    <div style={{ paddingTop: "50px" }}>
      <Card className={styles.cart}>
        <Card.Body className={styles.cart_detail}>
          <p className={styles.title}>Cart</p>
          <Table responsive>
            <thead>
              <tr>
                {
                  productTitle.map((item,index)=> [
                    <th key={index} className={styles.header_title}>{item}</th>
                  ])
                }
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td
                    className={styles.box_img_name}
                  >
                    <Image
                      src={item.attributes.image_url}
                      alt="img"
                      width={40}
                      height={40}
                      objectFit={"cover"}
                    ></Image>
                      <span className={styles.cart_produt_name}>
                      {item.attributes.name}
                    </span>
                  </td>
                  <td className={styles.cart_product}>
                    {item.attributes.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                  </td>
                  <td className={styles.cart_product}>{item.quantity}</td>
                  <td className={[styles.cart_product]}>
                    ฿
                    {(item.attributes.price * item.quantity)
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="text-end">
            <span className={styles.subtotal}>
              Subtotal ({cart.length} Product):
            </span>
            &nbsp;&nbsp;&nbsp;
            <span className={styles.total}>
              {(() => {
                cart.map((item) => {
                  total += item.attributes.price * item.quantity
                })
                return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
              })()}
            </span>
          </p>
          <div style={{ marginTop: "15px", textAlign: "end" }}>
            <Button className={styles.btn_checkout} onClick={()=>(console.log(total))}>
              Proceed to checkout
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CartProduct
