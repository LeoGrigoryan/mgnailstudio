import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import { Canvas } from '@react-three/fiber';
import Hand from './Hand';

export default function Home() {

  const [opac, setopac] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setopac(1)
    }, 2500);
  }, [])

  return (
    <div>
      <Header />
      <p className='allab' style={{opacity: opac}}>Movses Khorenatsi 3 |  <a href="tel:094204120">94 204120</a> {' '} | {' '} <a href="https://www.instagram.com/mg_nailstudio__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@mg_nailstudio__</a></p>
      <Main />
      <Hand/>
    </div>
  )
}
