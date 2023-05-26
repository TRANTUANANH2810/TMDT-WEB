import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
const RefundPolicy = () => {
    return (
        <>
            <Meta title={" Refund Policy"} />
            <BreadCrumb title="Refund Policy" />
            <div className="policy-wrapper  home-wrapper-2 py-5">
                <div className="container-xxl ">
                    <div className="row">
                        <div className="col-12">
                            <div className="policy"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RefundPolicy;
