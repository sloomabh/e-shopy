import { useState, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useLocation, useNavigate } from "react-router-dom"

import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import ProductCard from "../../components/ProductCard/ProductCard"
import ReactStars from "react-rating-stars-component"
import "./singleproduct-style.css"
import ReactImageZoom from "react-image-zoom"
import Color from "../../components/Color/Color"
import { TbGitCompare } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"
import Container from "../../components/Container"
import {
  addRating,
  getAProduct,
  getAllProducts,
} from "../../features/products/productSlice"
import { toast } from "react-toastify"
import { addProdToCart, getUserCart } from "../../features/user/userSlice"

//import { Link } from "react-router-dom"
const SingleProduct = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [color, setColor] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [alreadyAdded, setAlreadyAdded] = useState(false)
  const [popularProduct, setpopularProduct] = useState([])

  const location = useLocation()
  const getProductId = location.pathname.split("/")[2]
  const productState = useAppSelector((state) => state.product.product)
  //const cartState = useAppSelector((state) => state.auth.cartProducts)
  const cartState = useAppSelector((state) => state.auth.cartProducts)

  //const totalRatings = productState?.totalrating
  //console.log(totalRatings)
  //console.log(quantity)
  //console.log(cartState)
  // console.log(productState)
  // console.log(getProductId)

  useEffect(() => {
    getAproductFromDb()
    getUserCartFromDb()
    dispatch(getAllProducts())
  }, [])

  const getAproductFromDb = () => {
    dispatch(getAProduct(getProductId))
  }
  const getUserCartFromDb = () => {
    dispatch(getUserCart())
  }

  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true)
      }
    }
  }, [])

  const uploadCart = () => {
    if (color === null) {
      toast.error("Please choose Color")
      return false
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        }),
      )
      navigate("/cart")
      /*
      alert(
        JSON.stringify({
          productId: productState?._id,
          quantity,
          color,
          price: productState?.price,
        }),
      )*/
    }
  }

  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/423fa398cf546b48ce99e31d384ea92a.jpg?imageView2/2/w/500/q/60/format/webp",
  }

  const [orderedProduct, setorderdProduct] = useState<Boolean>(true)
  const copyToClipboard = (text: string) => {
    //  console.log("text", text)
    var textField = document.createElement("textarea")
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand("copy")
    textField.remove()
  }

  useEffect(() => {
    let data = []
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index]
      if (element.tags === "popular") {
        data.push(element)
      }
      setpopularProduct(data)
    }
  }, [productState])

  // console.log(popularProduct)

  const [star, setStar] = useState(null)
  const [comment, setComment] = useState(null)

  const addRatingToProduct = () => {
    if (star === null) {
      toast.error("Please add star rating")
      return false
      console.log("add start")
    } else if (comment === null) {
      toast.error("Please write a review about the product")
      console.log("add comment")
      return false
    } else {
      dispatch(
        addRating({ star: star, comment: comment, prodId: getProductId }),
      )
      setTimeout(() => {
        getAproductFromDb()
      }, 100)
    }
    return false
  }

  return (
    <>
      <Meta title={"Product name "} />
      <BreadCrumb title={productState?.title} />
      <Container classI="main-product-wrapper py-5 home-wrapper-2 ">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              {productState?.images &&
                productState?.images.map((item, index) => (
                  <div key={index}>
                    <img src={item?.url} alt="watch" className="img-fluid" />
                  </div>
                ))}
            </div>
          </div>

          <div className="col-6 bg-white">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ {productState?.price}</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={2}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border bg-white text-dark border-decondary">
                      S
                    </span>
                    <span className="badge border bg-white text-dark border-decondary">
                      M
                    </span>
                    <span className="badge border bg-white text-dark border-decondary">
                      L
                    </span>
                    <span className="badge border bg-white text-dark border-decondary">
                      XL
                    </span>
                  </div>
                </div>
                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10  flex-column  mt-2 mb-3">
                      <h3 className="product-heading">Color :</h3>
                      <Color
                        colorData={productState?.color}
                        setColor={setColor}
                      />
                    </div>
                  </>
                )}
                <div className="d-flex gap-15 flex-row  align-items-center mt-2 mb-3">
                  {alreadyAdded === false && (
                    <>
                      {" "}
                      <h3 className="product-heading ">Quantity :</h3>
                      <div className="">
                        <input
                          type="number"
                          name="number"
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "70px" }}
                          defaultValue={1}
                          id=""
                          onChange={(e) => {
                            setQuantity(e.target.value)
                          }}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "ms-5" +
                          "d-flex  justify-content-center align-items-center gap-30 ms-5"
                    }
                  >
                    <button
                      className="button border-0"
                      type="button"
                      onClick={() => {
                        //uploadCart(productState?._id)
                        alreadyAdded ? navigate("/cart") : uploadCart()
                      }}
                    >
                      {alreadyAdded ? "Go To Cart" : "Add To Cart"}
                    </button>
                    {/*  <button className="button signup">Buy It Now</button> */}
                  </div>
                </div>
                <div className="d-flex gap-15 flex-row  align-items-center gap-15">
                  <div>
                    <a href="#">
                      <TbGitCompare className="fs-4 me-2" />
                      Add To Compare
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <AiOutlineHeart className="fs-4 me-2" />
                      Add To Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! we ship
                    all Japan domestic orders within
                    <b className="py-2">5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link :</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(window.location.href)
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classI="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p
                dangerouslySetInnerHTML={{
                  __html: productState?.description,
                }}
              ></p>
            </div>
          </div>
        </div>
      </Container>

      <Container classI="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between">
                <div>
                  <h4 className="mb-2">Customer reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={3}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="/">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4 ">
                <h4>Write a review</h4>

                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={true}
                    value={3}
                    activeColor="#ffd700"
                    onChange={(e) => {
                      setStar(e)
                    }}
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols={30}
                    rows={4}
                    className="w-100 form-control"
                    placeholder="Comments"
                    onChange={(e) => {
                      setComment(e.target.value)
                    }}
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end mt-3">
                  <button
                    className="button border-0"
                    onClick={addRatingToProduct}
                    type="button"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
              <div className="reviews mt-4  ">
                {productState &&
                  productState.ratings?.map((item, index) => {
                    return (
                      <div key={index} className="review">
                        <div className="d-flex gap-10 align-items-center">
                          <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            value={item?.star}
                            activeColor="#ffd700"
                          />
                        </div>
                        <p className="mt-3">{item?.comment}</p>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classI="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular products </h3>
          </div>
        </div>
        <div className="row">
          <ProductCard data={popularProduct} />
        </div>
      </Container>
    </>
  )
}

export default SingleProduct

/* zoom-img-7:54*/
