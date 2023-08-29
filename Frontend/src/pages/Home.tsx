import { Link } from "react-router-dom"
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
              <div className="d-flex flex-wrap  gap-10 justify-content-between align-items-center">
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
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
