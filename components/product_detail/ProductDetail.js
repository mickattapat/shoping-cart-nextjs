import styles from "./ProductDetail.module.css"
import Card from "react-bootstrap/Card"
import Image from "next/image"
import { BagTick, Star1 } from "iconsax-react"
import Button from "react-bootstrap/Button"
import { useDispatch, useSelector } from "react-redux"
import { setUpdateCart } from "../../store/cart"
import { useState } from "react"

const ProductDetail = (props) => {
  const { product } = props
  const dispatch = useDispatch()
  console.log(product);
  const checkCart = useSelector((state) => state.cart.cart)
  const oldQuantity = checkCart.filter((e) => {
    return e.id === product.attributes.id
  })
  const [quantity, setQuantity] = useState(
    oldQuantity[0] ? oldQuantity[0].quantity : 0
  )

  const decrementProduct = (value) => {
    if (quantity > 0) {
      setQuantity(value - 1)
    }
  }
  const incrementProduct = (value) => {
    setQuantity(value + 1)
  }

  const addToCart = () => {
    const data = {
      id: product.attributes.id,
      attributes: {
        name: product.attributes.name,
        image_url: product.attributes.image_url,
        description: product.attributes.description,
        createdAt: product.attributes.createdAt,
        updatedAt: product.attributes.updatedAt,
        publishedAt: product.attributes.publishedAt,
        price: product.attributes.price,
        review: {
          number: product.attributes.review.number,
          rating: product.attributes.review.rating,
        },
      },
      quantity: quantity,
    }
    dispatch(setUpdateCart(data))
  }

  const productDetail = () => {
    if (product) {
      return (
        <div style={{ paddingTop: "50px" }}>
          <Card className={styles.product}>
            <Card.Body className={styles.product_detail}>
              <div className={styles.product_img}>
                <Image
                  src={product.attributes.image_url}
                  alt="preview"
                  width={400}
                  height={400}
                  objectFit={"cover"}
                />
              </div>
              <div style={{ paddingLeft: "24px" }}>
                <div className={styles.product_name}>
                  <p>{product.attributes.name}</p>
                </div>
                <p>
                  {(() => {
                    let rating = product.attributes.review.rating
                    let star = []
                    for (let i = 0; i < 5; i++) {
                      if (rating > 0) {
                        rating--
                        star.push(
                          <Star1
                            key={i}
                            size="15"
                            color="#FF8A65"
                            variant="Bold"
                          />
                        )
                      } else {
                        star.push(<Star1 key={i} size="15" color="#FF8A65" />)
                      }
                    }
                    return star
                  })()}
                  <span style={{ paddingLeft: "14px" }}>(10 reviews)</span>
                </p>
                <p className={styles.product_description}>
                  {product.attributes.description}
                </p>
                <p className={styles.product_price_title}>Price</p>
                <p>
                  <span className={styles.product_price}>
                    {product.attributes.price
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                  </span>
                  <span className={styles.product_normal_price}>
                    ฿12,000.00
                  </span>
                </p>
                <div className={styles.quantitiy_row}>
                  <span>Quantitiy:</span>
                  <div className={styles.quantitiy_border}>
                    <div
                      className={styles.quantitiy_item}
                      onClick={() => decrementProduct(quantity)}
                    >
                      -
                    </div>
                    <div className={styles.quantitiy_num}>{quantity}</div>
                    <div
                      className={styles.quantitiy_item}
                      onClick={() => incrementProduct(quantity)}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "40px" }}>
                  <Button
                    className={styles.btn_addtocart}
                    onClick={() => addToCart()}
                  >
                    <BagTick size="20" color="#FFFFFF" variant="Outline"/> &nbsp;&nbsp;
                    ADD TO CART
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      )
    } else {
      return (
        <div className={styles.msg_error_show}>
          <p>an error occurred</p>
        </div>
      )
    }
  }

  return <>{productDetail()}</>
}

export default ProductDetail
