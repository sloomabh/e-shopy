import React from "react"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import ProductCard from "../../components/ProductCard/ProductCard"
//import { Link } from "react-router-dom"
const SingleProduct = () => {
  return (
    <>
      <Meta title={"Product name "} />
      <BreadCrumb title="Prioduct name" />
      <div className="main-product-wrapper py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper"></section>
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
