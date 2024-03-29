import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <>
            <Meta title={" Login"} />
            <BreadCrumb title="Login" />
            <div className="login-wrapper  home-wrapper-2 py-5">
                <div className="container-xxl ">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card ">
                                <h3 className="text-center mb-3"> Login</h3>
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
                                    <div className="mb-1">
                                        <input
                                            type="password"
                                            name="Email"
                                            placeholder="Password"
                                            className="form-control"
                                        />
                                    </div>
                                    <div>
                                        <Link to="/forgot-password">
                                            ForgotPassword ?
                                        </Link>
                                        <div className="d-flex justify-content-center gap-10 align-items-center mb-3 mt-3">
                                            <button
                                                className="button border-0"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                            <Link
                                                to="/signup"
                                                className="button signup"
                                            >
                                                Signup
                                            </Link>
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

export default Login;
