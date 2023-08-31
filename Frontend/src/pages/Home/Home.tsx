import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee"
import BlogCard from "../../components/BlogCard/BlogCard"
import "./home-style.css"
import ProductCard from "../../components/ProductCard/ProductCard"
import SpecialProduct from "../../components/SpecialProduct/SpecialProduct"

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
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
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between ">
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
                    <h6>Seure Pyments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
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
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Features Collection </h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
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
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="row gap-0">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
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
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper py-5">
        <div className="container-xxl">
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
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
