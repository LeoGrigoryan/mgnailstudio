import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/model/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-21.402, 458.69, 33.992]} rotation={[-0.102, 0, -0.963]} scale={5.481}>
          <mesh geometry={nodes.Retopo_jul_hand__0.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.Retopo_jul_hand__0_1.geometry} material={materials['Scene_-_Root']} />
          <mesh geometry={nodes.Retopo_jul_hand__0_2.geometry} material={materials['Scene_-_Root']} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model/scene.gltf')
