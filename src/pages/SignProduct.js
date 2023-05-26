import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import ProductCard from "../Components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

import ReactImageZoom from "react-image-zoom";
import watch from "../";
import Color from "../Components/Color";
const SignProduct = () => {
    const props = {
        width: 400,
        height: 250,
        ZoomWidth: 1000,
        img: "https://www.apple.com/vn/watch/shared/why-watch/images/meta/gps-lte/og__e3mis7k4cmuu.png",
    };

    return (
        <>
            <Meta title={" Product names"} />
            <BreadCrumb title="Product names" />

            <div className="main-product-wrapper  home-wrapper-2 py-5">
                <div className="container-xxl ">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageZoom {...props} />
                                </div>
                            </div>
                            <div className="other-product-image d-flex flex-wrap gap-15">
                                <div>
                                    <img
                                        className="img-fluid"
                                        src="https://www.apple.com/vn/watch/shared/why-watch/images/meta/gps-lte/og__e3mis7k4cmuu.png"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="img-fluid"
                                        src="https://www.apple.com/vn/watch/shared/why-watch/images/meta/gps-lte/og__e3mis7k4cmuu.png"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="img-fluid"
                                        src="https://www.apple.com/vn/watch/shared/why-watch/images/meta/gps-lte/og__e3mis7k4cmuu.png"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="img-fluid"
                                        src="https://www.apple.com/vn/watch/shared/why-watch/images/meta/gps-lte/og__e3mis7k4cmuu.png"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-detail">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        kid headphones bulk 10 pack multi
                                        colored for students
                                    </h3>
                                </div>
                                <div className="border-bottom py-3">
                                    <p className="price">$ 100 </p>
                                    <div className="d-flex align-items-center gap-10">
                                        {" "}
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0 t-review">
                                            {" "}
                                            2 Previews
                                        </p>
                                    </div>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">
                                            Type:
                                        </h3>{" "}
                                        <p className="product-data">BCD</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">
                                            Brand:
                                        </h3>{" "}
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">
                                            Categories:
                                        </h3>{" "}
                                        <p className="product-data">
                                            HeadPhones
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">
                                            Tags:
                                        </h3>{" "}
                                        <p className="product-data">BCD</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">
                                            availability:
                                        </h3>{" "}
                                        <p className="product-data">Instock</p>
                                    </div>{" "}
                                    <div className="d-flex align-items-center gap-10 mt-2 mb-3">
                                        <h3 className="product-heading">
                                            Size:
                                        </h3>{" "}
                                        <div className="d-flex flex-wrap gap-15">
                                            <span className="badge border-1  bg-white text-dark border  border-secondary">
                                                {" "}
                                                S
                                            </span>
                                            <span className="badge border-1  bg-white text-dark border  border-secondary">
                                                {" "}
                                                M
                                            </span>
                                            <span className="badge border-1  bg-white text-dark border  border-secondary">
                                                {" "}
                                                Xl
                                            </span>
                                            <span className="badge border-1  bg-white text-dark border  border-secondary">
                                                {" "}
                                                XXl
                                            </span>
                                        </div>
                                    </div>
                                    <div className="d-flex  gap-10 mt-2 mb-3 flex-column">
                                        <h3 className="product-heading">
                                            Color:
                                        </h3>
                                        <Color />
                                    </div>
                                    <div className="d-flex align-items-center   gap-15 mt-2 mb-3 flex-row">
                                        <h3 className="product-heading">
                                            Quantity :
                                        </h3>
                                        <div className="">
                                            <input
                                                className="form-control"
                                                type="number"
                                                name=""
                                                min={1}
                                                max={10}
                                                style={{ width: "100px" }}
                                                id=""
                                            />
                                        </div>
                                        <div className=" d-flex align-items-center justify-content-center gap-15 ms-5 ">
                                            <button
                                                className="button border-0"
                                                type="submit"
                                            >
                                                Add to card
                                            </button>
                                            <Link
                                                to="/signup"
                                                className="button border-0 signup"
                                            >
                                                Buy it now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <section className="Popular-wrapper home-wrapper-2 py-5 ">
                    <div className=" container-xxl">
                        <div className=" row">
                            <div className="col-12">
                                <h3 className="section-heading">
                                    Outs Popular Products
                                </h3>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <div className="card"></div>
                                </div>

                                <div className="col-12">
                                    <div className="card"></div>
                                </div>
                                <ProductCard />
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </>
    );
};

export default SignProduct;
