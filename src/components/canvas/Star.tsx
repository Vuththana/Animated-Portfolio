import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useRef, Suspense } from 'react';
import { Group } from 'three'; // Import Group type

import * as random from 'maath/random/dist/maath-random.cjs';

const Stars = ({ color = '#ffffff', size = 0.00001, count = 5000 }) => {
    const ref = useRef<Group>(null); // Specify that ref is a Group
    const [sphere] = useState(() => {
        const arr = new Float32Array(count * 3); // 3 coordinates per point (x, y, z)
        random.inSphere(arr, { radius: 1.2 });
        return arr;
    });

    useFrame((_, delta) => { // Omit 'state' if not used
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Points positions={sphere} stride={3} frustumCulled>
                <PointMaterial
                    transparent
                    color={color}
                    size={size}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const StarsCanvas = () => {
    return (
        <div className='w-full h-full absolute inset-0 z-[-1]'>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars color='#fffff' size={0.001} count={500} /> {/* Example of passing props */}
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
