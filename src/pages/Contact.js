import React from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";

const Contact = () => {
    return (
        <>
            <Meta title={" Contact Us"} />
            <BreadCrumb title="Contact Us" />

            <div className=" contact-wrapper home-wrapper-2 py-5">
                <div className=" container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7440130180266!2d108.21077321004991!3d16.07876823911949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142184782e9e04b%3A0x66cd31821db01113!2zMTQ1IEzDvSBU4buxIFRy4buNbmcsIFRoYW5oIELDrG5oLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1685047597060!5m2!1svi!2s"
                                width="600"
                                height="450"
                                className="border-0  w-100"
                                allowFullscreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
