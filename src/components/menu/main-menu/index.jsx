/* eslint-disable prettier/prettier */
import { NavLink } from "react-router-dom";
import Button from "../../button";

const MainMenu = () => {
    const baseUrl = global.URL;
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink exact to={baseUrl + "/"}>
                        Beranda
                    </NavLink>
                </li>
                <li>
                    <NavLink to={baseUrl + "/visi-misi"}>
                        Profil
                    </NavLink>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/visi-misi"}
                            >
                                Visi Misi
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    baseUrl +
                                    "/partner"
                                }
                            >
                                Partner
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
                                Projek
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={baseUrl + "/software-development"}>
                        Layanan
                    </NavLink>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/software-development"}
                            >
                                software development
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    baseUrl +
                                    "/it-solution"
                                }
                            >
                                it solution
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    baseUrl +
                                    "/system-integrasi"
                                }
                            >
                                sistem integrasi
                            </NavLink>
                        </li>
                        {/* <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    baseUrl +
                                    "/faq"
                                }
                            >
                                it konsultan
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
                                iot
                            </NavLink>
                        </li> */}
                    </ul>
                </li>
                <li>
                    <NavLink to={baseUrl + "/direksi"}>
                        Tim
                    </NavLink>
                    <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/direksi"}
                            >
                                direksi
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/marketing-team"}
                            >
                                marketing
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/dev-team"}
                            >
                                developer
                            </NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to={baseUrl + "/blog"}>
                        Artikel
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
                        Kontak
                    </NavLink>
                    {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/faq"}
                            >
                                email
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/team"}
                            >
                                maps
                            </NavLink>
                        </li>
                    </ul> */}
                </li>
                <li>
                    <NavLink to={baseUrl + "/karir"}>
                        Karir
                    </NavLink>
                    {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/faq"}
                            >
                                marketing staff
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={baseUrl + "/team"}
                            >
                                fullstack developer
                            </NavLink>
                        </li>
                    </ul> */}
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;
