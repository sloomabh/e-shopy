import { Link } from "react-router-dom"
import "./breadcrumb-style.css"

const BreadCrumb = (props: any) => {
  const { title } = props
  return (
    <div className="breadcrumb py-4">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p>
              <Link to="/" className="text-dark">
                Home
              </Link>
              / {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb
