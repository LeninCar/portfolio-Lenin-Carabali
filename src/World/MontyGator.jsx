const { useGLTF, useAnimations } = require("@react-three/drei")
import { useEffect, useRef } from "react";

const MontyGator = () => {
    const montyGatorRef = useRef();
    const montyGatorModel = useGLTF('/assets/models/monty_gator/scene.gltf')
    const {animations} = montyGatorModel;

    const { actions } = useAnimations(animations, montyGatorRef);

    useEffect(() => {
        const action = actions["RIG_Montgomery_Gator|Monty_DoorSlam_RIG_Montgomery_Gator"]
        action.play()
    }, [])

    return (
        <mesh castShadow position={[-8, -4.6, -4]} rotation-y={-Math.PI * -0.15} scale={2.4} ref={montyGatorRef}>
            <primitive object={montyGatorModel.scene} />
        </mesh>
    )

}
export default MontyGator;
useGLTF.preload("/assets/models/monty_gator/scene.gltf");
