import { Physics, RigidBody } from "@react-three/rapier";
import RoomAbout from "./Models/RoomAboutMe";
import Moon from "./Models/Moon";
import Bate from "./Models/Bate";

const AboutMe = () => {


    return (
        <>
        <Bate position={[8, -1.8, -7.8]} scale={0.2}/>
        <RoomAbout position={[8, -2, -7.8]} rotation-y={-Math.PI * -0.15} scale={1.4}/>
        <Physics gravity={[0, 0, 0]}>
            <Moon position={[8, 3, -7.8]} 
            rotation-y = {-Math.PI * -0.6}
            scale={0.7}/>
        </Physics>
        </>
    )
}

export default AboutMe;