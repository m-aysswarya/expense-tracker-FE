import React, { useRef, useEffect } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from "three"
import gsap from "gsap"

export function Expense(props) {
    const { nodes } = useGLTF('models/scene1.glb')
    const texture = useTexture('Textures/baked8.jpg')
    texture.flipY = false
    texture.encoding = THREE.sRGBEncoding;
    // texture.anisotropy = 16; // sharper textures


    const textureMaterial = new THREE.MeshStandardMaterial({ map: texture })

    // Named refs
    const pigRef = useRef()
    const coinRef = useRef()
    const cashRef = useRef()
    const targetRef = useRef()
    const calcRef = useRef()
    const graphRef = useRef()

    useEffect(() => {
        const animateFloat = (ref, height = 0.2, speed = 2, rotation = 0.05) => {
            if (!ref.current) return

            // Float
            gsap.to(ref.current.position, {
                y: `+=${height}`,
                duration: speed,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            })

            // Gentle rotation
            gsap.to(ref.current.rotation, {
                z: `+=${rotation}`,
                duration: speed + 1,
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut"
            })
        }

        animateFloat(pigRef, 0.25, 2)      // pig floats more
        animateFloat(coinRef, 0.2, 1.8)    // coins moderate
        animateFloat(cashRef, 0.3, 2.2)    // cash slightly more
        animateFloat(targetRef, 0.2, 2)    // target normal
        animateFloat(calcRef, 0.1, 2.5)    // calculator lowest float
        animateFloat(graphRef, 0.15, 2.3)  // graph subtle
    }, [])

    return (
        <group {...props} dispose={null}>
            {/* Pig */}
            <group
                name="pig"
                ref={pigRef}
                position={[0.215, 0.822, 2.079]}
            >
                <mesh geometry={nodes['Node-Mesh'].geometry} material={textureMaterial} />
                <mesh geometry={nodes['Node-Mesh_1'].geometry} material={textureMaterial} />
            </group>

            {/* Coin pile */}
            <mesh
                name="Coin_Pile"
                ref={coinRef}
                geometry={nodes.Coin_Pile.geometry}
                material={textureMaterial}
                position={[1.63, 0.002, 1.579]}
            />

            {/* Cash group */}
            <group
                name="Cash"
                ref={cashRef}
                position={[0.873, 0.085, -1.486]}
            >
                <mesh geometry={nodes.Cash1779.geometry} material={textureMaterial} />
                <mesh geometry={nodes.Cash1779_1.geometry} material={textureMaterial} />
                <mesh geometry={nodes.Cash1779_2.geometry} material={textureMaterial} />
            </group>

            {/* Target group */}
            <group
                name="Target005"
                ref={targetRef}
                position={[-1.78, 0, -1.748]}
                rotation={[0, 1.409, 0]}
            >
                <mesh geometry={nodes.Target005_1.geometry} material={textureMaterial} />
                <mesh geometry={nodes.Target005_2.geometry} material={textureMaterial} />
                <mesh geometry={nodes.Target005_3.geometry} material={textureMaterial} />
            </group>

            {/* Calculator */}
            <group
                name="calculator"
                ref={calcRef}
                position={[-0.461, 1.866, 0.906]}
            >
                <mesh geometry={nodes['Text-Mesh'].geometry} material={textureMaterial} />
                <mesh geometry={nodes['Text-Mesh_1'].geometry} material={textureMaterial} />
                <mesh geometry={nodes['Text-Mesh_2'].geometry} material={textureMaterial} />
                <mesh geometry={nodes['Text-Mesh_3'].geometry} material={textureMaterial} />
                <mesh geometry={nodes['Text-Mesh_4'].geometry} material={textureMaterial} />
                <mesh geometry={nodes['Text-Mesh_5'].geometry} material={textureMaterial} />
            </group>

            {/* Graph */}
            <group
                name="graph007"
                ref={graphRef}
                position={[2.187, 0, 0]}
            >
                <mesh geometry={nodes.Plane007.geometry} material={textureMaterial} />
                <mesh geometry={nodes.Plane007_1.geometry} material={textureMaterial} />
            </group>
        </group>
    )
}

useGLTF.preload('models/scene1.glb')
