import { Link, useLocation } from "react-router-dom"
import "./ProductCard-style.css"
import ReactStars from "react-rating-stars-component"
import prodcompare from "/prodcompare.svg"
import wish from "/wish.svg"
//import wishlist from "/wishlist.svg"
import watch from "/watch.jpg"
import watch2 from "/watch-01.jpg"
import addcart from "/add-cart.svg"
import view from "/view.svg"

type ProductCardProps = {
  grid?: number
}
const ProductCard = ({ grid }: ProductCardProps) => {
  let location = useLocation()
  /*  console.log(uselocation) */
  return (
    <div
      className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}
    >
      <Link
        to={`${
          location.pathname === "/"
            ? "/product/:id"
            : location.pathname === "/product/:id"
            ? "/product/:id"
            : ":id"
        }`}
        className="product-card position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img src={watch} alt="product_image" className="img-fluid" />
          <img src={watch2} alt="product_image" className="img-fluid" />
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
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
