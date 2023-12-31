import { BakeShadows, OrbitControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import MontyGator from "./Models/MontyGator";
import Room from "./Models/Room";
import Rock, { Gun } from "./Models/Gun";
import Text from "./Text/Text";
import { Laptop } from "./Models/Laptop";

const Welcome = () => { //usando destructuring
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
        
        sphereRef.current.position.x = 1;
        coneRef.current.position.x = 5;
        torusRef.current.position.x = 10;
        torusKnotRef.current.position.x = 15;
        ringRef.current.position.x = 20;
    })

    return ( 
    <>
    <Suspense fallback={null}>
        <BakeShadows /> {/*pausar sombras */}
        <MontyGator castShadow position={[-8, -4.6, -4]} rotation-y={-Math.PI * -0.15} scale={2.4}/>
        <Room reciveShadow position={[-7, -5, -4]} rotation-y={-Math.PI * -0.09} scale={2.9} />
        <Gun position={[-11, -3.3, -2]} rotation-y={-Math.PI * -0.19} scale={0.09}/>
        <Laptop position={[-4, -3.3, -0.7]} scale={2} rotation-y={-Math.PI * 0.8}>
            <Text />
        </Laptop>
        
    </Suspense>
        <group scale={[0.5, 0.5, 0.5]}>
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
        </group>
    
    </>
    );
}
export default Welcome;