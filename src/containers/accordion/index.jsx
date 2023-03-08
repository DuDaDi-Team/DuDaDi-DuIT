/* eslint-disable prettier/prettier */
import React from "react";
import AccordionWrapKarir from "../../components/accrodion/AccordionKarir";

const AccordionContainer = () => {
    const baseUrl = global.URL;
    return (
        <div className="faq-section section-py">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10">
                        <AccordionWrapKarir />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccordionContainer;
