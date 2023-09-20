import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

export function Gun(props) {
  const { nodes } = useGLTF("/assets/models/gun/gun.glb");
  const PATH = "/assets/textures/metal/"

  const propsTexture = useTexture({
    map: PATH + 'metalColor.jpg',
    // displacementMap: PATH + 'metalHeight.png',
    normalMap: PATH + 'metalNormal.jpg',
    roughnessMap: PATH + 'metalRoughness.jpg',
    aoMap: PATH + 'metalAO.jpg',
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        position={[-6, -3.3, -2]} 
        rotation-y={-Math.PI * -0.19}
        geometry={nodes.Object_2.geometry}
        scale={0.09}
        /* // material={materials.Material__26}
        // rotation={[-Math.PI / 2, 0, 0]} */
      >
      <meshStandardMaterial {...propsTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/assets/models/gun/gun.glb");