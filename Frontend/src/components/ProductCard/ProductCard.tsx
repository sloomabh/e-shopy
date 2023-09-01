import { Link, useLocation } from "react-router-dom"
import "./ProductCard-style.css"
import ReactStars from "react-rating-stars-component"

type ProductCardProps = {
  grid: number
}
const ProductCard = ({ grid }: ProductCardProps) => {
  let location = useLocation()
  /*  console.log(uselocation) */
  return (
    <div
      className={`${location.pathname === "/store" ? `gr-${grid}` : "col-3"}`}
    >
      <div className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link to="/">
            <img src="./src/images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src="./src/images/watch.jpg"
            alt="product_image"
            className="img-fluid"
          />
          <img
            src="./src/images/watch-01.jpg"
            alt="product_image"
            className="img-fluid"
          />
        </div>
        <div className="product-details">
          <h6 className="brabd">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for stdents
          </h5>
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={3}
            activeColor="#ffd700"
          />
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            the main body of matter in a manuscript, book, newspaper, etc.,the
            original words of an author or speaker, as opposed to a translation,
            paraphrase, commentary, or the like:
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link to="/">
              <img src="./src/images/prodcompare.svg" alt="compare" />
            </Link>
            <Link to="/">
              <img src="./src/images/view.svg" alt="view" />
            </Link>
            <Link to="/">
              <img src="./src/images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
