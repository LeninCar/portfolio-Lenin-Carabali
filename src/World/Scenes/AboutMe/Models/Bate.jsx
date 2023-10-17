import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bate(props) {
  const { nodes, materials } = useGLTF("/assets/models/bate-blender/bate.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, -Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Esfera001.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Esfera001_1.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </group>
  );
}

export default Bate;
useGLTF.preload("/bate.glb");
