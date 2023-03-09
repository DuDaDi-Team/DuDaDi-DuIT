/* eslint-disable prettier/prettier */
import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import ContactContainer from "../containers/contact";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import FooterCopyright from "../layouts/footer_copyright";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Dunia Inovasi Teknologi" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Kontak Kami"
                        excerpt="Anda membutuhkan konsultasi untuk solusi implementasi infrastruktur teknologi informasi? Selamat datang, Anda berada di tempat yang tepat, silahkan kontak Tim Sales & Engineer Kami melalui form isian yang ada dibawah ini."
                        image="./images/contact/1.png"
                    />
                    <ContactContainer />
                    <FooterCopyright />
                   
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
