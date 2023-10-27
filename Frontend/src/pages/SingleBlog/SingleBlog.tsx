import Meta from "../../components/Meta"
import { useEffect } from "react"
import BreadCrumb from "../../components/BreadCrumb"
import { Link, useLocation } from "react-router-dom"
import "./singleblog-style.css"
import { HiOutlineArrowLeft } from "react-icons/hi"
import blog from "/blog-1.jpg"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { getABlog } from "../../features/blogs/blogSlice"
import { useSelector } from "react-redux"

const SingleBlog = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const blogState = useAppSelector((state) => state?.blog?.singleBlog)
  const getBlogId = location.pathname.split("/")[2]

  useEffect(() => {
    getBlogFromDb()
  }, [])
  const getBlogFromDb = () => {
    dispatch(getABlog(getBlogId))
  }

  return (
    <>
      <Meta title={blogState?.title} />
      <BreadCrumb title={blogState?.title} />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-5" />
                  Go back to Blogs
                </Link>
                <h3 className="title">{blogState?.title}</h3>
                <img
                  src={
                    blogState?.images[0].url ? blogState?.images[0].url : blog
                  }
                  alt="blog"
                  className="img-fluid w-100 my-4"
                />
                <p
                  dangerouslySetInnerHTML={{
                    __html: blogState?.description,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
