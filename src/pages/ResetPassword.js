import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
const ResetPassword = () => {
    return (
        <>
            <Meta title={" Reset Password"} />
            <BreadCrumb title="Reset Password" />

            <div className="login-wrapper  home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card ">
                                <h3 className="text-center mb-3">
                                    ResetPassword
                                </h3>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-15"
                                >
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder=" Password"
                                            className="form-control "
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <input
                                            type="ConfirmPassword"
                                            name="ConfirmPassword"
                                            placeholder="ConfirmPassword"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center gap-10 align-items-center mb-3 mt-3">
                                            <button className="button border-0">
                                                OK
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPassword;
