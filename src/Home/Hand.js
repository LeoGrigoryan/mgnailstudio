import React, { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from './Scene';

export default function Hand() {

    const [scrl, setScrl] = useState(-Math.PI / 2);
    const [size, setSize] = useState(11);
    const [pos, setPos] = useState(-9);

    useEffect(() => {
        function an() {
            requestAnimationFrame(an);
            setScrl(Math.min((-Math.PI / 2) + window.scrollY * .01, Math.PI * 2.5));
        }
        an()
        if (window.innerWidth < 426) {
            setPos(-10.5)
            setSize(12.5)
        }
    }, [])

    return (
        <div className='modelCov'>
            <Canvas camera={{ position: [size, 0, 0] }}>
                <ambientLight intensity={3} color={'#505501'} />
                <directionalLight intensity={2} />
                <mesh position={[0, pos, 0]} rotation={[0, scrl, 0]}>
                    <Model />
                </mesh>
            </Canvas>
        </div>
    )
}
