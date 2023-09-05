import React, { useState } from "react"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import ProductCard from "../../components/ProductCard/ProductCard"
import ReactStars from "react-rating-stars-component"
import "./singleproduct-style.css"
import ReactImageZoom from "react-image-zoom"

//import { Link } from "react-router-dom"
const SingleProduct = () => {
  const [orderedProduct, setorderdProduct] = useState<Boolean>(true)
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
                <div className="border-bottom">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={3}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">( 2 Reviews )</p>
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
              <h3>Reviews</h3>
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
