import { useState, useEffect } from "react"
import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import "./cart-style.css"
import watch from "/watch.jpg"
import { AiFillDelete } from "react-icons/ai"
import { Link } from "react-router-dom"
import Container from "../../components/Container"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import {
  deleteACartProduct,
  getUserCart,
  updateACartProduct,
} from "../../features/user/userSlice"

const Cart = () => {
  const dispatch = useAppDispatch()
  const [productUpdateDetail, setProductUpdateDetail] = useState(null)
  const [totalAmount, setTotalAmount] = useState(null)
  const userCartState = useAppSelector((state) => state?.auth?.cartProducts)
  // console.log(userCartState)

  useEffect(() => {
    getUserCartFromDb()
  }, [])

  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateACartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        }),
      )
    }
    setTimeout(() => {
      getUserCartFromDb()
    }, 300)
  }, [productUpdateDetail])

  useEffect(() => {
    let sum = 0
    if (userCartState) {
      for (let index = 0; index < userCartState?.length; index++) {
        sum =
          sum +
          userCartState[index].quantity * userCartState[index].productId.price
        setTotalAmount(sum)
      }
    }
  }, [userCartState])

  const getUserCartFromDb = () => {
    dispatch(getUserCart())
  }
  const deleteACartProductFromDb = (id) => {
    dispatch(deleteACartProduct(id))
    setTimeout(() => {
      getUserCartFromDb()
    }, 300)
  }

  return (
    <>
      <Meta title={"Cart "} />
      <BreadCrumb title="Cart" />
      <Container classI="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-1 gap-15 d-flex align-content-center">
                      <div className="w-25">
                        <img src={watch} className="img-fluid" alt="watch" />
                      </div>
                      <div className="w-75">
                        <p>{item?.productId.title}</p>
                        <p className="d-flex  gap-3">
                          Color:
                          <ul className="colors ps-0">
                            <li
                              style={{ backgroundColor: item?.color?.title }}
                              key={index}
                            ></li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">$ {item?.productId?.price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          type="number"
                          min={1}
                          max={10}
                          defaultValue={1}
                          style={{ width: "70px" }}
                          id=""
                          value={
                            productUpdateDetail?.quantity
                              ? productUpdateDetail?.quantity
                              : item?.quantity
                          }
                          onChange={(e) => {
                            setProductUpdateDetail({
                              cartItemId: item?._id,
                              quantity: e.target.value,
                            })
                          }}
                        />
                      </div>
                      <div>
                        <AiFillDelete
                          onClick={() => {
                            deleteACartProductFromDb(item?._id)
                          }}
                          className="text-danger "
                        />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                        $ {item?.productId?.price * item?.quantity}
                      </h5>
                    </div>
                  </div>
                )
              })}
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue To shopping
              </Link>
              {(totalAmount !== null || totalAmount !== 0) && (
                <div className="d-flex flex-column align-items-end">
                  <h4>SubTotal: $ {totalAmount}</h4>
                  <p>Taxes and shipping calculated at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Cart
