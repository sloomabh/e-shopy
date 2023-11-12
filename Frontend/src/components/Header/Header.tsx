import { NavLink, Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { BsSearch } from "react-icons/bs"
import "./Header-style.css"
import compare from "/compare.svg"
import wishlist from "/wishlist.svg"
import user from "/user.svg"
import cart from "/cart.svg"
import menu from "/menu.svg"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllProducts } from "../../features/products/productSlice"
import { Typeahead } from "react-bootstrap-typeahead"

const Header = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [total, setTotal] = useState(null)
  const [productOpt, setProductOpt] = useState([])
  const cartState = useAppSelector((state) => state?.auth?.cartProducts)
  const productState = useAppSelector((state) => state?.product?.product)
  const authState = useAppSelector((state) => state?.auth)

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  // console.log(productState)
  const handelLogout = () => {
    localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    let sum = 0

    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + cartState[index].quantity * cartState[index].productId.price
      setTotal(sum)
    }
  }, [cartState])

  //const options = range(0, 1000).map((o) => `Item ${o}`)

  useEffect(() => {
    if (productState) {
      let data = []
      for (let index = 0; index < productState?.length; index++) {
        const element = productState[index]
        data.push({ id: index, prod: element?._id, name: element?.title })
      }
      console.log("Data:", data)
      setProductOpt(data)
    }
  }, [])

  /* useEffect(() => {
    const fetchData = async () => {
      await dispatch(getAllProducts())
      // Now, productState should be updated
      if (productState) {
        let data = []
        for (let index = 0; index < productState?.length; index++) {
          const element = productState[index]
          data.push({ id: index, prod: element?._id, name: element?.title })
        }
        console.log("Data:", data)
        setProductOpt(data)
      }
    }

    fetchData()
  }, [dispatch])*/

  return (
    <>
      <header className="header-top-strip py-2  ">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6 text-white mb-0">
              <p>Free Shipping Over $100 & free returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                hotline:
                <a className=" text-white " href="tel:+91 82565798">
                  +91 82565798
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-2">
        <div className="container-xxl ">
          <div className="row align-items-center ">
            <div className="col-3 ">
              <h1>
                <Link className="text-white fs-2" to="/">
                  Salimo TechZONE.
                </Link>
              </h1>
            </div>
            <div className="col-4">
              <div className="input-group ">
                <Typeahead
                  id="pagination-example"
                  onPaginate={() => console.log("Results paginated")}
                  onChange={(selected) => {
                    navigate(`/product/${selected[0].prod}`)
                  }}
                  options={productOpt}
                  // paginate={paginate}
                  labelKey={"name"}
                  minLength={2}
                  placeholder="Search for products Here..."
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-5 " />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between ">
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/compare-product"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to="/wishlist"
                  >
                    <img src={wishlist} alt="whishlist" />
                    <p className="mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white"
                    to={authState?.user === null ? "/login" : "/my-profile"}
                  >
                    <img src={user} alt="user" />
                    {authState?.user === null ? (
                      <p className="mb-0">
                        Log In <br /> My account
                      </p>
                    ) : (
                      <p className="mb-0">
                        Welcome , <br /> {authState?.user?.firstname}
                      </p>
                    )}
                  </Link>
                </div>
                <div>
                  <Link
                    className="d-flex align-items-center gap-10 text-white "
                    to="/cart"
                  >
                    <img src={cart} alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">
                        {cartState?.length ? cartState?.length : 0}
                      </span>
                      <p className="mb-0">$ {total ? total : 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div
                className="menu-bottom d-flex align-items-center gap-30
              "
              >
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={menu} alt="menu" />
                      <span className="mx-3 d-inline-block ">
                        Shop Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item  text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center text-white gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/blogs">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <button
                      onClick={handelLogout}
                      className="border border-0 bg-transparent text-white text-uppercase"
                      type="button"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
