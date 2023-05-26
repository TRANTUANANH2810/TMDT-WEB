import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
const TermAndContion = () => {
    return (
        <>
            <Meta title={" Term And Contions"} />
            <BreadCrumb title="Term And Contions" />
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

export default TermAndContion;
