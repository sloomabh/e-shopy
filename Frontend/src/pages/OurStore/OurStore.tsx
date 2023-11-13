import BreadCrumb from "../../components/BreadCrumb"
import Meta from "../../components/Meta"
import "./ourstore-style.css"
import ReactStars from "react-rating-stars-component"
import { useEffect, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import Color from "../../components/Color/Color"
import Container from "../../components/Container"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllProducts } from "../../features/products/productSlice"

const OurStore = () => {
  const [grid, setGrid] = useState<number>(4)
  const handleImageClick = (Grid: number) => {
    setGrid(Grid) // Update the 'grid' state
    //  alert(Grid) // Show the updated 'grid' value
    //console.log(Grid) // Log the updated 'grid' value
  }

  const dispatch = useAppDispatch()
  const productState = useAppSelector((state) => state?.product?.product)
  const [brands, setBrands] = useState([])
  const [categories, setCategories] = useState([])
  const [tags, setTags] = useState([])
  //const [colors, setColors] = useState([])

  // Filter States
  const [category, setCategory] = useState([])
  const [tag, setTag] = useState([])
  const [brand, setBrand] = useState([])
  const [minPrice, setMinPrice] = useState(null)
  const [maxPrice, setMaxPrice] = useState(null)
  const [sort, setSort] = useState(null)

  useEffect(() => {
    let newBrands = []
    let category = []
    let newTags = []
    // let newColors = []

    for (let index = 0; index < productState?.length; index++) {
      const element = productState[index]
      newBrands.push(element.brand)
      category.push(element.category)
      newTags.push(element.tags)
      // newColors.push(element.color)
    }
    setCategories(category)
    setTags(newTags)
    //setColors(newColors)
    setBrands(newBrands)
  }, [productState])

  //console.log([...new Set(brands)])
  //console.log([...new Set(categories)])
  // console.log([...new Set(colors)])
  // console.log(categories)
  //console.log(sort)

  useEffect(() => {
    getProducts()
  }, [sort, tag, brand, category, minPrice, maxPrice])
  const getProducts = () => {
    dispatch(getAllProducts({ sort, tag, brand, category, minPrice, maxPrice }))
  }

  return (
    <>
      <Meta title="Our Store" />
      <BreadCrumb title="Our store" />
      <Container classI="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <li key={index} onClick={() => setCategory(item)}>
                          {item}
                        </li>
                      )
                    })}

                  {/* <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li> */}
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By </h3>
              <div>
                <h5 className="sub-title">Availability</h5>
                <div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                      />
                      In stock (5)
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label" htmlFor="">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name=""
                        id=""
                        value="checkedValue"
                      />
                      Out of Stock
                    </label>
                  </div>
                </div>
                <h5 className="sub-title mt-4">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating ">
                    <input
                      type="number"
                      className="form-control "
                      id="floatingInput"
                      placeholder="From"
                      onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating ">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                      onChange={(e) => setMaxPrice(e.target.value)}
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                {/*<h5 className="sub-title">Colors</h5>
                <div>
                  <div>
                    <Color />
                  </div>
                </div> */}
                <h5 className="sub-title mt-4">Size</h5>
                <div className="form-check ">
                  <label className="form-check-label  " htmlFor="color-1">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="color-1"
                      value="checkedValue"
                    />
                    S (2)
                  </label>
                </div>
                <div className="form-check ">
                  <label className="form-check-label  " htmlFor="color-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="color-2"
                      value="checkedValue"
                    />
                    M (5)
                  </label>
                </div>
                <div className="form-check ">
                  <label className="form-check-label  " htmlFor="color-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="color-3"
                      value="checkedValue"
                    />
                    L (2)
                  </label>
                </div>
                <div className="form-check ">
                  <label className="form-check-label  " htmlFor="color-4">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="color-4"
                      value="checkedValue"
                    />
                    XL (2)
                  </label>
                </div>
                <div className="form-check ">
                  <label className="form-check-label  " htmlFor="color-5">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      name=""
                      id="color-5"
                      value="checkedValue"
                    />
                    XXL (8)
                  </label>
                </div>
              </div>
            </div>

            <div className="filter-card mb-3">
              <h3 className="filter-title">Products Tags</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {tags &&
                    [...new Set(tags)].map((item, index) => {
                      return (
                        <span
                          className=" text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                          key={index}
                          onClick={() => setTag(item)}
                        >
                          {item}
                        </span>
                      )
                    })}
                  {/*  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Wire
                  </span>*/}
                </div>
              </div>
            </div>

            <div className="filter-card mb-3">
              <h3 className="filter-title">Products Brands</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  {tags &&
                    [...new Set(brands)].map((item, index) => {
                      return (
                        <span
                          className=" text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3"
                          key={index}
                          onClick={() => setBrand(item)}
                        >
                          {item}
                        </span>
                      )
                    })}
                </div>
              </div>
            </div>

            {/*<div className="filter-card mb-3">
              <h3 className="filter-title">Random Products</h3>
              <div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="./src/images/watch.jpg"
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5 className="">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={3}
                      activeColor="#ffd700"
                    />
                    <b>$100.00</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="./src/images/watch.jpg"
                      alt="watch"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-50">
                    <h5 className="">
                      Kids headphones bulk 10 pack multi colored for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      edit={false}
                      value={3}
                      activeColor="#ffd700"
                    />
                    <b>$100.00</b>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-15  ">
                  <p className="mb-0  d-block " style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    className="form-control form-select"
                    id=""
                    defaultValue={"manual"}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option>
                    <option value="title">Alphabitacally, A-Z</option>
                    <option value="-title">Alphabitacally, Z-A</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="created">Date, low to high</option>
                    <option value="-created">Date, high to low</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10 ">
                  <p className="totalproducts mb-0 ">21 products</p>
                  <div className="d-flex gap-10 align-items-center grid ">
                    <img
                      onClick={() => {
                        handleImageClick(3)
                      }}
                      src="../src/images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        handleImageClick(4)
                      }}
                      src="../src/images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        handleImageClick(6)
                      }}
                      src="../src/images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        handleImageClick(12)
                      }}
                      src="../src/images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard
                  data={productState ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default OurStore
