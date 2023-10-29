import "./specialProduct-style.css"
import { Link } from "react-router-dom"
import ReactStars from "react-rating-stars-component"

const SpecialProduct = ({
  title,
  brand,
  totalrating,
  price,
  sold,
  quantity,
}) => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img
              src="./src/images/watch.jpg"
              className="img-fluid"
              alt="watch"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand"> {brand}</h5>
            <h6 className="title">
              {title}
              <br />
              Mobile Phone,Sim..
            </h6>
            <ReactStars
              count={5}
              size={24}
              edit={false}
              value={totalrating}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">
                ${price} &nbsp; <s>$150.0</s>
              </span>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5 </b>days
              </p>
              <div className="d-flex gap-10  align-items-center ">
                <span className="  rounded-circle p-2 bg-danger">05</span>:
                <span className=" rounded-circle p-2 bg-danger">22</span>:
                <span className=" rounded-circle p-2 bg-danger">30</span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p> Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={quantity}
                ></div>
              </div>
            </div>
            <Link to="/" className="button">
              Add to Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct
