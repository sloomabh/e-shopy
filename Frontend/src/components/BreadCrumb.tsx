import { Link } from "react-router-dom"

type BreadProps = {
  title: string
}
const BreadCrumb = ({ title }: BreadProps) => {
  return (
    <div className="breadcrumb py-2 mb-0">
      <div className="container-xxl  ">
        <div className="row d-flex justify-content-cente align-items-center ">
          <div className="col-12  ">
            <p className="text-center mb-0">
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
