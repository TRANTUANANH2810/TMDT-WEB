import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-white mb-0">
                                Miễn phí Ship từ 1 triệu đồng và miễn phí khi
                                trả hàng
                            </p>
                        </div>
                        <div className="col-6">
                            <p className="text-end text-white mb-0">
                                Liên hệ : Trần Tuấn Anh - HotLine :{" "}
                                <a
                                    className="text-white"
                                    href="tel: +84 345678910"
                                >
                                    +84345678910
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h3>
                                <Link className="text-white">TA Econo.</Link>
                            </h3>
                        </div>
                        <div className="col-5">
                            <div className="input-group ">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Search Product Here..."
                                    aria-label="Search Product Here..."
                                    aria-describedby="basic-addon2"
                                />
                                <span
                                    className="input-group-text p-3"
                                    id="basic-addon2"
                                >
                                    <BsSearch className="fs-6" />
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-item-center justify-content-between">
                                <div>
                                    <Link>
                                        <img src="images/acc.jpg" alt=""></img>
                                        <p></p>
                                    </Link>
                                </div>
                                <div>
                                    <Link>
                                        <img src="images/" alt=""></img>
                                        <p></p>
                                    </Link>
                                </div>
                                <div>
                                    <Link>
                                        <img src="/public/images/" alt=""></img>
                                        <p></p>
                                    </Link>
                                </div>
                                <div>
                                    <Link>
                                        <img src="/public/images/" alt=""></img>
                                        <p></p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
