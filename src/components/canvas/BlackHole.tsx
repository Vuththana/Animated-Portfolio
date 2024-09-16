import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"

const Blackhole = () => {
    const blackhole = useGLTF('./black_hole/scene.gltf')

    return (
        <primitive object={blackhole.scene} scale={1.5} position-y={0} rotation-y={0}/>
    )
}  

const BlackholeCanvas = () =>
{
    return (
        <Canvas       
        shadows
        frameloop='always'
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{
          fov: 30,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6],
        }}
        >
            <Suspense fallback={null}>
            <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            />
            <Blackhole />

            <Preload all />

            </Suspense>
        </Canvas>
    )
}

export default BlackholeCanvas