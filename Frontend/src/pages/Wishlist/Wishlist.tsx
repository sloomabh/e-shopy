import "./wishlist-style.css"
import { useEffect } from "react"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import Container from "../../components/Container"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getUserProductWishlist } from "../../features/user/userSlice"
import { addToWishlist } from "../../features/products/productSlice"

const Wishlist = () => {
  const dispatch = useAppDispatch()

  // console.log(productState)
  useEffect(() => {
    getWishlistFromDb()
  }, [])
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist())
  }
  const WishlistState = useAppSelector(
    (state) => state?.auth?.wishlist?.wishlist,
  )
  console.log(WishlistState)
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id))
    setTimeout(() => {
      dispatch(getUserProductWishlist())
    }, 300)
  }
  return (
    <>
      <Meta title={"wishlist"} />
      <BreadCrumb title="Favourit Wishlist" />
      <Container classI="wishlit-wrapper home-wrapper-2 py-5">
        <div className="row">
          {WishlistState?.length === 0 && (
            <div className="text-center fs-3">No DATA</div>
          )}
          {WishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <img
                    src="./src/images/cross.svg"
                    alt="cross"
                    className="cross position-absolute img-fluid "
                    onClick={() => {
                      removeFromWishlist(item?._id)
                    }}
                  />
                  <div className="wishlist-card-image">
                    <img
                      src={
                        item?.images[0].url
                          ? item?.images[0].url
                          : "./src/images/watch.jpg"
                      }
                      alt="watch"
                      className=" img-fluid  w-100"
                    />
                    <div className=" px-2 py-3">
                      <h5 className="title">{item?.title}</h5>
                      <h6 className="price mb-3 mt-3">$ {item?.price}</h6>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </>
  )
}

export default Wishlist
