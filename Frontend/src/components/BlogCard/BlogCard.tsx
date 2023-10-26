import "./BlogCard-style.css"
import { Link } from "react-router-dom"

const BlogCard = ({ id, title, description, image, date }) => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src={image} alt="blog" className="img-fluid" />
      </div>
      <div className="blog-content">
        <p className="date">{date}</p>
        <h5 className="title">{title}</h5>
        <p className="desc" dangerouslySetInnerHTML={__html:description.<i class="fa fa-subscript" aria-hidden="true"></i>}>{description}</p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
