import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import ReactStars from "react-rating-stars-component";

import Meta from "../Components/Meta";
const OurStore = () => {
    return (
        <>
            <Meta title={" Our Store"} />
            <BreadCrumb title="Our Store" />
            <div className="store-wrapper  home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h4 className="filter-title">
                                    Shop by categories
                                </h4>
                                <div>
                                    <ul className="ps-0">
                                        <li>Watch</li>
                                        <li>TV</li>
                                        <li>Camera</li>
                                        <li>Laptop</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h4 className="filter-title">Filter By</h4>
                                <div>
                                    <h5 className="sub-title">Availablity</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                value=""
                                                id=""
                                            />
                                            <label
                                                HtmlFor=""
                                                className="form-check-label"
                                            >
                                                In Stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                value=""
                                                id=""
                                            />
                                            <label
                                                HtmlFor=""
                                                className="form-check-label"
                                            >
                                                Out of Stock (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Price</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control "
                                                id="floatingInput"
                                                placeholder="From"
                                            />
                                            <label HtmlFor="floatingInput">
                                                From
                                            </label>
                                        </div>
                                        <div className="form-floating">
                                            <input
                                                type="email"
                                                className="form-control "
                                                id="floatingInput1"
                                                placeholder="To"
                                            />
                                            <label HtmlFor="floatingInput1">
                                                To
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Color</h5>
                                    <div>
                                        <ul className="colors ps-0">
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h5 className="sub-title">Size</h5>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                value=""
                                                id="color-1"
                                            />
                                            <label
                                                HtmlFor="color-1"
                                                className="form-check-label"
                                            >
                                                S (2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                type="checkbox"
                                                className="form-check-input"
                                                value=""
                                                id="color-2  "
                                            />
                                            <label
                                                HtmlFor="color-2"
                                                className="form-check-label"
                                            >
                                                M(2)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h4 className="filter-title">Product Tags</h4>

                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            HeadPhone
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Laptop
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Mobile
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Wire
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Vivo
                                        </span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                                            Tablet
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h4 className="filter-title">
                                    Random Products
                                </h4>
                                <div>
                                    <div className="random-product mb-3 d-flex">
                                        <div className="w-50">
                                            <img
                                                src="images/watch.jpg"
                                                alt="watch"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                {" "}
                                                Kids HeadPhone bulk 10 pack
                                                multi colored for Students{" "}
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$300</b>
                                        </div>
                                    </div>
                                    <div className="random-product d-flex">
                                        <div className="w-50">
                                            <img
                                                src="images/watch.jpg"
                                                alt="watch"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                {" "}
                                                Kids HeadPhone bulk 10 pack
                                                multi colored for Students{" "}
                                            </h5>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={4}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <b>$300</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurStore;
