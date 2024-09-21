import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

interface ComputerProps {
    isMobile: boolean; // Explicitly type the isMobile prop
}

const Computer: React.FC<ComputerProps> = ({ isMobile }) => {
    const computer = useGLTF('./computer/scene.gltf');

    return (
        <primitive
            object={computer.scene}
            scale={isMobile ? 4 : 5.2}
            position-y={0}
            rotation-y={0}
        />
    );
};

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false); // Explicitly type the state

    useEffect(() => {
        // Add a listener for changes to the screen size
        const mediaQuery = window.matchMedia("(max-width: 640px)");

        // Set the initial value of the `isMobile` state variable
        setIsMobile(mediaQuery.matches);

        // Define a callback function to handle changes to the media query
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches);
        };

        // Add the callback function as a listener for changes to the media query
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        // Remove the listener when the component is unmounted
        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas
            shadows
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
                {/* Lights */}
                <ambientLight intensity={0.53} /> {/* Soft light */}
                <directionalLight
                    position={[5, 5, 5]} // Direction of the light
                    intensity={1} // Brightness of the light
                    castShadow // Enables shadowing
                />
                <pointLight
                    position={[-4, 2, 6]} // Position of the point light
                    intensity={0.8} // Brightness of the point light
                    decay={2} // How quickly the light diminishes
                />
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer isMobile={isMobile} />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default ComputerCanvas;
