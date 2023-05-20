import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
const Footer = () => {
    return (
        <>
            {/* Sign up for newsletter */}
            <footer className="py-4">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img
                                    src="images/newsletter.png"
                                    alt="newsletter"
                                />
                                <h4 className="mb-0 text-white">
                                    Sign up for Newsletter
                                </h4>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group ">
                                <input
                                    type="text"
                                    className="form-control py-1"
                                    placeholder="Your Email Address..."
                                    aria-label="Your Email Address..."
                                    aria-describedby="basic-addon2"
                                />
                                <span
                                    className="input-group-text p-2 text-white"
                                    id="basic-addon2"
                                >
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End: Sign up for newsletter */}

            {/* Begin: information footer */}
            <footer className="py-4">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-4">
                            <h5 className="text-white mb-4">Contact US</h5>
                            <div>
                                <address className="text-white fs-7">
                                    Address: 145 Ly Tu Trong , <br />
                                    Thanh Binh, Hai Chau <br /> Da nang
                                    <br />
                                </address>
                                <a
                                    href="tel: +84 9449999999"
                                    className="mb-3 d-block mb-1 text-white"
                                >
                                    +84 9449999999
                                </a>
                                <a
                                    href="mailto: trantuananh.28102002@gmail.com"
                                    className="mb-2 d-block mb-0 text-white"
                                >
                                    trantuananh.28102002@gmail.com
                                </a>

                                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                                    <a
                                        href=""
                                        alt=" socialIcons"
                                        className=" text-white fs-4"
                                    >
                                        <BsLinkedin />
                                    </a>
                                    <a
                                        href=""
                                        alt=" socialIcons"
                                        className=" text-white fs-4"
                                    >
                                        <BsGithub />
                                    </a>
                                    <a
                                        href=""
                                        alt=" socialIcons"
                                        className=" text-white fs-4"
                                    >
                                        <BsYoutube />
                                    </a>
                                    <a
                                        href=""
                                        alt=" socialIcons"
                                        className=" text-white fs-4"
                                    >
                                        <BsInstagram />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h5 className="text-white mb-4">Information</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className=" text-white py-2 mb-1">
                                    Privacy Policy
                                </Link>
                                <Link className=" text-white py-2 mb-1">
                                    Refund Policy
                                </Link>
                                <Link className=" text-white py-2 mb-1">
                                    Shipping Policy
                                </Link>
                                <Link className=" text-white py-2 mb-1">
                                    Teams & Conditions
                                </Link>
                                <Link className=" text-white py-2 mb-1">
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h5 className="text-white mb-4">Account</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className=" text-white py-2 mb-1">
                                    About Us
                                </Link>
                                <Link className=" text-white py-2 mb-1">
                                    Pag
                                </Link>
                                <Link className=" text-white py-2 mb-1">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h5 className="text-white mb-4">Quick Links </h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className=" text-white py-2 mb-1">
                                    Laptops
                                </Link>
                                <Link className=" text-white py-2 mb-1">
                                    HeadPhones
                                </Link>
                                <Link className=" text-white py-2 mb-1">
                                    Tablets
                                </Link>
                                <Link className=" text-white py-2 mb-1">
                                    Watch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}; Powered by TA
                                Econo.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* end : information footer */}
        </>
    );
};

export default Footer;
