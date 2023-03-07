/* eslint-disable prettier/prettier */
import { useEffect, useRef } from "react";
import Button from "../../../components/button";
import SectionTitle from "../../../components/section-title";
import IconBox from "../../../components/icon-box";


const HomeAboutVisiMisiContainer = () => {
    return (
        <div className="about-us position-relative">
            <div className="container">
                <div className="row g-0 align-items-center about-center">
                    <div className="container custom-container">
<img
                            className="icon-feature"
                            src={`${process.env.PUBLIC_URL}/images/feature/icon-collaborate.png`}
                            alt="images_not_found"
                        />
                    <div className="col-xl-12 col-lg-8 mx-auto mb-3 text-center">
                        <SectionTitle
                            classOption="title-section"
                            subTitle=""
                            title="PROFIL"
                            excerptClassOption="mb-10"
                            excerpt="Dunia Inovasi Teknologi (DITEK) Indonesia merupakan perusahaan penyedia layanan, solusi dan produk inovasi teknologi informasi. DITEK berkantor pusat di Jakarta dan memiliki berbagai proyek dengan patner-patner yan ada di Jakarta. Berpengalaman lebih dari satu dekade, saat ini DITEK telah melayani 500 klien B2B di seluruh Indonesia. Seiring perkembangan perusahaan, sekarang DITEK tidak hanya menghadirkan layanan dan produk-produk digital tapi juga menjadi holding company yang melahirkan rintisan startup di bidang teknologi informasi."
                        />
                    </div>
                </div>
                <div className="row mb-n7" style={ {justifyContent:"space-around"}}>
                    <div className="col-xl-7 col-lg-6 mb-7">
                        <div className="about-content">
                        <img
                                    className="img-about"
                                    src={`${process.env.PUBLIC_URL}/images/feature/picture-1.jpg`}
                                    alt="bg-shape"
                                />
                        </div>
                    </div>
                      <div className="col-xl-5 col-lg-6 mb-7">
                        <div className="about-content">
                            <div className="prj-icon">
                                <img
                                    className="icon-about"
                                    src={`${process.env.PUBLIC_URL}/images/feature/svg-visi.png`}
                                    alt="bg-shape"
                                />
                                <div className="text-prj">
                                    <h2 style={{fontSize:"20px"}}>VISI</h2>
                                    <span>Menjadi sebuah perusahaan yang menciptakan masa depan yang lebih baik melalui teknologi dan informasi yang cerdas, terhubung, dan berkelanjutan</span>
                                </div>
                            </div>
                            <div className="prj-icon">
                                <img
                                    className="icon-about"
                                    src={`${process.env.PUBLIC_URL}/images/feature/svg-misi.png`}
                                    alt="bg-shape"
                                />
                                <div className="text-prj">
                                    <h2 style={{fontSize:"20px"}}>MISI</h2>
                                   <ul>
                                    <li>    - Profesional
                                    mengedepankan profesionalisme kemampuan individu dan tim, dalam meng hasilkan produk-produk dan solusi yang cerdas dan tepat guna</li>
                                    <li>    - Transformasi
                                    Solusi transformasi digital yang inovatif untuk meningkatkan efisiensi dan produktifitas kepada mitra bisnis </li>
                                    <li>    - Kualitas 
                                    Memberikan kualitas layanan yang terbaik kepada para klien secara konsisten dan berkelanjutan yang dapat bersaing dalam dunia digital global </li>
                                   </ul>
                                   
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    </div>
                       
            </div>
            <img
                className="about-shape"
                src={`${process.env.PUBLIC_URL}/images/about/shape.png`}
                alt="bg-shape"
            />
        </div>
    );
};

export default HomeAboutVisiMisiContainer;
