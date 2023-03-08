/* eslint-disable prettier/prettier */
import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import IconPartner from "../containers/global/partner";
import NewsletterArea from "../containers/global/newsletter";
import TeamContainer from "../containers/global/team";
import TestimonialContainer from "../containers/global/testimonial";
import HomeAboutContainer from "../containers/home/about";
import HomeBlog from "../containers/home/blog";
import IntroContainer from "../containers/home/intro";
import ServiceListContainer from "../containers/service/service-list";
// import Footer from "../layouts/footer";
import FooterCopyright from "../layouts/footer_copyright";

import Header from "../layouts/header";
import Layout from "../layouts/index";
import IconSystemIntegrasi from "../containers/global/system-integrasi";

const SystemIntegrasi = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Dunia Inovasi Teknologi" />
                <div className="wrapper">
                    <Header isShow={true} />
                    <IconSystemIntegrasi classOption="section-pb" />
                    <FooterCopyright />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default SystemIntegrasi;
