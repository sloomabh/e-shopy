import { useEffect } from "react"
import { Table } from "antd"
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { getProducts } from "../features/product/productSlice"
import { Link } from "react-router-dom"

interface Data1Type {
  key: number
  title: string
  brand: string
  category: string
  color: string
  price: string
  action: any
}
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
    sorter: (a, b) => a.category.length - b.category.length,
  },
  {
    title: "Color",
    dataIndex: "color",
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Action",
    dataIndex: "action",
  },
]

const Productlist = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])
  const productState = useAppSelector((state) => state.product.products)

  const data1: Data1Type[] = []

  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      price: `${productState[i].price}`,
      action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    })
  }
  console.log(data1)

  return (
    <div>
      {" "}
      <h3 className="mb-4 title">Product list</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      {/*  <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteEnq(enqId)
        }}
        title="Are you sure you want to delete this enquiry?"
      /> */}
    </div>
  )
}

export default Productlist
