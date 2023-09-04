import "./wishlist-style.css"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"

const Wishlist = () => {
  return (
    <>
      <Meta title={"wishlist"} />
      <BreadCrumb title="Favourit Wishlist" />
      <div className="wishlit-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="./src/images/cross.svg"
                  alt="cross"
                  className="cross position-absolute img-fluid "
                />
                <div className="wishlist-card-image">
                  <img
                    src="./src/images/watch.jpg"
                    alt="watch"
                    className=" img-fluid  w-100"
                  />
                  <div className=" px-2 py-3">
                    <h5 className="title">
                      Honor T1 7 . 2 1 GB RAM 8 ROM 7Inch with Wi-Fi +3G Tablet
                    </h5>
                    <h6 className="price mb-3 mt-3">$ 100</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="./src/images/cross.svg"
                  alt="cross"
                  className="cross position-absolute img-fluid "
                />
                <div className="wishlist-card-image">
                  <img
                    src="./src/images/watch.jpg"
                    alt="watch"
                    className=" img-fluid  w-100"
                  />
                  <div className=" px-2 py-3">
                    <h5 className="title">
                      Honor T1 7 . 2 1 GB RAM 8 ROM 7Inch with Wi-Fi +3G Tablet
                    </h5>
                    <h6 className="price mb-3 mt-3">$ 100</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="./src/images/cross.svg"
                  alt="cross"
                  className="cross position-absolute img-fluid "
                />
                <div className="wishlist-card-image">
                  <img
                    src="./src/images/watch.jpg"
                    alt="watch"
                    className=" img-fluid  w-100"
                  />
                  <div className=" px-2 py-3">
                    <h5 className="title">
                      Honor T1 7 . 2 1 GB RAM 8 ROM 7Inch with Wi-Fi +3G Tablet
                    </h5>
                    <h6 className="price mb-3 mt-3">$ 100</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist
