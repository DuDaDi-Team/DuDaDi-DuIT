/* eslint-disable prettier/prettier */
import { NavLink } from "react-router-dom";
import Button from "../../button";

const MainMenu = () => {
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}>
                        Service
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">Roadmap</NavLink>
                    {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/faq"}
                            >
                                faq
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/team"}
                            >
                                team
                            </NavLink>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/blog"}>
                        Team
                    </NavLink>
                    {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/blog"}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
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
                                    process.env.PUBLIC_URL +
                                    "/blog-right-sidebar"
                                }
                            >
                                blog grid right sidebar
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/blog-details/1"}
                            >
                                blog details
                            </NavLink>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink style={{ backgroundColor: "#5f28e0",paddingTop:"12px",paddingLeft:"25px",paddingBottom:"12px",paddingRight:"25px",borderRadius:"50px"}} to={process.env.PUBLIC_URL + "/contact"}>
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
