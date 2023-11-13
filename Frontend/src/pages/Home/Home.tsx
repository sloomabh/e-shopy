import Meta from "../../components/Meta"

import { Link, useLocation, useNavigate } from "react-router-dom"
import Marquee from "react-fast-marquee"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import BlogCard from "../../components/BlogCard/BlogCard"
import "./home-style.css"
import ProductCard from "../../components/ProductCard/ProductCard"
import SpecialProduct from "../../components/SpecialProduct/SpecialProduct"
import Container from "../../components/Container"
import { services } from "../../utils/Data"

import "../../components/ProductCard/ProductCard-style.css"
import ReactStars from "react-rating-stars-component"
import prodcompare from "/prodcompare.svg"
import wish from "/wish.svg"
import watch from "/watch.jpg"
import watch2 from "/watch-01.jpg"
import addcart from "/add-cart.svg"
import view from "/view.svg"
import { addToWishlist } from "../../features/products/productSlice"

import { getAllBlogs } from "../../features/blogs/blogSlice"
import { getAllProducts } from "../../features/products/productSlice"
import moment from "moment"

const Home = () => {
  const dispatch = useAppDispatch()
  const blogsState = useAppSelector((state) => state?.blog?.blogs)
  const productsState = useAppSelector((state) => state?.product?.product)
  // console.log(productsState)
  const navigate = useNavigate()

  useEffect(() => {
    getAllBlogsFromDb()
    getProductsFromDb()
  }, [])

  const getAllBlogsFromDb = () => {
    dispatch(getAllBlogs())
  }

  const getProductsFromDb = () => {
    dispatch(getAllProducts())
  }

  const addToWish = (id) => {
    dispatch(addToWishlist(id))
  }

  return (
    <>
      <Meta title={"eshopy"} />
      <Container classI="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner  position-relative">
              <img
                src="/src/images/main-banner-1.jpg"
                alt="banner"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>From $999.9 or $41.5/mo</p>
                <Link className=" button " to="/">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap   justify-content-between align-items-center">
              <div className="small-banner  position-relative  ">
                <img
                  src="/src/images/catbanner-01.jpg"
                  alt="banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALES</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $1699.0 <br />
                    or $64.5/mo
                  </p>
                </div>
              </div>
              <div className="small-banner  position-relative  ">
                <img
                  src="/src/images/catbanner-02.jpg"
                  alt="banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15 % OFF</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    shop the latest brand <br />
                  </p>
                </div>
              </div>

              <div className="small-banner position-relative  ">
                <img
                  src="/src/images/catbanner-03.jpg"
                  alt="banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $599.9 <br /> or $49.1 for 12 mo. *
                  </p>
                </div>
              </div>
              <div className="small-banner  position-relative  ">
                <img
                  src="/src/images/catbanner-04.jpg"
                  alt="banner"
                  className="img-fluid rounded-03"
                />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGAVING</h4>
                  <h5>AirPodsMax</h5>
                  <p>
                    High fidelity playback & <br />
                    ultra-low distortion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container classI="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between ">
              {services?.map((service, j) => {
                return (
                  <div className="d-flex align-items-center gap-15 " key={j}>
                    <img src={service.image} alt="services" />
                    <div>
                      <h6>{service.title}</h6>
                      <p className="mb-0">{service.tagline}</p>
                    </div>
                  </div>
                )
              })}
              {/*///////////////////////////
                <div className="d-flex align-items-center gap-15 ">
                  <img src="/src/images/service.png" alt="services" />
                  <div>
                    <h6>Free shipping</h6>
                    <p className="mb-0">From all orders over $100</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src="/src/images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src="/src/images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src="/src/images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 ">
                  <img src="/src/images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Pyments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div> 
               ////////////////////////////////////////// */}
            </div>
          </div>
        </div>
      </Container>
      <Container classI="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex  align-items-centers">
                <div>
                  <h6>Computers & Laptop</h6>
                  <p>8 Items</p>
                </div>
                <img src="./src/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex  align-items-centers">
                <div>
                  <h6>Cameras & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex  align-items-centers">
                <div>
                  <h6>Smart Television</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex  align-items-centers">
                <div>
                  <h6>Smartwatches</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/images/headphone.jpg" alt="camera" />
              </div>
              {/************************  */}
              <div className="d-flex  align-items-centers">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>4 Items</p>
                </div>
                <img src="./src/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex  align-items-centers">
                <div>
                  <h6>Computers & Laptop</h6>
                  <p>8 Items</p>
                </div>
                <img src="./src/images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex  align-items-centers">
                <div>
                  <h6>Smart Television</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex  align-items-centers">
                <div>
                  <h6>Smartwatches</h6>
                  <p>10 Items</p>
                </div>
                <img src="./src/images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container classI="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Features Collection </h3>
          </div>
          {productsState &&
            productsState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div key={index} className="col-3">
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?._id)
                          }}
                        >
                          <img
                            src={wish}
                            alt="wishlist"
                            style={{
                              zIndex: "2",
                            }}
                          />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0].url}
                          alt="product_image"
                          className="img-fluid"
                        />
                        <img
                          src={watch2}
                          alt="product_image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          edit={false}
                          value={item?.totalrating.toString()}
                          activeColor="#ffd700"
                        />

                        <p className="price">${item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/*  <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button>*/}
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
        </div>
      </Container>

      <Container classI="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          {" "}
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="./src/images/watch-bg-01.jpg"
                alt="famous"
                className="img-fuid"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart watch Series</h6>
                <p>From $399 or $16.65/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="./src/images/watch-bg-01.jpg"
                alt="famous"
                className="img-fuid"
              />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>600 nits of brightness</h6>
                <p>27-inch 5k Retina display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="./src/images/watch-bg-01.jpg"
                alt="famous"
                className="img-fuid"
              />
              <div className="famous-content position-absolute">
                <h5>SMARTPHONES</h5>
                <h6>Smartphone 13 Pro</h6>
                <p>Now in Green From $999.0 or $41.62/mo for24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="./src/images/watch-bg-01.jpg"
                alt="famous"
                className="img-fuid"
              />
              <div className="famous-content position-absolute">
                <h5>HOME SPEAKERS</h5>
                <h6>Room-filling sound </h6>
                <p>From $699 or $116.65/mo. for 24 mo.*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="row gap-0">
              {productsState &&
                productsState?.map((item, index) => {
                  if (item.tags === "special") {
                    return (
                      <SpecialProduct
                        key={index}
                        id={item?._id}
                        title={item?.title}
                        brand={item?.brand}
                        totalrating={item?.totalrating.toString()}
                        price={item?.price}
                        sold={item?.sold}
                        quantity={item?.quantity}
                      />
                    )
                  }
                })}
            </div>
          </div>
        </div>
      </section>

      <Container classI="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular products </h3>
          </div>
        </div>
        <div className="row">
          {productsState &&
            productsState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className="col-3">
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            addToWish(item?._id)
                          }}
                        >
                          <img
                            src={wish}
                            alt="wishlist"
                            style={{
                              zIndex: "2",
                            }}
                          />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0].url}
                          alt="product_image"
                          className="img-fluid"
                        />
                        <img
                          src={watch2}
                          alt="product_image"
                          className="img-fluid"
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">{item?.title}</h5>
                        <ReactStars
                          count={5}
                          size={24}
                          edit={false}
                          value={item?.totalrating.toString()}
                          activeColor="#ffd700"
                        />

                        <p className="price">${item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button> */}
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            })}
        </div>
      </Container>

      <Container classI="marque-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper bg-white p-3">
              <Marquee>
                <div className="mx-4 w-25">
                  <img src="./src/images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="./src/images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container classI="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>

          <div className="row">
            {blogsState &&
              blogsState?.map((item, index) => {
                if (index < 4) {
                  return (
                    <div className="col-3 " key={index}>
                      <BlogCard
                        id={item?._id}
                        title={item?.title}
                        description={item?.description}
                        image={item?.images[0]?.url}
                        date={moment(item?.createdAt).format(
                          "MMMM Do YYYY, h:mm:ss a",
                        )}
                      />
                    </div>
                  )
                }
              })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default Home
