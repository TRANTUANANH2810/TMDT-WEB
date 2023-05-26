import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    return (
        <>
            <Meta title={" Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <div className="login-wrapper  home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-card ">
                            <h3 className="text-center mb-3">
                                Reset Your Password
                            </h3>
                            <p className="text-center mt-2 my-2">
                                We will send you an Email to reset Your password
                            </p>
                            <form
                                action=""
                                className="d-flex flex-column gap-15"
                            >
                                <div>
                                    <input
                                        type="Email"
                                        name="Email"
                                        placeholder="Email Address"
                                        className="form-control "
                                    />
                                </div>

                                <div>
                                    <div className="d-flex justify-content-center flex-column gap-10 align-items-center mb-3 mt-3">
                                        <button
                                            className="button border-0"
                                            type="submit"
                                        >
                                            Submit
                                        </button>

                                        <Link to="/login">Cancel</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;
