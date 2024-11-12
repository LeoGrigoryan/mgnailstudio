import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../../mainPictures/logo.png';
import { Link } from 'react-router-dom';
import Context from '../../Context';
import { useContext } from 'react';

export default function Header() {

    const mail = useContext(Context)

    const [bedtr, setBeftr] = useState(false)
    const [afttr, setafttr] = useState(false)
    const [scroll, setScroll] = useState(0)

    useEffect(() => {

        function call() {
            setBeftr(true)
        }
        function aftcall() {
            setafttr(true)
        }

        window.onbeforeunload = () => {
            call()
            aftcall()
            setScroll(0)
            window.scrollTo(0, 0)
        }
        window.onload = () => {
            call()
        }

        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 1000);
        setTimeout(() => {
            setScroll(30)
        }, 1900);
    }, [])

    useEffect(() => {
        window.onscroll = () => {
            setScroll(Math.min(30 + (window.scrollY * .3), 300))
        }
    }, [scroll])


    return (
        <header className='center' style={{ animation: !afttr ? 'goer .8s ease-in-out forwards' : 'none' }}>
            <div className="form center">
                <nav>
                    <ul className='flex c-center'>
                        <li style={{ '--c': 2 }} onClick={() => {
                            document.body.style.overflow = 'visible';
                            mail.setCloser('0 =100%')
                            mail.setOpen('0')
                        }}>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li style={{ '--c': 1 }} onClick={() => {
                            mail.setThr('none')
                            mail.setTwo('none')
                            mail.setOne('flex')
                            document.body.style.overflow = 'hidden';
                            mail.setOpen('calc(100vh - 5rem)')
                            mail.setCloser('4.5rem')
                        }}>PriceList</li>
                    </ul>
                </nav>
                <div className="logo" style={{ display: bedtr ? 'block' : 'none' || afttr ? 'block' : 'none' }} onClick={() => {
                    document.body.style.overflow = 'visible';
                    mail.setOpen('0')
                    mail.setCloser('0')
                    window.location.reload();
                }}>
                    <Link to='/' className='controlerof'>
                        <img src={'%PUBLIC_URL%/' + logo} />
                        <div className="overlayer"></div>
                    </Link>
                </div>
                <nav>
                    <ul className='flex c-center'>
                        <li style={{ '--c': 1 }} onClick={() => {
                            mail.setThr('none')
                            mail.setTwo('flex')
                            mail.setOne('none')
                            mail.setOpen('calc(100vh - 5rem)')
                            document.body.style.overflow = 'hidden';
                            mail.setCloser('4.5rem')
                        }} >About</li>
                        <li style={{ '--c': 2 }} onClick={() => {
                            mail.setThr('flex')
                            mail.setTwo('none')
                            mail.setOne('none')
                            mail.setOpen('calc(100vh - 5rem)')
                            mail.setCloser('4.5rem')
                            document.body.style.overflow = 'hidden';
                        }} >Gallery</li>
                    </ul>
                </nav>
                <nav className='hidnav'>
                    <ul className='flex c-center'>
                        <li style={{ '--c': 0 }}>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li style={{ '--c': 0 }}>About</li>
                        <li style={{ '--c': 0 }}>Price List</li>
                        <li style={{ '--c': 0 }}>Gallery</li>
                    </ul>
                </nav>
                <div className="line" style={{ width: scroll + 'rem' }}></div>
            </div>
            <div className="outside-close" style={{ height: mail.closer }} onClick={() => {
                document.body.style.overflow = 'visible';
                mail.setCloser('0%')
                mail.setOpen('0')
            }}><span>✕</span></div>
        </header>
    )
}
