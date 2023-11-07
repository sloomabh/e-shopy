import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {
  const getTokenFromLocalStorage = localStorage.getItem("customer")
  console.log(getTokenFromLocalStorage.token)

  return getTokenFromLocalStorage?.token !== undefined ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  )
}
