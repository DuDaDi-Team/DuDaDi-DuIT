/* eslint-disable prettier/prettier */
import { NavLink } from "react-router-dom";
import Button from "../../button";

const MainMenu = () => {
    const baseUrl = global.URL;
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={baseUrl + "/about"}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={baseUrl + "/service"}>
                        Service
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">Roadmap</NavLink>
                    {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/faq"}
                            >
                                faq
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/team"}
                            >
                                team
                            </NavLink>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <NavLink to={baseUrl + "/blog"}>
                        Team
                    </NavLink>
                    {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/blog"}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    baseUrl +
                                    "/blog-left-sidebar"
                                }
                            >
                                blog grid left sidebar
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    baseUrl +
                                    "/blog-right-sidebar"
                                }
                            >
                                blog grid right sidebar
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/blog-details/1"}
                            >
                                blog details
                            </NavLink>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <NavLink to={baseUrl + "/contact"}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink style={{ backgroundColor: "#5f28e0",paddingTop:"12px",paddingLeft:"25px",paddingBottom:"12px",paddingRight:"25px",borderRadius:"50px"}} to={baseUrl + "/contact"}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
