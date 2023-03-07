/* eslint-disable prettier/prettier */
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/logo";
import SocialIcon from "../../components/social-icon";

const FooterCopyright = () => {
    const baseUrl = global.URL;
    return (
        <footer className="footer-section">
            <div className="copy-right-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-info text-center">
                                <p>
                                    Copyright &copy; 2023 Dunia Inovasi Teknologi  
                                    {/* <i className="icofont-heart-alt"></i> By{" "} */}
                                    {/* <a
                                        href="https://themeforest.net/user/codecarnival/portfolio"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        codecarnival
                                    </a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterCopyright;
