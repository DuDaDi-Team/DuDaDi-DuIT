/* eslint-disable prettier/prettier */
import React from "react";
import SEO from "../components/seo";
import TeampPageContainer from "../containers/team-page-container";
import MarketingTeamContainer from "../containers/marketing-team-page";
import FooterCopyright from "../layouts/footer_copyright";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const MarketingTeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Dunia Inovasi Teknologi" />
                <div className="wrapper">
                    <Header isShow={true} />
                    <MarketingTeamContainer />
                    <FooterCopyright />
                    
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default MarketingTeamPage;
