/* eslint-disable prettier/prettier */
import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AccordionContainer from "../containers/accordion";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import FooterCopyright from "../layouts/footer_copyright";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const KarirPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Dunia Inovasi Teknologi" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Karir"
                        excerpt=""
                        image="./images/faq/1.png"
                    />
                    <AccordionContainer />
                    {/* <NewsletterArea /> */}
                    <FooterCopyright />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default KarirPage;
