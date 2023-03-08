/* eslint-disable prettier/prettier */
import React from "react";
import SEO from "../components/seo";
import TeampPageContainer from "../containers/team-page-container";
import DevTeamContainer from "../containers/dev-team-page";
import FooterCopyright from "../layouts/footer_copyright";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const DevTeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Dunia Inovasi Teknologi" />
                <div className="wrapper">
                    <Header isShow={true} />
                    <DevTeamContainer />
                    <FooterCopyright />
                    
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default DevTeamPage;
