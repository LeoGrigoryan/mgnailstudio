import React, { useEffect, useState } from 'react';
import './Main.css';
import Window from '../Window/Window';
import Context from '../../Context';
import { useContext } from 'react';

export default function Main() {
    const mail = useContext(Context)

    const [val, setVal] = useState(0);
    const [bool, setBool] = useState(true)

    useEffect(() => {
        function an() {
            requestAnimationFrame(an);
            setVal(Math.min(window.scrollY / 3.51, 270))

        }
        an()
    }, [])


    return (
        <main>
            <div className="rotbar" style={{ rotate: val + 'deg' }}>

                <div className="home" style={{ rotate: -val + 'deg' }}>
                    <h2>Melania <span>grigoryan</span> </h2>
                    <p>We Would love to introduce <b>Melania Grigoryan's</b> nail
                        <br />
                        salon and our Works and about us overall</p>
                </div>
                <div className="comb">
                    <div className="pricelist" onClick={() => {
                        mail.setOpen('0')
                        mail.setThr('none')
                        mail.setTwo('none')
                        mail.setOne('flex')
                        document.body.style.overflow = 'hidden';
                        mail.setOpen('calc(100vh - 5rem)')
                        mail.setCloser('4.5rem')
                    }} style={{ rotate: -val + 'deg' }}>
                        <h2>
                            PRICELIST
                        </h2>
                        <button>view</button>
                    </div>
                    <div className="gallery" onClick={() => {
                        mail.setThr('flex')
                        mail.setTwo('none')
                        mail.setOne('none')
                        mail.setOpen('calc(100vh - 5rem)')
                        document.body.style.overflow = 'hidden';
                        mail.setCloser('4.5rem')
                    }} style={{ rotate: -val + 'deg' }}>
                        <h2>
                            GALLERY
                        </h2>
                        <button>view</button>
                    </div>
                </div>
                <div className="about" onClick={() => {
                    mail.setThr('none')
                    mail.setTwo('flex')
                    mail.setOne('none')
                    mail.setOpen('calc(100vh - 5rem)')
                    document.body.style.overflow = 'hidden';
                    mail.setCloser('4.5rem')
                }} style={{ rotate: -val + 'deg' }}>
                    <h2>
                        ABOUT
                    </h2>
                    <button>view</button>
                </div>
            </div>
            <Window />
            <div className="l path"></div>
            <div className="r path"></div>
        </main>
    )
}
