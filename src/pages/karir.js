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
                        excerpt="Kami memilih menjadi generasi muda yang berbeda, yang mempunyai kemampuan dan ide-ideo cemerlang yang berpotensi untuk memajukan teknologi untuk masyarakat di perkotaan dan sekitarnya untuk memberdayakan, demi memenuhi kesjahteraan dan kemudahan dari teknologi yang bermanfaat bagi sesama."
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
