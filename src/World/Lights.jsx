import { useHelper } from "@react-three/drei";
import { useMemo, useRef } from "react";
import { HemisphereLightHelper, SpotLightHelper } from "three";
import { PointLightHelper } from "three";
import { DirectionalLightHelper } from "three";

const Lights = () => {

    const directionalLightRef = useRef();
    useHelper(directionalLightRef, DirectionalLightHelper);
    
    const pointLightRef = useRef();
    // useHelper(pointLightRef, PointLightHelper, 2, "hotpink");


    const hemisphereLightRef = useRef();
    // useHelper(hemisphereLightRef, HemisphereLightHelper);

    return <>
            <directionalLight 
                ref={directionalLightRef} 
                position={[10, 10, 5]} 
                intensity={2} color={0xff9700}
                castShadow
                shadow-mapSize={[512, 512]}
                shadow-camera-far={30}
                shadow-camera-left={-9} // Ajusta el valor negativo para ampliar la sombra a la izquierda
                shadow-camera-right={9} // Ajusta el valor positivo para ampliar la sombra a la derecha
                shadow-camera-top={9}   // Ajusta el valor positivo para ampliar la sombra hacia arriba
                shadow-camera-bottom={-9}
                />
            <pointLight ref={pointLightRef} position={[-8, 2.5, -2]} intensity={40} color={"blue"} castShadow/>
            <hemisphereLight ref={hemisphereLightRef} position={[-8, 10, -2]} intensity={1} color={"gray"} />
        </>
}
export default Lights;
