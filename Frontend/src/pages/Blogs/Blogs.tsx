import Meta from "../../components/Meta"
import { useEffect } from "react"
import BreadCrumb from "../../components/BreadCrumb"
import BlogCard from "../../components/BlogCard/BlogCard"
import Container from "../../components/Container"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getAllBlogs } from "../../features/blogs/blogSlice"
import moment from "moment"

const Blogs = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    getAllBlogsFromDb()
  }, [])
  const getAllBlogsFromDb = () => {
    dispatch(getAllBlogs())
  }
  const blogsState = useAppSelector((state) => state?.blog?.blogs)
  console.log(blogsState)
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="blogs" />
      <Container classI="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Find By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              {blogsState?.map((item, index) => {
                return (
                  <div className="col-6 mb-3" key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm:ss a",
                      )}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Blogs
