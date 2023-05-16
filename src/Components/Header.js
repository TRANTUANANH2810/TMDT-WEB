import React from "react";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p>
                                {" "}
                                Miễn phí Ship từ 1 triệu đồng và miễn phí khi
                                trả hàng
                            </p>
                        </div>
                        <div className="col-6">
                            <p>
                                Liên hệ : Trần Tuấn Anh - HotLine :{" "}
                                <a href="tel: +84 345678910">+84 345678910</a>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
