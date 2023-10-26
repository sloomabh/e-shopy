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
//import DOMPurify from "dompurify"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { addToWishlist } from "../../features/products/productSlice"

type ProductCardProps = {
  grid?: number
  data?: any
}
const ProductCard = (props: ProductCardProps) => {
  const { data, grid } = props
  console.log(data)
  let location = useLocation()
  /*  console.log(uselocation) */
  //const sanitizedDescription = DOMPurify.sanitize(item?.description)

  const dispatch = useAppDispatch()
  const addToWish = (id) => {
    dispatch(addToWishlist(id))
  }

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname === "/product" ? `gr-${grid}` : "col-3"
            }`}
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
                <button
                  className="border-0 bg-transparent"
                  onClick={(e) => {
                    addToWish(item?._id)
                  }}
                >
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image">
                <img
                  src={item?.images[0].url}
                  alt="product_image"
                  className="img-fluid"
                />
                <img src={watch2} alt="product_image" className="img-fluid" />
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
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                  /*   dangerouslySetInnerHTML={{ __html: item?.description }}*/
                  /*  dangerouslySetInnerHTML={{ __html: sanitizedDescription }}*/
                >
                  {item?.description}
                </p>
                <p className="price">${item?.price}</p>
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
      })}
    </>
  )
}

export default ProductCard
/* 
 item.descriptioon: the main body of matter in a manuscript,
                  book, newspaper, etc.,the original words of an author or
                  speaker, as opposed to a translation, paraphrase, commentary,
                  or the like:*/
