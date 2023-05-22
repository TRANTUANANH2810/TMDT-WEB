import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../Components/BlogCard";
import ProductCard from "../Components/ProductCard";
const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative p-3 ">
                                <img
                                    className="img-fluid rounded-3"
                                    src="images/main-banner-1.jpg"
                                    alt="main banner"
                                />
                                <div className="main-banner-content position-absolute">
                                    <h5> SupperChanner for Fros </h5>
                                    <h6>Ipad S13+ Pro</h6>
                                    <p> From $999 or $41,62/mo</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap  justify-content-between align-items-center">
                                <div className="small-banner position-relative p-3 ">
                                    <img
                                        className="img-fluid rounded-3"
                                        src="images/catbanner-01.jpg"
                                        alt="catbanner-0"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h5> Besst Sale </h5>
                                        <h6>Ipad S13+ Pro</h6>
                                        <p>
                                            {" "}
                                            From $999 <br />
                                            or $41,62/mo
                                        </p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3 ">
                                    <img
                                        className="img-fluid rounded-3"
                                        src="images/catbanner-02.jpg"
                                        alt="catbanner-0"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h5> New arrival </h5>
                                        <h6>But Ipad</h6>
                                        <p>
                                            {" "}
                                            From $999 <br />
                                            or $41,62/mo
                                        </p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3 ">
                                    <img
                                        className="img-fluid rounded-3"
                                        src="images/catbanner-03.jpg"
                                        alt="catbanner-0"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h5> New arrival </h5>
                                        <h6>But Ipad</h6>
                                        <p>
                                            {" "}
                                            From $999 <br />
                                            or $41,62/mo
                                        </p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative p-3 ">
                                    <img
                                        className="img-fluid rounded-3"
                                        src="images/catbanner-04.jpg"
                                        alt="catbanner-0"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h5> New arrival </h5>
                                        <h6>But Ipad</h6>
                                        <p>
                                            {" "}
                                            From $999 <br />
                                            or $41,62/mo
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Wrapper 2  */}
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="services d-flex align-items-center justify-content-between">
                                <div className=" d-flex align-items-center gap-15">
                                    <img
                                        src="images/service.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6> Pree Shipping </h6>
                                        <p className=" mb-0">
                                            From all orders over $100
                                        </p>
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center gap-15">
                                    <img
                                        src="images/service-02.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6>Daily Surprise Offers</h6>
                                        <p className=" mb-0">
                                            Save up to 25% Off
                                        </p>
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center gap-15">
                                    <img
                                        src="images/service-03.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6>Support 24/7</h6>
                                        <p className=" mb-0">
                                            Shop with an expert
                                        </p>
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center gap-15">
                                    <img
                                        src="images/service-04.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6>Affordable Prices </h6>
                                        <p className=" mb-0">
                                            Get Factory direct price
                                        </p>
                                    </div>
                                </div>
                                <div className=" d-flex align-items-center gap-15">
                                    <img
                                        src="images/service-05.png"
                                        alt="services"
                                        className=""
                                    />
                                    <div className="">
                                        <h6>Secure payment</h6>
                                        <p className=" mb-0">
                                            100% protected payments
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Wrapper 3 categories */}
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                                <div className="d-flex gap-10 align-items-center">
                                    <div>
                                        <h6>Camera</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" />
                                </div>
                                <div className="d-flex gap-10 align-items-center">
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" />
                                </div>
                                <div className="d-flex gap-10 align-items-center">
                                    <div>
                                        <h6>speaker</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/speaker.jpg" />
                                </div>
                                <div className="d-flex gap-10 align-items-center">
                                    <div>
                                        <h6>headphone</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/headphone.jpg" />
                                </div>
                                <div className="d-flex gap-10 align-items-center">
                                    <div>
                                        <h6>Camera</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/camera.jpg" />
                                </div>
                                <div className="d-flex gap-10 align-items-center">
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/tv.jpg" />
                                </div>
                                <div className="d-flex gap-10 align-items-center">
                                    <div>
                                        <h6>speaker</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/speaker.jpg" />
                                </div>
                                <div className="d-flex gap-10 align-items-center">
                                    <div>
                                        <h6>headphone</h6>
                                        <p>10 Items</p>
                                    </div>
                                    <img src="images/headphone.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="Feature-wrapper home-wrapper-2 py-5 ">
                <div className=" container-xxl">
                    <div className=" row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Featured collection
                            </h3>
                        </div>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </div>
            </section>
            {/* MArque wrapper */}
            <section className="marque-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marque-inner-wrapper cart-wrapper ">
                                <Marquee className="d-flex">
                                    <div className=" mx-4 w-25">
                                        <img
                                            className=""
                                            src="images/brand-01.png"
                                            alt=" brand"
                                        />
                                    </div>
                                    <div className=" mx-4 w-25">
                                        <img
                                            className=""
                                            src="images/brand-02.png"
                                            alt=" brand"
                                        />
                                    </div>
                                    <div className=" mx-4 w-25">
                                        <img
                                            className=""
                                            src="images/brand-03.png"
                                            alt=" brand"
                                        />
                                    </div>
                                    <div className=" mx-4 w-25">
                                        <img
                                            className=""
                                            src="images/brand-04.png"
                                            alt=" brand"
                                        />
                                    </div>
                                    <div className=" mx-4 w-25">
                                        <img
                                            className=""
                                            src="images/brand-05.png"
                                            alt=" brand"
                                        />
                                    </div>
                                    <div className=" mx-4 w-25">
                                        <img
                                            className=""
                                            src="images/brand-06.png"
                                            alt=" brand"
                                        />
                                    </div>
                                    <div className=" mx-4 w-25">
                                        <img
                                            className=""
                                            src="images/brand-07.png"
                                            alt=" brand"
                                        />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Blog-wrapper home-wrapper-2 py-5 ">
                <div className=" container-xxl">
                    <div className=" row">
                        <div className="col-12">
                            <h3 className="section-heading">
                                Out Latest Blogs
                            </h3>
                        </div>
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
