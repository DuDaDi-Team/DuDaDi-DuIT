/* eslint-disable prettier/prettier */
import React from "react";
import Accordion, {
    AccordionItem,
    AccordionTitle,
    AccordionContent,
} from ".";

const AccordionWrapKarir = () => {
    return (
        <Accordion classOption="accordion-style2 no-bg">
            <AccordionItem id="one">
                <AccordionTitle id="one">
                    <span className="question-tag">JOB: </span>Marketing Staff
                </AccordionTitle>
                <AccordionContent id="one">
                    <h2>Kualifikasi:</h2>
                    <ul>
                        <li> &#8226; S1 semua jurusan.</li>
                        <li> &#8226; Berpengalaman dibidang marketing minimal 2 tahun di bidang packaging</li>
                        <li> &#8226; Memiliki pengetahuan tentang bisnis percetakan menjadi nilai plus.</li>
                        <li> &#8226; Menguasai teknik pemasaran dan pengembangan bisnis.</li>
                        <li> &#8226; Mampu berkomunikasi dengan baik.</li>
                        <li> &#8226; Memiliki kemampuan negoisasi yang baik.</li>
                        <li> &#8226; Menguasai strategi marketing.</li>
                        <li> &#8226; Mampu bekerja mandiri dan dalam tim.</li>
                        <li> &#8226; Mampu bekerja dibawah tekanan dan deadline yang singkat.</li>
                        <li> &#8226; Siap berkerja dengan target.</li>
                    </ul>

                    <br></br>

                    <h2>Deskripsi Pekerjaan:</h2>

                    <ul>
                        <li> &#8226; Membuat target penjualan.</li>
                        <li> &#8226; Mencari pelanggan baru.</li>
                        <li> &#8226; Mencari, mengidentifikasi, follow up dan memonitor proposal tender.</li>
                        <li> &#8226; Membuat laporan harian/mingguan/bulanan.</li>
                        <li> &#8226; Membangun dan menjaga hubungan baik dengan pelanggan lama dan baru.</li>
                        <li> &#8226; Melakukan analisa pasar untuk mengetahui kebutuhan pelanggan.</li>
                        <li> &#8226; Membuat analisa dan strategi serta penerapan untuk meningkatkan penjualan.</li>
                        <li> &#8226; Koordinasi marketing program kepada semua pihak.</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem id="two">
                <AccordionTitle id="two">
                    <span className="question-tag">JOB : </span>Fullstack Developer
                </AccordionTitle>
                <AccordionContent id="two">
                    <h2>Job Description:</h2>

                    <ul>
                        <li> &#8226; Analyze, design, and develop new feature Provide internal test before release to QA</li>
                        <li> &#8226; Provide ongoing maintenance, support, and enhancement in existing system Maintain code bucket, documentation, and versioning</li>
                        <li> &#8226; Monitor server, perform data tuning, and provide technology improvement Collaborate with other function in team</li>
                    </ul>

                    <br></br>
                    
                    <h2>Requirements:</h2>

                    <li> &#8226; Proficient understanding on tech development platform such as Java, Golang, Javascript (NodeJS, vueJS, nextJS, ReactJS and others),SQL Database</li>
                    <li> &#8226; Preferable have experiences in related position. Fresh graduated are welcome Flexible and hardworker</li>
                    <li> &#8226; Excellent communication in English (would be an advantage)</li>
                    <li> &#8226; Communicative and detail-oriented</li>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionWrapKarir;
