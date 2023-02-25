/* eslint-disable prettier/prettier */
import { NavLink } from "react-router-dom";

const MainMenu = () => {
    // process.env.PUBLIC_URL
    const baseUrl = global.URL;
    
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink exact to={baseUrl + "/"}>
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

                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/service"}
                            >
                                Service
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    baseUrl +
                                    "/service-details/1"
                                }
                            >
                                single service
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={baseUrl + "/team"}>Team</NavLink>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/team"}
                            >
                                team
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/faq"}
                            >
                                faq
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={baseUrl + "/blog"}>
                        Blog
                    </NavLink>
                    <ul className="sub-menu">
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
                    </ul>
                </li>
                <li>
                    <NavLink to={baseUrl + "/contact"}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
