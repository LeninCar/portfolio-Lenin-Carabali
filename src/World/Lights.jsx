import { useHelper } from "@react-three/drei";
// import { useControls } from "leva";
import { useMemo, useRef } from "react";
import { HemisphereLightHelper, SpotLightHelper } from "three";
import { PointLightHelper } from "three";
import { DirectionalLightHelper } from "three";

const Lights = () => {

    const directionalLightRef = useRef();
    // useHelper(directionalLightRef, DirectionalLightHelper);
    
    const pointLightRef = useRef();
    useHelper(pointLightRef, PointLightHelper, 2, "hotpink");


    const hemisphereLightRef = useRef();
    useHelper(hemisphereLightRef, HemisphereLightHelper);

    // const options = useMemo(()=>{
    //     return{
    //         intensitySL: {value: 1000, min:0, max: 1000, step: 1},
    //         colorSL: {value: "white"},
    //     }
    // })

    // const {intensitySL, colorSL} = useControls("Spot Light", options) 
    return <>
            {/* <ambientLight intensity={0.3}/> */}
            {/* <directionalLight ref={directionalLightRef} position={[10, 10, 5]} intensity={2} color={0xff9700} castShadow/> */}
            {/* <directionalLight 
                ref={directionalLightRef} 
                position={[10, 10, 5]} 
                intensity={2} color={0xff9700}
                castShadow
                shadow-mapSize={[256, 256]}
                shadow-camera-far={20}
                shadow-camera-left={-4}
                shadow-camera-right={4}
                shadow-camera-top={4}
                shadow-camera-bottom={-4}

                /> */}
            <pointLight ref={pointLightRef} position={[-8, 2.5, -2]} intensity={40} color={"blue"} castShadow/>
            <hemisphereLight ref={hemisphereLightRef} position={[-8, 10, -2]} intensity={1} color={"gray"} castShadow />
        </>
}
export default Lights;
