const { useGLTF } = require("@react-three/drei")

const Room = () => {
    const roomModel = useGLTF('/assets/models/room/scene.gltf')
    return (
        <mesh position={[-7, -5, -4]} rotation-y={-Math.PI * -0.09} scale={2.9}>
            <primitive object={roomModel.scene} />
        </mesh>
    )

}
export default Room;
useGLTF.preload("/assets/models/room/scene.gltf");