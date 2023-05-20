import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xl">
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
        </>
    );
};

export default Home;
