/* eslint-disable prettier/prettier */
import React from "react";
import AccordionWrap from "../../components/accrodion/AccordionWrap";

const AccordionContainer = () => {
    const baseUrl = global.URL;
    return (
        <div className="faq-section section-py">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10">
                        <AccordionWrap />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionContainer;
