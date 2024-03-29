import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import PrivaciPolicy from "./pages/PrivaciPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContion from "./pages/TermAndContion";
import SignProduct from "./pages/SignProduct";
import Cart from "./pages/Cart";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="Contact" element={<Contact />} />
                        <Route path="OurStore" element={<OurStore />} />
                        <Route path="OurStore/:id" element={<SignProduct />} />
                        <Route path="cart" element={<Cart />} />

                        <Route path="blogs" element={<Blog />} />
                        <Route
                            path="compare-product"
                            element={<CompareProduct />}
                        />
                        <Route path="wishlist" element={<Wishlist />} />
                        <Route path="login" element={<Login />} />
                        <Route
                            path="forgot-password"
                            element={<ForgotPassword />}
                        />

                        <Route path="signup" element={<Signup />} />
                        <Route
                            path="reset-password"
                            element={<ResetPassword />}
                        />
                    </Route>
                    <Route path="privacy-policy" element={<PrivaciPolicy />} />
                    <Route path="refund-policy" element={<RefundPolicy />} />
                    <Route
                        path="shipping-policy"
                        element={<ShippingPolicy />}
                    />
                    <Route
                        path="term-conditions"
                        element={<TermAndContion />}
                    />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
