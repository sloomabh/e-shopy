import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import OurStore from "./pages/OurStore/OurStore"
import Blogs from "./pages/Blogs/Blogs"
import CompareProduct from "./pages/CompareProducts/CompareProduct"
import Wishlist from "./pages/Wishlist/Wishlist"
import Login from "./pages/Login/Login"
import Logout from "./pages/Logout/Logout"
import Signup from "./pages/Signup/Signup"
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"
import ResetPassword from "./pages/ResetPassword/ResetPassword"
import SingleBlog from "./pages/SingleBlog/SingleBlog"
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy"
import RefundPolicy from "./pages/RefundPolicy/RefundPolicy"
import ShippingPolicy from "./pages/ShippingPolicy/ShippingPolicy"
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions"
import SingleProduct from "./pages/SingleProduct/SingleProduct"
import Cart from "./pages/Cart/Cart"
import CheckOut from "./pages/CheckOut/CheckOut"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="terms-conditions" element={<TermsAndConditions />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
