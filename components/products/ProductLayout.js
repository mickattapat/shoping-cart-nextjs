import styles from "./ProductLayout.module.css"
import { Star1 } from "iconsax-react"

import Image from "next/image"

import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Link from "next/link"
import { Row } from "react-bootstrap"

const ProductLayout = (props) => {
  const { dataProduct, layout } = props
  var gridLayout = []
  var listLayout = []

  // column layout show
  try {
    gridLayout = dataProduct.map((item) => {
      return (
        <Col key={item.attributes.id} xs={12} md={6} xl={3}>
          <Link href={`/product_detail/${item.attributes.id}`}>
            <Card className={styles.product_item}>
              <Card.Img
                variant="top"
                style={{ height: "250px", objectFit: "cover" }}
                src={item.attributes.image_url}
              />
              <Card.Body>
                <div className={styles.card_item}>
                  <div className={styles.logo_item}>
                    <Image
                      src={item.attributes.brand.data.attributes.logo_url}
                      alt=""
                      width={40}
                      height={40}
                      objectFit={"cover"}
                    ></Image>
                  </div>
                  <div className={styles.title_item}>
                    <span>{item.attributes.name}</span>
                  </div>
                </div>

                <div className={styles.detail_item}>
                  <div className={styles.price_text}>
                    <span>Price</span>
                  </div>
                  <div className={styles.price_text}>
                    <span>
                      Reviews ({item.attributes.review.number} reviews)
                    </span>
                  </div>
                </div>

                <div className={styles.detail_item}>
                  <div className={styles.price_text}>
                    <span>
                      {item.attributes.price
                        .toFixed(2)
                        .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                    </span>
                  </div>
                  <div className={styles.review_item}>
                    {(() => {
                      let rating = item.attributes.review.rating
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
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      )
    })
  } catch (error) {
    console.log(error)
  }
  // list show
  listLayout = dataProduct.map((item, index) => {
    return (
      <Link key={item.attributes.id} href={`/product_detail/${item.attributes.id}`}>
        <Card className={styles.list_product}>
          <Card.Body className={styles.list_product_card}>
            <div className={styles.list_product_img}>
              <Image
                src={item.attributes.image_url}
                alt=""
                width={60}
                height={60}
                objectFit={"cover"}
              ></Image>
            </div>
            <div className={styles.list_product_detail}>
              <p className={styles.list_product_name}>{item.attributes.name}</p>
              <p className={styles.list_product_description}>
                {item.attributes.description}
              </p>
            </div>
            <div className={styles.list_product_price}>
              <p className={styles.list_price}>
                {item.attributes.price
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
              </p>
              <p className={styles.list_product_rating}>
                {(() => {
                  let rating = item.attributes.review.rating
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
              </p>
              <p className={styles.list_product_review}>
                Reviews ({item.attributes.review.number} reviews)
              </p>
            </div>
          </Card.Body>
        </Card>
      </Link>
    )
  })

  const showProduct = () => {
    if (layout === "grid") {
      if (gridLayout.length > 0) {
        return <Row>{gridLayout}</Row>
      } else {
        return <div className={styles.msg_error_show}><p>No data ..</p></div>
      }
    } else {
      if (listLayout.length > 0) {
        return listLayout
      } else {
        return <div className={styles.msg_error_show}><p>No data ..</p></div>
      }
    }
  }

  return <>{showProduct()}</>
}

export default ProductLayout
