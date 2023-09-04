import "./BlogCard-style.css"
import { Link } from "react-router-dom"
const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="./src/images/blog-1.jpg" alt="blog" className="img-fluid" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">A beautiful sunday morning renaissance</h5>
        <p className="desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard .
        </p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
