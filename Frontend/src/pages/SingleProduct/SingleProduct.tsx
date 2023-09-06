import React, { useState } from "react"
import { Link } from "react-router-dom"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import ProductCard from "../../components/ProductCard/ProductCard"
import ReactStars from "react-rating-stars-component"
import "./singleproduct-style.css"
import ReactImageZoom from "react-image-zoom"
import Color from "../../components/Color/Color"
import { TbGitCompare } from "react-icons/tb"
import { AiOutlineHeart } from "react-icons/ai"

//import { Link } from "react-router-dom"
const SingleProduct = () => {
  const [orderedProduct, setorderdProduct] = useState<Boolean>(true)
  const copyToClipboard = (text: string) => {
    console.log("text", text)
    var textField = document.createElement("textarea")
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand("copy")
    textField.remove()
  }
  //7:18:00
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://media.wired.com/photos/64065938a358b3e8164ac998/2:3/w_1200,h_1800,c_limit/Nomad-DesignLab-Apple-Watch-Accessories-Gear.jpg",
  }
  return (
    <>
      <Meta title={"Product name "} />
      <BreadCrumb title="Prioduct name" />
      <div className="main-product-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://media.wired.com/photos/64065938a358b3e8164ac998/2:3/w_1200,h_1800,c_limit/Nomad-DesignLab-Apple-Watch-Accessories-Gear.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://media.wired.com/photos/64065938a358b3e8164ac998/2:3/w_1200,h_1800,c_limit/Nomad-DesignLab-Apple-Watch-Accessories-Gear.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://media.wired.com/photos/64065938a358b3e8164ac998/2:3/w_1200,h_1800,c_limit/Nomad-DesignLab-Apple-Watch-Accessories-Gear.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 bg-white">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={3}
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
                    <p className="product-data">Heavels</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">watch</p>
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
                  <div className="d-flex gap-10  flex-column  mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15 flex-row  align-items-center mt-2 mb-3">
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
                      />
                    </div>
                    <div className="d-flex  justify-content-center align-items-center gap-30 ms-5">
                      <button className="button border-0" type="submit">
                        Add To Cart
                      </button>
                      <button className="button signup">Buy It Now</button>
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
                        copyToClipboard(
                          "https://media.wired.com/photos/64065938a358b3e8164ac998/2:3/w_1200,h_1800,c_limit/Nomad-DesignLab-Apple-Watch-Accessories-Gear.jpg",
                        )
                      }}
                    >
                      Copy Product Link
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iusto, aspernatur. Temporibus iusto eum, sed reiciendis sit ut
                  itaque asperiores facere odio adipisci. Nobis architecto
                  blanditiis temporibus saepe officiis reiciendis ad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper home-wrapper-2">
        <div className="container-xxl">
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
                      <a
                        className="text-dark text-decoration-underline"
                        href="/"
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4 ">
                  <h4>Write a review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={true}
                        value={3}
                        activeColor="#ffd700"
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
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3  ">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-8">Navdeep</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={3}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque officiis quaerat unde nostrum nam pariatur sapiente,
                      aperiam, tempore sed reiciendis, ratione qui voluptatum
                      vitae asperiores ipsam voluptates. Ipsam, ab eos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular products </h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleProduct

/* zoom-img-7:54*/
