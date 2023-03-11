/* eslint-disable prettier/prettier */
import React from "react";
import BlogItemRightContainer from "../containers/blog/blog-item-right";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import FooterCopyright from "../layouts/footer_copyright";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogRightSidebarPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Dunia Inovasi Teknologi" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Blog Post"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/blog/banner.png"
                    />
                    <BlogItemRightContainer data={BlogData} />
                    <FooterCopyright />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogRightSidebarPage;
