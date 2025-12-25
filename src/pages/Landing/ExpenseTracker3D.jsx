import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Expense } from "./Expense";
import { useEffect, useState } from "react";
import * as THREE from "three"

export default function ExpenseTracker3D() {
    const [cameraPos, setCameraPos] = useState([8, 9, -1]);

    useEffect(() => {
        const updateCamera = () => {
            if (window.innerWidth < 768) {
                // Mobile breakpoint
                setCameraPos([18, 9, -1]);
            } else {
                setCameraPos([8, 9, -1]);
            }
        };

        updateCamera();
        window.addEventListener("resize", updateCamera);

        return () => window.removeEventListener("resize", updateCamera);
    }, []);

    return (
        <Canvas
            shadows
            camera={{ position: cameraPos, fov: 30 }}
            gl={{
                outputEncoding: THREE.sRGBEncoding,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.5 // Increase slightly for brighter output
            }}
        >
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={true}
                enableDamping={true}
                dampingFactor={0.1}
                maxPolarAngle={Math.PI / 2.2}
                minPolarAngle={Math.PI / 4}
                maxAzimuthAngle={Math.PI / 2}
                minAzimuthAngle={-Math.PI / 2}
            />

            <ambientLight intensity={1} />


            {/* Directional light - adds soft highlights */}
            <directionalLight
                position={[5, 10, 5]} // position of the light source
                intensity={0.8}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            <Expense />
        </Canvas>

    );
}
