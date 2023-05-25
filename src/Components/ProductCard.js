import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div
                className={` ${
                    location.pathname == "/OurStore" ? `gr-${grid}` : "col-3"
                }`}
            >
                <Link className=" product-card position-relative">
                    <div className=" wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" className="" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img
                            src="images/watch.jpg"
                            className=""
                            alt="product  img"
                        />
                        <img
                            src="images/watch2.png"
                            className="img-watch2"
                            alt="product  img"
                        />
                    </div>
                    <div className="product-details">
                        <h6 className="brand"> havel</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for
                            students
                        </h5>
                        {/* React rating stars */}
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p
                            className={`description ${
                                grid === 12 ? "d-block" : "d-none"
                            }`}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipLorem
                            ipsum dolor sit amet, consectetur adipLorem ipsum
                            dolor sit amet, consectetur adipLorem ipsum dolor
                            sit amet, consectetur adip
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link>
                                <img
                                    className=""
                                    src="images/add-cart.svg"
                                    alt="cart"
                                />
                            </Link>
                            <Link>
                                <img
                                    className=""
                                    src="images/view.svg"
                                    alt="view"
                                />
                            </Link>
                            <Link>
                                <img
                                    className=""
                                    src="images/prodcompare.svg"
                                    alt="prodcompare"
                                />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div
                className={` ${
                    location.pathname == "/OurStore" ? `gr-${grid}` : "col-3"
                }`}
            >
                <Link className=" product-card position-relative">
                    <div className=" wishlist-icon position-absolute">
                        <Link>
                            <img src="images/wish.svg" className="" />
                        </Link>
                    </div>
                    <div className="product-image">
                        <img
                            src="images/watch.jpg"
                            className=""
                            alt="product  img"
                        />
                        <img
                            src="images/watch2.png"
                            className="img-watch2"
                            alt="product  img"
                        />
                    </div>
                    <div className="product-details">
                        <h6 className="brand"> havel</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for
                            students
                        </h5>
                        {/* React rating stars */}
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p
                            className={`description ${
                                grid === 12 ? "d-block" : "d-none"
                            }`}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipLorem
                            ipsum dolor sit amet, consectetur adipLorem ipsum
                            dolor sit amet, consectetur adipLorem ipsum dolor
                            sit amet, consectetur adip
                        </p>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <Link>
                                <img
                                    className=""
                                    src="images/add-cart.svg"
                                    alt="cart"
                                />
                            </Link>
                            <Link>
                                <img
                                    className=""
                                    src="images/view.svg"
                                    alt="view"
                                />
                            </Link>
                            <Link>
                                <img
                                    className=""
                                    src="images/prodcompare.svg"
                                    alt="prodcompare"
                                />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
