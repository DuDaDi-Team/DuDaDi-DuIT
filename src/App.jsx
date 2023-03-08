/* eslint-disable prettier/prettier */

/* Seluruh Router Javascript */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavScrollTop from "./components/nav-scroll-top";

/* Seluruh Halaman */
import HomePage from "./pages/index";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import ServiceDetails from "./templates/service-details";
import TeamPage from "./pages/team";
import FaqPage from "./pages/faq";
import BlogPage from "./pages/blog";
import BlogLeftSidebarPage from "./pages/blog-left-sidebar";
import BlogRightSidebarPage from "./pages/blog-right-sidebar";
import BlogDetailsPage from "./templates/blog-details";
import BlogAuthor from "./templates/blog-author";
import BlogDate from "./templates/blog-date";
import BlogTag from "./templates/blog-tag";
import BlogCategory from "./templates/blog-category";
import ContactPage from "./pages/contact";
import VisiMisiPage from "./pages/visi_misi";
import OurPartner from "./pages/partner";
import SoftwareDevelopment from "./pages/software-developtment";
import ItSolution from "./pages/it-solution";
import SystemIntegrasi from "./pages/integrasi";
import DireksiPage from "./pages/direksi";
import DevTeamPage from "./pages/devteam";
import MarketingTeamPage from "./pages/marketingteam";
/* Seluruh CSS */
import "swiper/components/navigation/navigation.scss";
import "swiper/swiper.scss";
import "./assets/css/vendor/metropolis.css";
import "./assets/css/vendor/icofont.min.css";
import "./assets/css/vendor/font-awesome.css";
import "./assets/css/vendor/material-design-iconic.min.css";
import "./assets/css/plugins/animate.min.css";
import "./assets/scss/style.scss";
import IconPartner from "./containers/global/partner";
import KarirPage from "./pages/karir";

// eslint-disable-next-line prettier/prettier
const App = () => {
    global.URL = "/duit-dev";
    return (
        <Router basename="/">
            <NavScrollTop>
                <Switch>
                    {/* ini adalah router original */}
                    <Route
                        path={`${process.env.PUBLIC_URL + "/"}`}
                        exact
                        component={HomePage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/about"}`}
                        component={AboutPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/service"}`}
                        component={ServicePage}
                    />
                    <Route
                        path={`${
                            process.env.PUBLIC_URL + "/service-details/:id"
                        }`}
                        component={ServiceDetails}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/team"}`}
                        component={TeamPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/faq"}`}
                        component={FaqPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/karir"}`}
                        component={KarirPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/contact"}`}
                        component={ContactPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/blog"}`}
                        component={BlogPage}
                    />
                    <Route
                        path={`${
                            process.env.PUBLIC_URL + "/blog-left-sidebar"
                        }`}
                        component={BlogLeftSidebarPage}
                    />
                    <Route
                        path={`${
                            process.env.PUBLIC_URL + "/blog-right-sidebar"
                        }`}
                        component={BlogRightSidebarPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/blog-details/:id"}`}
                        component={BlogDetailsPage}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/author/:author"}`}
                        component={BlogAuthor}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/date/:date"}`}
                        component={BlogDate}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/tag/:slug"}`}
                        component={BlogTag}
                    />
                    <Route
                        path={`${process.env.PUBLIC_URL + "/category/:slug"}`}
                        component={BlogCategory}
                    />
                    {/* ini adalah router tambahan */}
                    <Route
                        path={`${process.env.PUBLIC_URL + "/visi-misi"}`}
                        component={VisiMisiPage}
                    />
                    <Route
                    path={`${process.env.PUBLIC_URL + "/partner"}`}
                    component={OurPartner}
                    />
                    <Route
                    path={`${process.env.PUBLIC_URL + "/software-development"}`}
                    component={SoftwareDevelopment}
                    />
                    <Route
                    path={`${process.env.PUBLIC_URL + "/it-solution"}`}
                    component={ItSolution}
                    />
                    <Route
                    path={`${process.env.PUBLIC_URL + "/system-integrasi"}`}
                    component={SystemIntegrasi}
                    />
                    <Route
                    path={`${process.env.PUBLIC_URL + "/direksi"}`}
                    component={DireksiPage}
                    />
                    <Route
                    path={`${process.env.PUBLIC_URL + "/dev-team"}`}
                    component={DevTeamPage}
                    />
                    <Route
                    path={`${process.env.PUBLIC_URL + "/marketing-team"}`}
                    component={MarketingTeamPage}
                    />
                </Switch>
            </NavScrollTop>
        </Router>
    );
};

export default App;
