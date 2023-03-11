/* eslint-disable prettier/prettier */
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";
import Logo from "../../logo";

const MobileMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (
            parentEl?.classList.contains("menu-expand") ||
            target.classList.contains("menu-expand")
        ) {
            const element = target.classList.contains("icon")
                ? parentEl
                : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    const baseUrl = global.URL;
    return (
        <div className={`offcanvas-modal ${show ? "show" : ""}`}>
            <div className="offcanvas-dialog">
                <div className="menu-content">
                    <div className="offcanvas-header">
                        <Logo
                            classOption="offcanvas-logo d-inline-block"
                            image={`${baseUrl}/images/logo/logo.png`}
                        />
                        <button
                            type="button"
                            className="btn-close"
                            onClick={onClose}
                        ></button>
                    </div>

                    <nav id="offcanvasNav" className="offcanvas-menu">
                        <ul>
                            <li>
                                <NavLink exact to={baseUrl + "/"}>
                                    Beranda
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={baseUrl + "/visi-misi"}>
                                    Profil
                                </NavLink>
                                <span
                                    className="menu-expand"
                                    onClick={onClickHandler}
                                    aria-hidden="true"
                                ></span>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/visi-misi"
                                            }
                                        >
                                            visi misi
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/partner"
                                            }
                                        >
                                            partner
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/blog-right-sidebar"
                                            }
                                        >
                                            projek
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink
                                    to={baseUrl + "/software-development"}
                                >
                                    Layanan
                                </NavLink>
                                <span
                                    className="menu-expand"
                                    onClick={onClickHandler}
                                    aria-hidden="true"
                                ></span>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/software-development"
                                            }
                                        >
                                            software development
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/it-solution"
                                            }
                                        >
                                            it solution
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/system-integrasi"
                                            }
                                        >
                                            sistem integrasi
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NavLink
                                    to={baseUrl + "/direksi"}
                                >
                                    tim
                                </NavLink>
                                <span
                                    className="menu-expand"
                                    onClick={onClickHandler}
                                    aria-hidden="true"
                                ></span>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/direksi"
                                            }
                                        >
                                            direksi
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/marketing-team"
                                            }
                                        >
                                            marketing
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/dev-team"
                                            }
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
                                {/* <span
                                    className="menu-expand"
                                    onClick={onClickHandler}
                                    aria-hidden="true"
                                ></span>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl + "/blog"
                                            }
                                        >
                                            blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/blog-left-sidebar"
                                            }
                                        >
                                            blog grid left sidebar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/blog-right-sidebar"
                                            }
                                        >
                                            blog grid right sidebar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                baseUrl +
                                                "/blog-details/1"
                                            }
                                        >
                                            blog details
                                        </NavLink>
                                    </li>
                                </ul> */}
                            </li>
                            <li>
                                <NavLink
                                    to={baseUrl + "/contact"}
                                >
                                    Kontak
                                </NavLink>
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
                </div>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MobileMenu;
