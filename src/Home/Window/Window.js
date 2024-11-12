import React from 'react';
import './Window.css';
import Context from '../../Context';
import { useContext } from 'react';
import one from './gallerypics/1.jpg';
import one2 from './gallerypics/2.jpg';
import one3 from './gallerypics/3.jpg';
import one4 from './gallerypics/4.jpg';
import one5 from './gallerypics/5.jpg';
import one6 from './gallerypics/6.jpg';
import one7 from './gallerypics/7.jpg';


export default function Window() {

    const mail = useContext(Context)

    const galobj = [
        {
            url: one,
        },
        {
            url: one3,
        },
        {
            url: one2,
        },
        {
            url: one4,
        },
        {
            url: one5,
        },
        {
            url: one6,
        },
        {
            url: one7,
        }
    ]

    return (
        <div className='window' style={{ height: mail.open }}>
            <div className="formwind">
                <div className="gallery2" style={{ display: mail.thr }}>
                    {
                        galobj.map((item, index) => (
                            <div className={'box'}>
                                <img src={'%PUBLIC_URL%/' + item.url} />
                            </div>
                        ))
                    }
                </div>
                <div className="about2" style={{ display: mail.two }}>
                    <div className="text" align='justify'>
                        <span>
                            Welcome to MG Nail Studio—a space where I’ve poured my heart and soul. This studio in the heart of Yerevan is a long-held dream that I, Melania Grigorian, brought to life in 2023, after more than a decade of experience in the beauty industry. For me, self-care is more than skin deep; it’s a way to embrace confidence, express self-love, and find a sense of harmony.
                            <br />
                            <br />
                            MG Nail Studio isn’t just a salon; it’s a place where I aim to inspire and uplift our clients. Every detail, every color, every product is carefully chosen to let you fully relax and entrust yourself to skilled hands. We use only top-quality materials and stay on the cutting edge of techniques to ensure each service is both professional and unique.
                            <br />
                            <br />
                            I believe beauty lies within each of us, and my mission is to help you see and celebrate it. At MG Nail Studio, you’ll find not just beautiful nails but a warm atmosphere, genuine care, and a welcoming escape from the everyday. Thank you for trusting us with your beauty. We’re here to make you feel a little happier and a lot more confident each time you leave our studio.
                            <br />
                            <br />
                            | Brows |
                            <br />
                            | Lashes |
                            <br />
                            | Footnail |
                            <br />
                            | Handnail |
                            <br />
                            <br />
                            for more info contact <a href="https://www.instagram.com/mg_nailstudio__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@mg_nailstudio__</a> 
                        </span>
                    </div>
                </div>
                <div className="pricelist2" style={{ display: mail.one }}>
                    <ul>
                        <h3>| HANDNAIL |</h3>
                        <br />
                        <li>CLEANING: 3000-4000 AMD</li>
                        <li>CLEANING + SHILAK: 6000 AMD</li>
                        <li>CLEANING + SHILAK + FRENCH: 7000 AMD</li>
                    </ul> 
                    <ul>
                        <h3>| FOOTNAIL |</h3>
                        <br />
                        <li>CLEANING: 4000-5000 AMD</li>
                        <li>CLENING + SHILAK: 7000-8000 AMD</li>
                        <li>CLENING + SHILAK + FRENCH: 7000-10.000 AMD</li>
                    </ul>
                    <ul>
                        <h3>| LASHES |</h3>
                        <br />
                        <li>CLASSICA 2D: 10.000 AMD</li>
                        <li>3D: 12.000 AMD</li>
                        <li>4D: 15.000 AMD</li>
                        <li>MEGA VOLUME: 20.000 AMD</li>
                        <li>LOMINATION: 9000 AMD</li>
                        <li>LOMINATION, COLORATION, BOTOX: 12.000 AMD</li>
                    </ul>
                    <ul>
                        <h3>| BROW |</h3>
                        <br />
                        <li>PERMANENT: 30.000 AMD</li>
                        <li>CORRECTION: 15.000 AMD</li>
                        <li>LOMINATION: 8000 AMD</li>
                        <li>LOMINATION, COLORATION: 10.000 AMD</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
