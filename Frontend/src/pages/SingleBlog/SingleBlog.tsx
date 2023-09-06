import Meta from "../../components/Meta"
import BreadCrumb from "../../components/BreadCrumb"
import { Link } from "react-router-dom"
import "./singleblog-style.css"
import { HiOutlineArrowLeft } from "react-icons/hi"
import blog from "/blog-1.jpg"

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blog" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-5" />
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A beautiful Sunday Morning Renaissance
                </h3>
                <img src={blog} alt="blog" className="img-fluid w-100 my-4" />
                <p>
                  You are only as good as your last collection , which is an
                  enormous pressure . Ihink there is something about luxury -
                  It's not something people need, but its wkat they want .It
                  really pulls at their heart.I have a fantastic relationship
                  with money.(6:27:07)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleBlog
