import { OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => { //usando destructuring
    // const boxRef = useRef();
    const sphereRef = useRef();
    const coneRef = useRef();
    const torusRef = useRef();
    const torusKnotRef = useRef();
    const ringRef = useRef();
    useFrame((state, delta) => {

        const time = performance.now() * 0.001; // Tiempo actual en segundos

        coneRef.current.position.z = Math.cos(time) * 3;
        sphereRef.current.position.z = Math.sin(time) * 3;
        torusRef.current.position.z = Math.cos(time) * 3;
        torusKnotRef.current.position.z = Math.sin(time) * 3;
        ringRef.current.position.z = Math.sin(time) * 3;

        coneRef.current.position.y = Math.cos(time) * 3;
        sphereRef.current.position.y = Math.sin(time) * 3;
        torusRef.current.position.y = Math.cos(time) * 3;
        torusKnotRef.current.position.y = Math.sin(time) * 3;
        ringRef.current.position.y = Math.sin(time) * 3;
        
        torusKnotRef.current.rotation.x += 1 * delta;
        sphereRef.current.rotation.y += 1 * delta;
        coneRef.current.rotation.z += 1 * delta;
        torusRef.current.rotation.x += 1 * delta;
        ringRef.current.rotation.y += 1 * delta;
        
        sphereRef.current.position.x = 0;
        coneRef.current.position.x = -4;
        torusRef.current.position.x = 4;
        torusKnotRef.current.position.x = 8;
        ringRef.current.position.x = -8;
    })

    return ( 
    <>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />

        <mesh ref={sphereRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshMatcapMaterial wireframe={true} color="#935116" />
        </mesh>

        <mesh ref={coneRef}>
            <coneGeometry args={[1, 2.4, 32, 5]} />
            <meshLambertMaterial wireframe={true} color="#FFC300" />
        </mesh>

        <mesh ref={torusRef}>
            <torusGeometry args={[0.9, 0.4, 32, 32]} />
            <meshToonMaterial wireframe={true} color="#34495E" />
        </mesh>

        <mesh ref={torusKnotRef}>
            <torusKnotGeometry args={[ 0.9, 0.3, 34, 17]} />
            <meshDepthMaterial  wireframe={true} color="#27AE60" />
        </mesh>

        <mesh ref={ringRef}>
            <ringGeometry args={[ 0.9, 0.3, 34]} />
            <meshPhysicalMaterial wireframe={true} color="#3498DB" />
        </mesh>
    </>
    );
}
export default Experience;